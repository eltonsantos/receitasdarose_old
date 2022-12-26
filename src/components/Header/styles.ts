import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  display: flex;
  justify-content: center;
  font-size: 3rem;
  padding: 0.65rem 0;

  a {
    color: var(--gray-600);
    text-decoration: none;
    font-weight: bold;
    font-family: "Pacifico";
    font-size: 25px;
    z-index: 9999;

    &:hover,
    &:active,
    &:focus {
      color: var(--primary);
    }
  }
`;
