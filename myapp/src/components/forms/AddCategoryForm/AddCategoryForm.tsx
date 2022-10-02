import React, { FC, useState } from "react";
import { useTodoAppContext } from "../../../contexts/TodoAppContext/TodoAppContext";
import { category } from "../../../services/http/endpoints/category";
import { Input } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";
import { Styled } from "./AddCategoryForm.styled";
import { AddCategoryFormProps } from "./AddCategoryForm.types";

const AddCategoryForm: FC<AddCategoryFormProps> = (props) => {
  const { dispatches } = useTodoAppContext();
  const [value, setValue] = useState<string>("");

  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleAddCategory = (category: any) => {
    dispatches.addCategory(category);
  };

  const handleAddClick = () => {
    category.create({ title: value }).then(({ data }) => {
      handleAddCategory(data);
    });
  };

  return (
    <Styled>
      <Input
        placeholder="Please enter category name"
        type="text"
        onChange={handleChange}
      />
      <button className="add-button" onClick={handleAddClick}>
        Add
        <span className="material-symbols-outlined">library_add</span>
      </button>
    </Styled>
  );
};

export default AddCategoryForm;
