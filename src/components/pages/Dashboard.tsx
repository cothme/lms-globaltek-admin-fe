import useAuthContext from "../hooks/useAuthContext";
import StatisticsSection from "./DashboardPageComponents/StatisticsSection";
import GreetingsSection from "./DashboardPageComponents/GreetingsSection";
import RecentStudentsSection from "./DashboardPageComponents/RecentStudentsSection";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const { user } = useAuthContext();

  return (
    <>
      <div className="">
        <GreetingsSection
          greetingName={user.given_name + " " + user.family_name}
        />
        <StatisticsSection />
        <RecentStudentsSection />
        <div className="divider"></div>
        <div className="flex justify-center"></div>
      </div>
    </>
  );
};

export default Dashboard;
