import React, { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Label from "@radix-ui/react-label";
import { PClick } from "../../../pages/Profile/styled";
import { PutPrestadorDTO } from "../../../dto/PutPrestadorDTO";
import { api } from "../../../api/axios";
import { CPMapa } from "../../Others/CPMapa/index.tsx";
import { AiOutlineClose } from "react-icons/ai";
import styles from './EditDialog.module.css';
import { PrestadorContext } from "../../../context/prestadorConntext.tsx";
import { CPModalConfirm } from "../../Modals/CPModalConfirmacao/index.tsx";

export function EditDialog() {
  const [formData, setFormData] = useState({
    name: "",
    telefone: "",
    horarioDisponibilidade: "",
  });

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const { buscarDadosPrestador } = useContext(PrestadorContext); 
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    icone: "",
    titulo: "",
    menssagem: "",
    variant: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCoordinateChange = (lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  const handleSave = async () => {
    try {
      const prestadorUpdate: PutPrestadorDTO = {
        nome: formData.name,
        telefone: formData.telefone,
        horarioDisponibilidade: formData.horarioDisponibilidade,
        latitude,
        longitude,
      };
      await api.put<PutPrestadorDTO>("/prestador", prestadorUpdate);
      await buscarDadosPrestador();

      setModalData({
        icone: "✅",
        titulo: "Sucesso!",
        menssagem: "Perfil atualizado com sucesso!",
        variant: "sucesso",
      });
      setModalOpen(true);

    } catch (error) {

      setModalData({
        icone: "❌",
        titulo: "Erro!",
        menssagem: "Ocorreu um erro ao salvar os dados. Tente novamente.",
        variant: "erro",
      });
      setModalOpen(true);
    }
  };

  const handleSubmit = async () => {
    await handleSave();
    document.getElementById("close-modal-btn")?.click();
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <PClick>editar</PClick>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay}>
            <Dialog.Content className={styles.modal}>
              <div className={styles.header}>
                <div>
                  <Dialog.Title> Editar perfil </Dialog.Title>
                  <Dialog.Description>
                    Altere seus dados e clique em salvar.
                  </Dialog.Description>
                </div>

                <Dialog.Close asChild>
                  <button className={styles.closeButton}>
                    <AiOutlineClose size={26} />
                  </button>
                </Dialog.Close>
              </div>
              <div className={styles.scrollableContent}>
                <div className={styles.inputGroup}>
                  <div className={styles.inputIndividual}>
                    <Label.Root htmlFor="name" className={styles.label}>
                      Nome:
                    </Label.Root>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.inputIndividual}>
                    <Label.Root htmlFor="telefone" className={styles.label}>
                      Telefone:
                    </Label.Root>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      className={styles.input}
                      placeholder="Digite seu telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.inputIndividual}>
                    <Label.Root
                      htmlFor="horarioDisponibilidade"
                      className={styles.label}
                    >
                      Horário de Disponibilidade:
                    </Label.Root>
                    <input
                      id="horarioDisponibilidade"
                      name="horarioDisponibilidade"
                      type="text"
                      className={styles.input}
                      placeholder="Ex: 9h às 18h"
                      value={formData.horarioDisponibilidade}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.mapa}>
                  <CPMapa onCoordinateChange={handleCoordinateChange} />
                </div>
                <div className={styles.divButton}>
                  <button onClick={handleSubmit} className={styles.closeModalButton}>
                    Salvar
                  </button>
                </div>
              </div>
              <Dialog.Close asChild>
                <button id="close-modal-btn" style={{ display: "none" }}></button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>

      {modalOpen && (
        <CPModalConfirm
          icone={modalData.icone}
          titulo={modalData.titulo}
          menssagem={modalData.menssagem}
          variant= {modalData.variant as "sucesso" | "erro"}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}