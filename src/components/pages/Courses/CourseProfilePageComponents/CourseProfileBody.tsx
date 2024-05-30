import { useState } from "react";
import CourseProfileOverview from "./CourseProfileOverview";
import CourseSubscribers, { Subscribers } from "./CourseProfileSubscribers";
import { useParams } from "react-router-dom";

const CourseProfileBody = () => {
  const { courseId } = useParams();
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
          <a onClick={() => handleTabClick("Modules")}>Modules</a>
        </li>
        <li>
          <a onClick={() => handleTabClick("Quizzes")}>Quizzes</a>
        </li>
        <li>
          <a onClick={() => handleTabClick("People")}>People</a>
        </li>
      </ul>
      <div className="">
        {activeTab === "Overview" && <CourseProfileOverview />}
        {activeTab === "Modules" && <div>This is content for Modules</div>}
        {activeTab === "Quizzes" && <div>This is content for Quizzes</div>}
        {activeTab === "People" && <Subscribers id={courseId} />}
      </div>
    </>
  );
};

export default CourseProfileBody;
