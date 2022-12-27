import styled from "styled-components";

interface MenuProps {
  open: boolean;
}

export const Menu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--secondary);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: -5px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 2;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 300;
    letter-spacing: 0.5rem;
    color: var(--gray-600);
    text-decoration: none;
    transition: color 0.3s linear;
    font-family: "Roboto", sans-serif;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: var(--white);
    }
  }
`;
