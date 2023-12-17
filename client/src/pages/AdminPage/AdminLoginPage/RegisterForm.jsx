import React, { useState } from "react";
import userAdminService from "../../../services/userAdminService";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const [inForUser, setInForUser] = useState(initialValues);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInForUser({
      ...inForUser,
      [name]: value,
    });
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inForUser?.password !== confirmPassword) {
      setError("Passwords do not match");
      setConfirmPassword("");
      return;
    }

    try {
      const response = await userAdminService.registerAdmin(inForUser);
      setSuccess("Register Success");
      setInForUser(initialValues);
      setConfirmPassword("");

      setTimeout(() => {
        setSuccess("");
      }, 3000); // set timeout sau 3 giây
    } catch (error) {
      setError(error?.response.data.message);
      setInForUser(initialValues);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <form
      className="flex flex-col px-5 gap-5 w-11/12 place-items-center"
      onSubmit={handleSubmit}
    >
      {error && <div className="error-message">{error}</div>}
      {success && <div className="error-message">{success}</div>}
      <div className="flex justify-start place-items-center px-5 w-11/12 h-10 bg-[#f0f0f0] rounded-full">
        {/* <label htmlFor="username">Username:</label> */}
        <input
          type="username"
          id="username"
          name="username"
          value={inForUser?.username}
          onChange={onChangeHandler}
          placeholder="New Username"
          className="w-full bg-transparent border-none ml-3"
          required
        />
      </div>
      <div className="flex justify-start place-items-center px-5 w-11/12 h-10 bg-[#f0f0f0] rounded-full">
        {/* <label htmlFor="email">E-mail:</label> */}
        <input
          type="email"
          id="email"
          name="email"
          value={inForUser?.email}
          onChange={onChangeHandler}
          placeholder="Enter Your E-mail"
          className="w-full bg-transparent border-none"
          required
        />
      </div>
      <div className="flex justify-start place-items-center px-5 w-11/12 h-10 bg-[#f0f0f0] rounded-full">
        {/* <label htmlFor="password">Password:</label> */}
        <input
          type="password"
          id="password"
          name="password"
          value={inForUser?.password}
          onChange={onChangeHandler}
          placeholder="Enter Your Password"
          className="w-full bg-transparent border-none"
          required
        />
      </div>
      <div className="flex justify-start place-items-center px-5 w-11/12 h-10 bg-[#f0f0f0] rounded-full">
        {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
          className="w-full bg-transparent border-none"
          required
        />
      </div>
      <button
        className="
          flex py-3 px-16 mt-8
          place-content-center place-items-center place-self-center 
          font-semibold text-white bg-gradient-to-r from-[#72afd3] to-[#37ecba] rounded-full
          focus:opacity-75 focus:text-sm focus:font-bold"
        type="submit"
      >
        REGISTER
      </button>
    </form>
  );
};

export default RegisterForm;
