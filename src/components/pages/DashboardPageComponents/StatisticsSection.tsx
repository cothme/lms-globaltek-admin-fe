import LoadingScreen from "../../helpers/LoadingScreen";
import useFetchCounts from "../../hooks/useFetchCounts";

const StatisticsSection = () => {
  const { userCount, adminCount, courseCount, loading, error } =
    useFetchCounts();
  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <a
          data-testid="student-count"
          href={"/students"}
          className="bg-gradient-to-r from-theme-blue to-theme-maroon
          w-full
          text-white
          p-6 m-4 h-1/4
          md:rounded-s-full"
        >
          <div className="font-garet text-center text-3xl">Students</div>
          <div className="font-garetheavy text-center text-4xl mt-4">
            {userCount}
          </div>
        </a>
        <a
          data-testid="course-count"
          href={"/courses"}
          className="bg-gradient-to-r from-theme-maroon from-25% via-theme-maroon via-100% 
          w-full
          text-white
          p-6 m-4 h-1/4"
        >
          <div className="font-garet text-center text-3xl">Courses</div>
          <div className="font-garetheavy text-center text-4xl mt-4">
            {courseCount}
          </div>
        </a>
        <div
          className="bg-gradient-to-l from-theme-blue to-theme-maroon 
          w-full
          text-white
          p-6 m-4 h-1/4
          md:rounded-e-full"
        >
          <div className="font-garet text-center text-3xl">Admin</div>
          <div className="font-garetheavy text-center text-4xl mt-4">
            {adminCount}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsSection;
