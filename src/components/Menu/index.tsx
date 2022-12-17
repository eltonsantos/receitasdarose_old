import * as S from "./styles";

export function Menu() {
  return (
    <S.Container>
      <S.Content>
        <S.Menu>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre mim</a>
            </li>
            <li>
              <a href="#">Categoria</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </S.Menu>
        {/* <S.More>
          <MagnifyingGlass size={20} weight="bold" />
          <Moon size={20} weight="bold" />
        </S.More> */}
      </S.Content>
    </S.Container>
  );
}
