import { useEffect, useState } from "react";
import CourseProfileOverview from "./CourseProfileOverview";
import { CourseProfileSubscribers } from "./CourseProfileSubscribers";
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
  };
  return (
    <>
      <ul className="menu gap-4 lg:menu-horizontal md:menu-horizontal font-garet text-black rounded-box border border-gray-300 shadow-md mx-4">
        <li
          className={
            activeTab === "Overview"
              ? "bg-neutral text-gray-100 rounded-lg"
              : ""
          }
        >
          <a onClick={() => handleTabClick("Overview")}>Overview</a>
        </li>
        <li
          className={
            activeTab === "Modules" ? "bg-neutral text-gray-100 rounded-lg" : ""
          }
        >
          <a onClick={() => handleTabClick("Modules")}>Modules</a>
        </li>
        <li
          className={
            activeTab === "Quizzes" ? "bg-neutral text-gray-100 rounded-lg" : ""
          }
        >
          <a onClick={() => handleTabClick("Quizzes")}>Quizzes</a>
        </li>
        <li
          className={
            activeTab === "People" ? "bg-neutral text-gray-100 rounded-lg" : ""
          }
        >
          <a onClick={() => handleTabClick("People")}>People</a>
        </li>
      </ul>
      <div className="p-4 bg-white rounded-box">
        {activeTab === "Overview" && <CourseProfileOverview />}
        {activeTab === "Modules" && <div>This is content for Modules</div>}
        {activeTab === "Quizzes" && <div>This is content for Quizzes</div>}
        {activeTab === "People" && <CourseProfileSubscribers id={courseId} />}
      </div>
    </>
  );
};

export default CourseProfileBody;
