import { useForm } from "react-hook-form";
import { Formulario, GrupoBotao, ModalBackground } from "./styled";
import { CPButtonG } from "../../Buttons/CPButtonG";
import { CPInput04 } from "../../Inputs/CPInput04";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CPSelect } from "../../Inputs/CPSelect";
import { useState } from "react";
import { CPModalConfirm } from "../../Modals/CPModalConfirmacao";
import { useNavigate } from "react-router";

function validaPreco(preco: string): boolean {
  const formatoPreco = /^R\$ ?\d+(,\d{1,2})?$/;
  return formatoPreco.test(preco);
}

const schema = z.object({
  titulo: z
    .string({ required_error: "Título é obrigatório" })
    .trim()
    .min(3, "O título deve ter no mínimo 3 caracteres"),
  descricao: z
    .string({ required_error: "Descrição é obrigatória" })
    .trim()
    .min(1, "Descrição é obrigatória"),
  preco: z
    .string({ required_error: "O preço não pode estar vazio" })
    .trim()
    .min(1, "O preço não pode estar vazio")
    .refine((value) => validaPreco(value), {
      message: "O preço deve estar no formato de moeda real (R$ 10,00).",
    }),
  categoria: z
    .string({ required_error: "Categoria é obrigatória" })
    .trim()
    .min(1, "Categoria é obrigatória"),
});

export function CPForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [visibilidadeModal, setVisibilidadeModal] = useState<boolean>(false);

  const navigate = useNavigate();

  function onSubmit(data: unknown) {
    console.log("Dados enviados:", data);
  }

  return (
    <>
      <Formulario onSubmit={handleSubmit(onSubmit)}>
        <CPInput04
          titulo="Título"
          placeholder="Título"
          variantSize="grande"
          register={register("titulo")}
          errorMessage={errors.titulo?.message}
        />

        <CPInput04
          titulo="Preço"
          placeholder="Preço"
          variantSize="grande"
          register={register("preco")}
          errorMessage={errors.preco?.message}
        />

        <CPInput04
          titulo="Descrição"
          placeholder="Descrição"
          variantSize="grande"
          register={register("descricao")}
          errorMessage={errors.descricao?.message}
        />

        <CPSelect
          titulo="Categoria"
          variantSize="grande"
          setValue={setValue}
          register={register("categoria")}
          errorMessage={errors.categoria?.message}
          options={["Babá", "Eletricista", "Pedreiro", "Encanador"]}
        />

        <GrupoBotao>
          <CPButtonG
            onClick={() => setVisibilidadeModal(true)}
            title="Criar anúncio"
            variantType="primario"
          />
        </GrupoBotao>
      </Formulario>
      {visibilidadeModal && (
        <ModalBackground>
          <CPModalConfirm
            icone="check_circle"
            menssagem="Redirecionando para a página de anúncios..."
            titulo="Sucesso ao criar anúncio"
            variant="sucesso"
            onClick={() => {
              setVisibilidadeModal(false);
              navigate("/anuncios");
            }}
          ></CPModalConfirm>
        </ModalBackground>
      )}
    </>
  );
}
