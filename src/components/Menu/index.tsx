import { List, MagnifyingGlass, Moon } from "phosphor-react";
import { NavLink } from "react-router-dom";
import * as S from "./styles";

export function Menu() {
  return (
    <S.Container>
      <S.Content>
        <a href="#" className="menu-mobile">
          <List size={20} />
        </a>
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
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
        </S.Menu>
        <S.More>
          <a href="#">
            <MagnifyingGlass size={20} />
          </a>
          <a href="#">
            <Moon size={20} />
          </a>
        </S.More>
      </S.Content>
    </S.Container>
  );
}
