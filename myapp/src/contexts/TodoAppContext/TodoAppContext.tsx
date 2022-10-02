import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { ContextType, StateType } from "./types";
import { category } from "../../services/http/endpoints/category";

export const initialState: StateType = {
  categories: [],
  status: [],
  //categoryId is added for selected category on status tab
  categoryId: "",
};

export const TodoAppContext = createContext<ContextType>({
  state: initialState,
  dispatches: {},
});

export const TodoAppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);
  const dispatches: ContextType["dispatches"] = {};

  console.log(state);

  useEffect(() => {
    //get the category list from API
    category.list().then(({ data }) => {
      console.log(data);
      setState((prev) => ({ ...prev, categories: data }));
    });
  }, []);

  dispatches.addCategory = (category: any) => {
    setState((prev) => ({
      ...prev,
      categories: [...prev.categories, category],
    }));
  };

  dispatches.updateCategory = (id: number, category: any) => {
    setState((prev) => ({
      ...prev,
      categories: prev.categories.map((cat) => ({
        ...cat,
        title: id === cat.id ? category.title : cat.title,
      })),
    }));
  };

  dispatches.selectCategory = (categoryId: number) => {
    setState((prev) => ({ ...prev, categoryId: categoryId.toString() }));
  };

  dispatches.addStatus = (status: any) => {
    setState((prev) => ({ ...prev, status: [...prev.status, status] }));
  };

  dispatches.updateStatus = (id: number, status: any) => {
    setState((prev) => ({
      ...prev,
      status: prev.status.map((stat) => ({
        ...stat,
        title: id === stat.id ? status.title : stat.title,
      })),
    }));
  };

  return (
    <TodoAppContext.Provider value={{ state, dispatches }}>
      {children}
    </TodoAppContext.Provider>
  );
};

export const useTodoAppContext = () => {
  return useContext(TodoAppContext);
};
