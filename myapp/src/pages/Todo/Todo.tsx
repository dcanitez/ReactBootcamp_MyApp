import React from "react";
import AddCategoryForm from "../../components/forms/AddCategoryForm";
import AddStatusForm from "../../components/forms/AddStatusForm";
import AddTodoForm from "../../components/forms/AddTodoForm";
import { List as CategoryList } from "../../components/lists/Category";
import { List as StatusList } from "../../components/lists/Status";
import Tabs from "../../components/Tabs";

const tabs = [
  {
    id: "todoList",
    title: "Todo List",
    component: (
      <>
        <AddTodoForm />
      </>
    ),
  },
  {
    id: "categories",
    title: "Categories",
    component: (
      <>
        <AddCategoryForm />
        <CategoryList />
      </>
    ),
  },
  {
    id: "status",
    title: "Status",
    component: (
      <>
        <AddStatusForm />
        <StatusList />
      </>
    ),
  },
];

const Todo = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <Tabs {...{ tabs }} />
    </div>
  );
};

export default Todo;
