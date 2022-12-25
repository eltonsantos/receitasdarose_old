import { NavLink } from "react-router-dom";
import * as S from "./styles";

export function Menu() {
  return (
    <S.Container>
      <S.Content>
        <S.Menu>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Sobre mim</NavLink>
            </li>
            <li>
              <NavLink to="/category">Categoria</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
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
