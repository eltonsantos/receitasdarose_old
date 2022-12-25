import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

import * as S from "./styles";

export function DefaultLayout() {
  return (
    <S.Container>
      <header>
        <Header />
        <Menu />
      </header>
      <Outlet />
      <Footer />
    </S.Container>
  );
}
