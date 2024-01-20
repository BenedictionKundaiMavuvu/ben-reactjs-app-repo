import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullname: yup.string().required("Fullname is required"),
    email: yup.string().email().required("Email is required"),
    age: yup
      .number()
      .integer()
      .positive()
      .min(18)
      .required("Age must be 18 and above"),
    password: yup.string().min(5).max(15).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don`t match")
      .required("Age is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter fullname..."
          {...register("fullname")}
        />
        <p className="errorMessage">{errors.fullname?.message}</p>
        <input
          type="text"
          placeholder="Enter email..."
          {...register("email")}
        />
        <p className="errorMessage">{errors.email?.message}</p>
        <input type="number" placeholder="Enter age..." {...register("age")} />
        <p className="errorMessage">{errors.age?.message}</p>
        <input
          type="text"
          placeholder="Enter password..."
          {...register("password")}
        />
        <p className="errorMessage">{errors.password?.message}</p>
        <input
          type="text"
          placeholder="Confirm password..."
          {...register("confirmPassword")}
        />
        <p className="errorMessage">{errors.confirmPassword?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
