import React, { FC } from "react";
import { useTodoAppContext } from "../../../../contexts/TodoAppContext/TodoAppContext";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";

const List: FC<ListProps> = (props) => {
  const { state } = useTodoAppContext();
  return (
    <Styled>
      {state.categories.map((cat) => (
        <ListItem id={cat.id.toString()} key={cat.id} title={cat.title} />
      ))}
    </Styled>
  );
};

export default List;
