import { Outlet } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Menu } from "../../../components/Menu";

import * as S from "./styles";

export function DefaultLayout() {
  return (
    <S.Container>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </S.Container>
  );
}
