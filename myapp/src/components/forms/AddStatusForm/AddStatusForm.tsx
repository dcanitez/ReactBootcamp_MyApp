import React, { FC, useState } from "react";
import { useTodoAppContext } from "../../../contexts/TodoAppContext/TodoAppContext";
import { status } from "../../../services/http/endpoints/status";
import { Input } from "../../elements";
import { Styled } from "./AddStatusForm.styled";
import { AddStatusFormProps, StateType } from "./AddStatusForm.types";

const initialState: StateType = {
  title: "",
  categoryId: "",
  color: "",
};

const AddStatusForm: FC<AddStatusFormProps> = (props) => {
  const { state, dispatches } = useTodoAppContext();
  const [statusState, setStatusState] = useState<StateType>({
    ...initialState,
    categoryId: state.categoryId,
  });

  const handleSelect = (e: any) => {
    dispatches.selectCategory(e.target.value);
  };

  const handleGetList = () => {
    status.list(Number(statusState.categoryId)).then(({ data }) => {
      console.log(data);
    });
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    setStatusState((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleAddStatus = (status: any) => {
    dispatches.addStatus(status);
  };

  const handleSave = () => {
    //save fnc will be implemented
    status
      .create({ ...statusState, categoryId: Number(state.categoryId) })
      .then(({ data }) => {
        handleAddStatus(data);
      });
  };

  return (
    <Styled>
      <div className="category-select-container">
        <select
          name="categoryId"
          value={state.categoryId}
          onChange={handleSelect}
          className="category-select">
          <option value="">Please select category</option>
          {state.categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </select>
        <button onClick={handleGetList} className="search-button">
          <span className="material-symbols-outlined">manage_search</span>
        </button>
      </div>
      <div className="add-status-container">
        <Input
          name="title"
          type="text"
          placeholder="Please enter status"
          onChange={handleChange}
          value={statusState.title}
        />
        <input
          name="color"
          className="color-select"
          type="color"
          title="Select Color"
          onChange={handleChange}
          value={statusState.color}
        />
        <button onClick={handleSave} className="search-button">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </Styled>
  );
};

export default AddStatusForm;
