import styled from "styled-components";

export const Container = styled.aside`
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;

  .sidebar-header {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      border: 5px solid var(--green-300);

      float: left;
      padding-top: 5px;
    }

    b {
      float: left;
      width: 100%;
      padding-top: 5px;
      margin-left: 8px;
      font-size: 20px;
    }
  }
`;
