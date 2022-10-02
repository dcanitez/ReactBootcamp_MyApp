import React, { FC } from "react";
import { useTodoAppContext } from "../../../../contexts/TodoAppContext/TodoAppContext";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";

const List: FC<ListProps> = (props) => {
  const { state } = useTodoAppContext();
  return (
    <Styled>
      {state.status
        .filter((x) => x.categoryId === parseInt(state.categoryId))
        .map((stat) => (
          <ListItem
            style={{ backgroundColor: `${stat.color}` }}
            id={stat.id.toString()}
            key={stat.id}
            title={stat.title}
          />
        ))}
    </Styled>
  );
};

export default List;
