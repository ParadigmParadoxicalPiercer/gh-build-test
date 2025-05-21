import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  day: Yup.number()
    .min(1, "Day must be at least 1")
    .max(31, "Day must be at most 31")
    .required("Day is required")
    .typeError("Please input a number"),
  age: Yup.number()
    .min(10, "Age must be at least 10")
    .max(100, "Age must be at most 100")
    .required("Age is required")
    .typeError("Please input a number"),
});
