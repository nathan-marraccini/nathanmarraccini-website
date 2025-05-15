import React, { useState } from "react";
import "./Tabs.css";

interface TabsProps {
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("resume");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="tabs-container">
      <button
        className={`tab-button ${activeTab === "resume" ? "active" : ""}`}
        onClick={() => handleTabClick("resume")}
      >
        Resume
      </button>
      <button
        className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
        onClick={() => handleTabClick("projects")}
      >
        Projects
      </button>
    </div>
  );
};

export default Tabs;
