import styled from "styled-components";

interface MenuProps {
  open: boolean;
}

export const StyledBurger = styled.button<MenuProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  font-weight: 400;

  color: var(--gray-900);
  /* @media (min-width: 400px) {
      display: none;
    } */

  &:hover,
  &:active,
  &:focus {
    color: var(--green-300);
  }

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#323238")};
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
