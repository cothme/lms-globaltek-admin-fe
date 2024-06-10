import TierCard from "./TierCard";

const TierMainPage = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-rows-2 grid-cols-3 gap-2">
          <TierCard />
          <TierCard />
          <TierCard />
          <TierCard />
          <TierCard />
        </div>
      </div>
    </>
  );
};

export default TierMainPage;
