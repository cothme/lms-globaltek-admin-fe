export default interface User {
  _id?: string;
  family_name?: string;
  given_name?: string;
  user_name?: string;
  email?: string;
  isFromGoogle?: boolean;
  subscription_tier?: string;
  createdAt?: string;
}
