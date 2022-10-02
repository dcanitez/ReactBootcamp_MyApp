import React, { FC, useState } from "react";
import { Styled } from "./Tabs.styled";
import { TabsProps } from "./Tabs.types";

const Tabs: FC<TabsProps> = (props) => {
  const [activeTab, setActiveTab] = useState<string>(props.tabs[0].id);

  const handleChangeActiveTab = (id: string) => {
    setActiveTab(id);
  };

  return (
    <Styled>
      <div className="tab-title-container">
        {props.tabs.map((tab) => (
          <button
            className={`tab-title ${tab.id === activeTab ? "active" : ""}`}
            onClick={() => handleChangeActiveTab(tab.id)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content-container">
        {props.tabs.find((x) => x.id === activeTab)?.component}
      </div>
    </Styled>
  );
};

export default Tabs;
