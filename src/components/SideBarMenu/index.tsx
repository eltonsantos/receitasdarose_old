import * as S from "./styles";

export function SideBarMenu({ open }: any) {
  return (
    <S.Menu open={open}>
      <a href="/">
        <span role="img" aria-label="sobre mim">
          🙋
        </span>
        Sobre mim
      </a>
      <a href="/">
        <span role="img" aria-label="categoria">
          ✍️
        </span>
        Categoria
      </a>
      <a href="/">
        <span role="img" aria-label="login">
          🔑
        </span>
        Login
      </a>
    </S.Menu>
  );
}
