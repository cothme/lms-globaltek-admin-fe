import TierCard from "./TierCard";
import useFetchTiers from "../../hooks/tier hooks/useFetchTiers";
import LoadingScreen from "../../helpers/LoadingScreen";

const TierMainPage = () => {
  const { tiers, loading } = useFetchTiers();
  if (loading)
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  return (
    <>
      <div className="">
        <div className="grid grid-rows-2 grid-cols-3 gap-2">
          {tiers.map((tier) => (
            <TierCard key={tier._id} tier={tier} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TierMainPage;
