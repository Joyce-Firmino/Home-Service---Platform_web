import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../api/axios";
import { AnuncioCompletoDTO } from "../../../dto/AnuncioCompletoDTO";
import { Formulario, GrupoBotao, ModalBackground } from "./styled";
import { CPButtonG } from "../../Buttons/CPButtonG";
import { CPInput04 } from "../../Inputs/CPInput04";
import { CPSelect } from "../../Inputs/CPSelect";
import { CPModalConfirm } from "../../Modals/CPModalConfirmacao";
import { useNavigate } from "react-router";
import { CategoriaDTO } from "../../../dto/CategoriaDTO";
import { AuthContext } from "../../../context/authContext";

const schema = z.object({
  titulo: z.string().trim().min(3, "O título deve ter no mínimo 3 caracteres"),
  descricao: z.string().trim().min(1, "Descrição é obrigatória"),
  preco: z.string().trim().min(1, "O preço não pode estar vazio"),
  categoriaId: z.string().trim().min(1, "Categoria é obrigatória"),
});

export function CPForm() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const id = query.get("id");
  const navigate = useNavigate();
  const [visibilidadeModal, setVisibilidadeModal] = useState(false);
  const [anuncio, setAnuncio] = useState<AnuncioCompletoDTO>();
  const [categorias, setCategorias] = useState<CategoriaDTO[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { authData } = useContext(AuthContext);

  const token = authData?.token;
  const email = authData?.email;

  useEffect(() => {
    async function carregarCategorias() {
      if (!token || !email) {
        console.error("Token ou email não encontrado");
        return;
      }

      try {
        const response = await api.get<CategoriaDTO[]>("/listCategorias", {
          headers: {
            Authorization: `Bearer ${token}`,
            email,
          },
        });
        setCategorias(response.data);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    }

    carregarCategorias();
  }, [token, email]);

  useEffect(() => {
    if (id) {
      api
        .get<AnuncioCompletoDTO[]>("/anuncios", {
          headers: {
            Authorization: `Bearer ${token}`,
            email,
          },
        })
        .then((response) => {
          const anuncioEncontrado = response.data.find(
            (anuncio) => anuncio.id === id
          );
          if (anuncioEncontrado) {
            setAnuncio(anuncioEncontrado);
            setValue("titulo", anuncioEncontrado.titulo);
            setValue("preco", anuncioEncontrado.preco);
            setValue("descricao", anuncioEncontrado.descricao);
            setValue("categoriaId", anuncioEncontrado.categoria.id);
          } else {
            console.error("Anúncio não encontrado");
          }
        })
        .catch((error) => console.error("Erro ao carregar anúncios:", error));
    }
  }, [id, token, email, setValue]);

  async function onSubmit(data: any) {
    try {
      if (id) {
        await api.put(`/anuncios/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            email,
          },
        });
        console.log("Anúncio atualizado com sucesso!");
      } else {
        console.log(data, token, email);
        await api.post("/anuncio", data, {
          headers: {
            Authorization: `Bearer ${token}`,
            email,
          },
        });
        console.log("Anúncio criado com sucesso!");
      }
      setVisibilidadeModal(true);
    } catch (error) {
      console.error("Erro ao salvar anúncio:", error);
    }
  }

  return (
    <>
      <Formulario onSubmit={handleSubmit(onSubmit)}>
        <CPInput04
          titulo="Título"
          placeholder={anuncio?.titulo || "Título"}
          variantSize="grande"
          register={register("titulo")}
          errorMessage={errors.titulo?.message}
        />

        <CPInput04
          titulo="Preço"
          placeholder={anuncio?.preco || "Preço"}
          variantSize="grande"
          register={register("preco")}
          errorMessage={errors.preco?.message}
        />

        <CPInput04
          titulo="Descrição"
          placeholder={anuncio?.descricao || "Descrição"}
          variantSize="grande"
          register={register("descricao")}
          errorMessage={errors.descricao?.message}
        />

        <CPSelect
          titulo="Categoria"
          variantSize="grande"
          setValue={setValue}
          register={register("categoriaId")}
          errorMessage={errors.categoriaId?.message}
          options={categorias}
        />
        <GrupoBotao>
          <CPButtonG
            title={id ? "Salvar alterações" : "Criar anúncio"}
            onClick={() => console.log("clicado!")}
            type="submit"
            variantType="primario"
          />
        </GrupoBotao>
      </Formulario>

      {visibilidadeModal && (
        <ModalBackground>
          <CPModalConfirm
            icone="check_circle"
            menssagem={id ? "Anúncio atualizado!" : "Anúncio criado!"}
            titulo="Sucesso"
            variant="sucesso"
            onClose={() => {
              setVisibilidadeModal(false);
              navigate("/");
            }}
          />
        </ModalBackground>
      )}
    </>
  );
}
