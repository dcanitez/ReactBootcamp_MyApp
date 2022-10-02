import styled from "styled-components";

export const Styled = styled.div`
  margin: auto;
  width: 50vw;

  .tab-title-container {
    /* border-bottom: 1px solid #2b2d42; */
  }
  .tab-title {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0 1rem;
    height: 2rem;
    &.active {
      background-color: #be221f;
      color: #fff;
      font-weight: bold;
    }
  }
  .tab-content-container {
    background-color: white;
    min-height: 40vh;
    border: 1px solid #be221f;
    /* border: 1px solid #2b2d42;
    border-top: none; */
  }
`;
