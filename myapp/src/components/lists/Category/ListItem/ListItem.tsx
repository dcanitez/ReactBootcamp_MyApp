import React, { FC, useState } from "react";
import { useTodoAppContext } from "../../../../contexts/TodoAppContext/TodoAppContext";
import { category } from "../../../../services/http/endpoints/category";
import { Input } from "../../../elements";
import { InputProps } from "../../../elements/Input/Input.types";
import { ListItemProps } from "./ListItem.types";

const ListItem: FC<ListItemProps> = (props) => {
  const { dispatches } = useTodoAppContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.title);

  const handleEditClick = () => {
    setIsEdit((prev) => !prev);
  };

  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleSave = () => {
    category
      .update(Number(props.id), { title: value })
      .then(() => {
        dispatches.updateCategory(Number(props.id), { title: value });
      })
      .finally(() => setIsEdit(false));
  };

  return (
    <div className="list-item">
      {!isEdit ? (
        <>
          <span>{props.title}</span>
          <span
            id={props.id}
            onClick={handleEditClick}
            className="material-symbols-outlined">
            edit
          </span>
        </>
      ) : (
        <>
          <Input
            type="text"
            value={props.title}
            placeholder=""
            onChange={handleChange}
          />
          <span
            id={props.id}
            onClick={handleSave}
            className="material-symbols-outlined">
            save
          </span>
        </>
      )}
    </div>
  );
};

export default ListItem;
