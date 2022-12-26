import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
  height: 60px;
  border-bottom: 1px solid var(--border);
  border-top: 1px solid var(--border);

  @media (max-width: 390px) {
    position: absolute;
    top: 10px;
    background: transparent;
    border-top: none;
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 70rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .menu-mobile {
    color: var(--gray-800);
    font-weight: 400;
    /* @media (min-width: 400px) {
      display: none;
    } */

    &:hover,
    &:active,
    &:focus {
      color: var(--green-300);
    }
  }
`;

export const Menu = styled.nav`
  @media (max-width: 390px) {
    display: none;
  }

  ul {
    list-style: none;
    margin-bottom: 0;

    li {
      float: left;

      a {
        display: block;
        position: relative;
        padding: 0px 21px;
        font-size: 14px;
        line-height: 17px;
        font-weight: 400;
        text-decoration: none;
        color: var(--gray-800);

        &:hover,
        &:active,
        &:focus {
          color: var(--green-300);
        }
      }
    }
  }
`;

export const More = styled.div`
  a {
    color: var(--gray-800);
    font-weight: 400;
    margin-left: 1.5rem;

    &:hover,
    &:active,
    &:focus {
      color: var(--green-300);
    }
  }
`;
