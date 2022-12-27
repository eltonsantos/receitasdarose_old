import { List } from "phosphor-react";
import * as S from "./styles";

export function BurguerMenu({ open, setOpen }: any) {
  return (
    <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
      <List size={20} />
    </S.StyledBurger>
  );
}
