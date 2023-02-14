import styled from "styled-components";

export const Container = styled.div`
  .page-title {
    background-color: var(--secondary);

    .content {
      width: 1140px;
      margin: 0 auto;
      text-align: left;

      h1 {
        padding: 2rem;
        font-size: 2.25rem;
        color: var(--white);
      }

      @media (max-width: 600px) {
        padding: 10px 10px;
        max-width: 570px;
        width: 100%;
        margin: 0 auto;
      }
    }
  }

  .text-center {
    font-family: "Roboto";
    font-size: 48px;
    line-height: 58px;
    font-weight: 700;
    color: #111;
    text-align: center;
    padding: 2rem;
  }

  .wrapper {
    color: #666;
    font-size: 18px;
    line-height: 30px;
    space-align: justify;
  }
`;
