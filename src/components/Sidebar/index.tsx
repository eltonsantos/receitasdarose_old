import rose from "../../assets/rose.jpg";

import * as S from "./styles";

export function Sidebar() {
  return (
    <S.Container>
      <a
        href="https://instagram.com/its.rosiane"
        target="_blank"
        className="sidebar-header"
      >
        <img src={rose} alt="" />
        <b>Rosiane Rosa</b>
      </a>

      <div></div>
    </S.Container>
  );
}
