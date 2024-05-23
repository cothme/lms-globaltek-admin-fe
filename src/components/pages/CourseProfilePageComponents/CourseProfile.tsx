interface Course {
  _id: string;
  course_title: string;
  course_description: string;
  course_code: string;
  publisher: string;
  difficulty: string;
  required_subscription: string;
  published: boolean;
}

interface CourseProp {
  course: Course | null;
}

const CourseProfile: React.FC<CourseProp> = ({ course }: CourseProp) => {
  return (
    <>
      <div className="text-4xl breadcrumbs font-garetheavy text-theme-blue m-4">
        <ul>
          <li>
            <a href="/courses">Course</a>
          </li>
          <li>
            <a href={`/course/${course?._id}`}>Course Profile</a>
          </li>
        </ul>
      </div>
      <div className="relative rounded-lg m-8 min-w-screen bg-theme-blue shadow-2xl">
        <div className="flex items-center z-10">
          <div className=" text-white lg:text-4xl font-garet m-10">
            {course?.course_title}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseProfile;
