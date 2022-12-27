import { MagnifyingGlass, Moon } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BurguerMenu } from "../BurguerMenu";
import { SideBarMenu } from "../SideBarMenu";
import * as S from "./styles";

export function Menu() {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const useOnClickOutside = ({ ref, handler }: any) => {
    useEffect(() => {
      const listener = (event: { target: any }): any => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  };

  return (
    <S.Container>
      <S.Content>
        <div ref={node}>
          <BurguerMenu open={open} setOpen={setOpen} />
          <SideBarMenu open={open} setOpen={setOpen} />
        </div>
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
