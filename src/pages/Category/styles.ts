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
`;
