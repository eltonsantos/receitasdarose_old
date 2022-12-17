import * as S from "./styles";

export function Post() {
  return (
    <S.Container>
      <a href="#">
        <img src="https://source.unsplash.com/random" alt="" />
      </a>
      <div className="post-info">
        <div className="post-category">Doce</div>
        <div className="post-title">
          <a href="#">Doces de Natal</a>
        </div>
        <div className="post-date">20/12/2022</div>
        <div className="post-description">
          A festa de natal é uma data muito especial, onde se reúne família e
          amigos para celebrar a noite natalina e compartilhar momentos de
          alegria e confraternização. Um grande exemplo de momentos especiais
          presentes nessa ...
        </div>
        <div className="empty-space"></div>
      </div>
    </S.Container>
  );
}
