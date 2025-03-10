import { NavigateFunction } from "react-router-dom";

export function navegarParaPaginaHome(navigate: NavigateFunction) {
    navigate(`/`);
}

export function navegarParaPaginaPerfil(navigate: NavigateFunction) {
    navigate(`/perfil`);
}

export function navegarParaPaginaCadastro(navigate: NavigateFunction) {
    navigate(`/cadastro`);
}

export function navegarParaPaginaLogin(navigate: NavigateFunction) {
    navigate(`/login`);
}

export function navegarParaPaginaCategory(navigate: NavigateFunction, id: string, categoria: string): void {
    navigate(`/anunciosCategoria/${categoria}/${id}`);
}

export function navegarParaPaginaEncontrarPrestador(navigate: NavigateFunction) {
    navigate(`/prestadores/`);
}
