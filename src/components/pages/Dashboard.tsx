import useAuthContext from "../hooks/useAuthContext";
import StatisticsSection from "./DashboardPageComponents/StatisticsSection";
import GreetingsSection from "./DashboardPageComponents/GreetingsSection";
import RecentStudentsSection from "./DashboardPageComponents/RecentStudentsSection";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const { user } = useAuthContext();
  const percentage = 20;
  return (
    <>
      <GreetingsSection greetingName={user.given_name} />
      <StatisticsSection />
      <RecentStudentsSection />
      <div className="divider"></div>
      <div className="flex justify-center">
        <div className="w-1/4 flex flex-row">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: "#8B2635",
              textColor: "#8B2635",
            })}
            className="h-20"
            value={percentage}
            text={`${percentage}`}
          />
          <CircularProgressbar
            styles={buildStyles({
              pathColor: "#8B2635",
              textColor: "#8B2635",
            })}
            className=" h-20"
            value={percentage}
            text={`${percentage}`}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
