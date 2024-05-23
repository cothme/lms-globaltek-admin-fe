import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const toastNotify = (word: string) => {
  toast(word);
};
