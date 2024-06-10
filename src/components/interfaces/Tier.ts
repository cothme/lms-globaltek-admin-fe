export default interface Tier {
  _id: string;
  tier_title?: string;
  tier_description?: string;
  tier_price?: number;
  required_subscription?: string;
}
