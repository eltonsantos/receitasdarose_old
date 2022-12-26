import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  display: flex;
  justify-content: center;
  font-size: 3rem;
  padding: 1.25rem 0;

  a {
    color: var(--gray-500);
    text-decoration: none;
    font-weight: bold;
    font-family: "Pacifico";
    font-size: 25px;

    &:hover,
    &:active,
    &:focus {
      color: var(--primary);
    }
  }
`;
