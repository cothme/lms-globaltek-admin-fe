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
      <div className="card w-64 h-full bg-base-100 shadow-xl m-4">
        <div className="card-body">
          <div className="p-4 bg-theme-gold text-lg font-garet">
            {" "}
            {course_title}
          </div>
          <div className="text-lg font-garet"> {course_desc} </div>
        </div>
        <div className="flex flex-row">
          <div className="ml-4 mt-1">Difficulty:</div>
          <progress
            className="m-4 progress progress-primary w-56"
            value={progress}
            max="100"
          ></progress>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
