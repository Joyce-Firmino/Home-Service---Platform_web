import { CPHeader1 } from '../../componentes/Others/CPHeader';
import { DivBaixar, DivContainer, DivGridContainer, DivLojas, DivTextos, H1Titulo, H2Titulo, ImgAppStore, ImgCelulares, ImgPlayStore } from './styled';
import playstore from "../../assets/playStore.svg"
import appstore from "../../assets/appstore.svg"
import celulares from "../../assets/celulares.svg"
import { PDescricao } from '../Home/styled';
import { CPFooter } from '../../componentes/Others/CPFooter';



import './style.css';
import { CPCardAnuncioCategory } from '../../componentes/Cards/CPCardAnuncioCategoryZ';

interface CustomCategoryProps {
  category: string;
}

const category = "Categoria"

export function Category({ }: CustomCategoryProps) {
  function clickado() {
    alert('Clicado!');
  }

  return (
    <DivContainer>

      <CPHeader1 iniciais='JV' name='Jose Vieira' variantType='primario'></CPHeader1>

      <DivTextos>
        <H1Titulo>{category}</H1Titulo>
        <PDescricao>Encontre abaixo todos os profissionais dessa categoria</PDescricao>
      </DivTextos>


      <DivGridContainer>
        <CPCardAnuncioCategory city='São José de Piranhas' prestador='José Neto' email='josevieira@gmail.com' servico='Programador' telefone='(99) 9999999' uriFoto=''  ></CPCardAnuncioCategory>
        <CPCardAnuncioCategory city='São José de Piranhas' prestador='José Neto' email='josevieira@gmail.com' servico='Programador' telefone='(99) 9999999' uriFoto=''  ></CPCardAnuncioCategory>
        <CPCardAnuncioCategory city='São José de Piranhas' prestador='José Neto' email='josevieira@gmail.com' servico='Programador' telefone='(99) 9999999' uriFoto=''  ></CPCardAnuncioCategory>
        <CPCardAnuncioCategory city='São José de Piranhas' prestador='José Neto' email='josevieira@gmail.com' servico='Programador' telefone='(99) 9999999' uriFoto=''  ></CPCardAnuncioCategory>
        <CPCardAnuncioCategory city='São José de Piranhas' prestador='José Neto' email='josevieira@gmail.com' servico='Programador' telefone='(99) 9999999' uriFoto=''  ></CPCardAnuncioCategory>
        <CPCardAnuncioCategory city='São José de Piranhas' prestador='José Neto' email='josevieira@gmail.com' servico='Programador' telefone='(99) 9999999' uriFoto=''  ></CPCardAnuncioCategory>
        <CPCardAnuncioCategory city='São José de Piranhas' prestador='José Neto' email='josevieira@gmail.com' servico='Programador' telefone='(99) 9999999' uriFoto=''  ></CPCardAnuncioCategory>
        <CPCardAnuncioCategory city='São José de Piranhas' prestador='José Neto' email='josevieira@gmail.com' servico='Programador' telefone='(99) 9999999' uriFoto=''  ></CPCardAnuncioCategory>
        <CPCardAnuncioCategory city='São José de Piranhas' prestador='José Neto' email='josevieira@gmail.com' servico='Programador' telefone='(99) 9999999' uriFoto=''  ></CPCardAnuncioCategory>
      </DivGridContainer>
      <CPFooter></CPFooter>
    </DivContainer>
  );


}