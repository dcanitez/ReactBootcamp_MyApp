import styled from "styled-components";
export const Styled = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  .list-item {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    &:hover {
      background-color: #d8e2dc;
    }
    span {
      cursor: pointer;
    }
  }
`;
