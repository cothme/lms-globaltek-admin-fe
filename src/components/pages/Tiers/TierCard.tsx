import React, { useState } from "react";
import Tier from "../../interfaces/Tier";
import useUpdateTiers from "../../hooks/tier hooks/useUpdateTiers";
import swalSuccess from "../../helpers/swalSuccess";

interface TierCardProps {
  tier: Tier;
}

const TierCard: React.FC<TierCardProps> = ({ tier }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { updateTier, formData } = useUpdateTiers(tier._id);
  const [newPrice, setNewPrice] = useState<number | string>(
    Number(tier.tier_price)
  );

  const handleButtonClick = () => {
    if (tier.tier_title === "Free") {
      swalSuccess("You cannot change the price of free tier", "error");
      return;
    }

    setIsFormVisible(!isFormVisible);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewPrice(value === "" ? "" : parseFloat(value));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateTier({ ...formData, tier_price: Number(newPrice) });
    console.log(`New price: ${newPrice}`);
    setIsFormVisible(false);
  };

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl m-4 border border-gray-200">
        <div className="card-body">
          <h2 className="card-title">{tier.tier_title}</h2>
          <p>{tier.tier_description}</p>
          <label htmlFor="tier_price">Price:</label>
          <p className="text-md text-center">{newPrice}</p>
          <div className="mt-4 card-actions">
            <button
              className="btn btn-primary w-full font-garet text-lg"
              onClick={handleButtonClick}
            >
              {isFormVisible ? "Cancel" : "Update Price"}
            </button>
          </div>
          {isFormVisible && (
            <form onSubmit={handleFormSubmit} className="mt-4">
              <div className="form-control">
                <label className="label" htmlFor="tier_price">
                  <span className="label-text">New Price</span>
                </label>
                <input
                  type="number"
                  value={newPrice}
                  id="tier_price"
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <button type="submit" className="btn btn-secondary mt-4">
                Save
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default TierCard;
