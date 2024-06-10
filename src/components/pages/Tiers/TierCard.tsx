import Tier from "../../interfaces/Tier";

interface TierCardProps {
  tier: Tier;
}

const TierCard: React.FC<TierCardProps> = ({ tier }) => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl m-4 border border-gray-200">
        <div className="card-body">
          <h2 className="card-title">{tier.tier_title}</h2>
          <p>{tier.tier_description}</p>
          <p>{tier.tier_price}</p>
          <div className="mt-4 card-actions">
            <button className="btn btn-primary w-full font-garet text-lg">
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TierCard;
