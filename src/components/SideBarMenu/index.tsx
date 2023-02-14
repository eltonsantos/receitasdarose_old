import { Flower, Key, Note, User } from "phosphor-react";
import * as S from "./styles";

export function SideBarMenu({ open }: any) {
  return (
    <S.Menu open={open}>
      <a href="/about">
        <span role="img" aria-label="sobre mim">
          <Flower size={30} />
        </span>
        Sobre mim
      </a>
      <a href="/category">
        <span role="img" aria-label="categoria">
          <Note size={30} />
        </span>
        Categoria
      </a>
      <a href="/contact">
        <span role="img" aria-label="contato">
          <User size={30} />
        </span>
        Contato
      </a>
      <a href="/login">
        <span role="img" aria-label="login">
          <Key size={30} />
        </span>
        Login
      </a>
    </S.Menu>
  );
}
