import { Post } from "../../components/Post";
import { Sidebar } from "../../components/Sidebar";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <div className="wrapperHome">
        <main>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
        <Sidebar />
      </div>
    </S.Container>
  );
}
