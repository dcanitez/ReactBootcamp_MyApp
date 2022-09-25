import styled from "styled-components";

export const Styled = styled.nav`
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;

  ul {
    display: flex;
    justify-content: flex-end;
  }
  a {
    margin-right: 1rem;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .logout-btn {
    border: none;
    outline: none;
    background-color: inherit;
    cursor: pointer;
  }
`;
