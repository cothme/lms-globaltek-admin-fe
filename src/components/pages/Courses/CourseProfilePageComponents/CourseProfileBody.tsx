import { useState } from "react";
import CourseProfileOverview from "./CourseProfileOverview";

const CourseProfileBody = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <ul className="menu menu-vertical w-full sm:menu-horizontal bg-base-200 rounded-box text-lg">
        <li>
          <a onClick={() => handleTabClick("Overview")}>Overview</a>
        </li>
        <li>
          <a onClick={() => handleTabClick("Tab 2")}>Modules</a>
        </li>
        <li>
          <a onClick={() => handleTabClick("Tab 3")}>Quizzes</a>
        </li>
        <li>
          <a onClick={() => handleTabClick("Tab 4")}>People</a>
        </li>
      </ul>
      <div className="">
        {activeTab === "Overview" && <CourseProfileOverview />}
        {activeTab === "Tab 2" && <div>This is content for Modules</div>}
        {activeTab === "Tab 3" && <div>This is content for Quizzes</div>}
        {activeTab === "Tab 4" && <div>This is content for People</div>}
      </div>
    </>
  );
};

export default CourseProfileBody;
