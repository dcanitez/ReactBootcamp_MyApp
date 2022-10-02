import React, { FC } from "react";
import { useTodoAppContext } from "../../../contexts/TodoAppContext/TodoAppContext";
import { Input } from "../../elements";
import { Styled } from "./AddTodoForm.styled";
import { AddTodoFormProps } from "./AddTodoForm.types";

const AddTodoForm: FC<AddTodoFormProps> = (props) => {
  const { state } = useTodoAppContext();
  return (
    <Styled>
      <Input placeholder="Please enter todo" type="text" />
      <select className="category-select">
        <option value="">Please select category</option>
        {state.categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>
      <button className="add-button">
        Add
        <span className="material-symbols-outlined">assignment_add</span>
      </button>
    </Styled>
  );
};

export default AddTodoForm;
