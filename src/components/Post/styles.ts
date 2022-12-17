import styled from "styled-components";

export const Container = styled.article`
  background: var(--white);
  border-radius: 8px;
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;

  a {
    float: left;

    img {
      width: 290px;
      height: 180px;
    }
  }

  .post-info {
    display: block;
    padding: 10px 0 0 308px;
    vertical-align: middle;

    .post-category {
      font-family: "Roboto";
      font-size: 10px;
      line-height: 14px;
      font-weight: 700;
      color: #666;
      text-transform: uppercase;
      margin-bottom: 9px;
    }

    .post-title {
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      margin-bottom: 5px;

      a {
        font-size: 1.5rem;
        line-height: 22px;
        font-weight: 700;
        color: inherit;
        text-decoration: none;

        &:hover {
          color: var(--green-300);
        }
      }
    }

    .post-date {
      font-family: "Roboto";
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      color: #b5b5b5;
      margin-bottom: 11px;
    }

    .post-description {
      font-size: 13px;
      line-height: 21px;
      font-weight: 400;
      color: #666;
    }

    .empty-space {
      height: 30px;
    }
  }
`;
