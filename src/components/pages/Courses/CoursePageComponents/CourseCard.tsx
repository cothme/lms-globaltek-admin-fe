interface cardComponents {
  course_title: string;
  course_desc: string;
  progress: string;
}
const CourseCard: React.FC<cardComponents> = ({
  course_title,
  course_desc,
  progress,
}) => {
  return (
    <>
      <div className="card w-1/2 h-full bg-base-100 shadow-2xl m-4 flex flex-col ">
        <div className="flex flex-row">
          <div className="bg-orange-500 text-white p-4 flex flex-col justify-between w-1/3 rounded-l-xl">
            <span className="text-xs uppercase">Course</span>
            <span className="text-lg font-bold">{course_title}</span>
            <span className="text-xs underline">View all chapters</span>
          </div>
          <div className="p-4 flex flex-col justify-between w-2/3">
            <span className="text-sm uppercase">Chapter 4</span>
            <span className="text-xl font-bold">Async Operations</span>
            <div className="flex items-center mt-2">
              <div className="h-2 bg-orange-500" style={{ width: "66%" }}></div>
              <div className="h-2 bg-gray-300 flex-1"></div>
              <span className="text-xs ml-2">6/9 Challenges</span>
            </div>
            <button className="bg-orange-500 text-white px-4 py-1 mt-2 rounded">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
