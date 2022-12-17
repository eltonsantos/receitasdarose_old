import * as S from "./styles";

export function Footer() {
  return (
    <S.Container>
      <b>&copy; Receitas da Rose</b> |
      <span>
        desenvolvido por
        <a href="https://github.com/eltonsantos" target="_blank">
          eltonsantos
        </a>
      </span>
    </S.Container>
  );
}
