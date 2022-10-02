export type TabsProps = {
  tabs: Array<{
    id: string;
    title: string;
    // component: () => JSX.Element;
    component: any;
  }>;
};
