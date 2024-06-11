import swal from "sweetalert";
const swalSuccess = (message: string, icon: string) => {
  swal({
    icon: icon || "success",
    text: String(message),
  });
};

export default swalSuccess;
