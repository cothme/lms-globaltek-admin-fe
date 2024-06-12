import Tier from "../../interfaces/Tier";
import useAuthContext from "../useAuthContext";
import { useState } from "react";
import swalSuccess from "../../helpers/swalSuccess";

const useUpdateTiers = (tierId: string) => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Tier>({
    _id: tierId,
    tier_price: 0,
  });

  const updateTier = async (updatedTierData: Tier) => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/tier/${tierId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwt}`,
          },
          body: JSON.stringify(updatedTierData), // Use updatedTierData instead of formData
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update tier");
      }
      swalSuccess("Tier updated successfully", "success");
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "Failed to update tier");
      setLoading(false);
    }
  };

  return { formData, setFormData, updateTier, loading, error };
};

export default useUpdateTiers;
