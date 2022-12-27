import styled from "styled-components";

export const Container = styled.footer`
  background: var(--primary);
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
  color: var(--white);

  @media (max-width: 390px) {
    font-size: 14px;
  }

  b {
    margin-right: 5px;
  }

  span {
    margin-left: 15px;

    a {
      text-decoration: none;
      color: var(--white);
      margin-left: 5px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
