export type StateType = {
  categories: Array<{
    id: number;
    title: string;
  }>;
  status: Array<{
    id: number;
    title: string;
    color: string;
    categoryId: number;
  }>;
  categoryId: string;
};

export type ContextType = {
  state: StateType;
  dispatches: any;
};
