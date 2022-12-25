import { Post } from "../../components/Post";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <div className="wrapper">
        <main>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </S.Container>
  );
}
