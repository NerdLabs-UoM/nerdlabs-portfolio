import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup.string("name should be a string").required("required."),
  lastname: yup.string("name should be a string").required("required"),
  email: yup.string("email should be a string").email("please provide a valid email address").required("required"),
  message: yup.string("message should be string").required("required"),
  remember: yup.boolean().oneOf([true], "please tick the checkbox"),
});
