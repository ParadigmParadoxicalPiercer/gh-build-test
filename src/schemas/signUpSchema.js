import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .matches(
      /^[a-zA-Z]{5,12}$/,
      "Username must be 5-12 characters long and contain only letters"
    ),
  nickname: Yup.string()
    .min(3, "Nickname must be at least 3 characters")
    .max(15, "Nickname must be at most 15 characters")
    .required("Nickname is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  age: Yup.number()
    .min(10, "Age must be at least 10")
    .max(100, "Age must be at most 100")
    .required("Age is required")
    .typeError("Please input a number"),

  tel: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),

  termsAndConditions: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});
