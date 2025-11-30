import { Suspense, useState } from "react";
import "./Tabs.css"; // You can create a CSS file for styling the tabs
import { GetTheResponse } from "./hooks/01_useTransition";
import { UseTransitionWithForm } from "./hooks/02_useTransitionForm";
import { UseActionStateDemo } from "./hooks/03_useActionState";
import { UseFormStatusDemo } from "./hooks/04_useFormStatus";
import { UseDemo } from "./newApi/useDemo";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={activeTab === 0 ? "tab active" : "tab"}
          onClick={() => handleTabClick(0)}
        >
          useTransition
        </div>
        <div
          className={activeTab === 1 ? "tab active" : "tab"}
          onClick={() => handleTabClick(1)}
        >
          useTransitionWithForm
        </div>
        <div
          className={activeTab === 2 ? "tab active" : "tab"}
          onClick={() => handleTabClick(2)}
        >
          useActionState
        </div>
        <div
          className={activeTab === 3 ? "tab active" : "tab"}
          onClick={() => handleTabClick(3)}
        >
          useFormStatus
        </div>
        <div
          className={activeTab === 4 ? "tab active" : "tab"}
          onClick={() => handleTabClick(4)}
        >
          use
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <GetTheResponse />}
        {activeTab === 1 && <UseTransitionWithForm />}
        {activeTab === 2 && <UseActionStateDemo />}
        {activeTab === 3 && <UseFormStatusDemo />}
        {activeTab === 4 && (
          <Suspense fallback={<div>Loading...</div>}>
            <UseDemo />{" "}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Tabs;
