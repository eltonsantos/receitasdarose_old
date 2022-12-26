import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
  height: 60px;
  border-bottom: 1px solid var(--border);
  border-top: 1px solid var(--border);
`;

export const Content = styled.div`
  max-width: 70rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
`;

export const Menu = styled.nav`
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
        color: var(--black);

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
  float: right;
`;
