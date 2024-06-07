import { useEffect, useState } from "react";
import CourseProfileOverview from "./CourseProfileOverview";
import { Subscribers } from "./CourseProfileSubscribers";
import { useParams } from "react-router-dom";

const CourseProfileBody = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
  };
  return (
    <>
      <ul className="menu font-garet text-lg text-white w-auto ml-2 sm:menu-horizontal bg-theme-blue rounded-box">
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
