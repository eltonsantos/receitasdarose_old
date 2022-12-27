import { Flower, Key, Note } from "phosphor-react";
import * as S from "./styles";

export function SideBarMenu({ open }: any) {
  return (
    <S.Menu open={open}>
      <a href="/">
        <span role="img" aria-label="sobre mim">
          <Flower size={30} />
        </span>
        Sobre mim
      </a>
      <a href="/">
        <span role="img" aria-label="categoria">
          <Note size={30} />
        </span>
        Categoria
      </a>
      <a href="/">
        <span role="img" aria-label="login">
          <Key size={30} />
        </span>
        Login
      </a>
    </S.Menu>
  );
}
