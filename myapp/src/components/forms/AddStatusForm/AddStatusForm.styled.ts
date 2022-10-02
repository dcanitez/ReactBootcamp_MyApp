import styled from "styled-components";
export const Styled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .category-select-container {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    .category-select {
      margin-left: 0.5rem;
      border: 1px solid #b62018;
      border-radius: 0.5rem;
      background-color: inherit;
      height: 40px;
      flex-grow: 1;
    }
  }
  .add-status-container {
    display: flex;
    .color-select {
      background-color: inherit;
      height: 40px;
      margin-left: 0.5rem;
    }
  }
  .search-button {
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: center;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: #b62018;
    color: #fff;
    margin-left: 0.5rem;
    font-weight: bold;
    span {
      margin-left: 0.5rem;
    }
  }
`;
