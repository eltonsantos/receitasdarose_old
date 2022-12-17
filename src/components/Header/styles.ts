import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  display: flex;
  justify-content: center;
  font-size: 3rem;
  padding: 1.25rem 0;

  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--primary);

    &:hover {
      color: var(--primary);
    }
  }
`;
