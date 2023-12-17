import React, { useState } from 'react';

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = (props) => {

  const [inForUser, setInForUser] = useState(initialValues);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInForUser({
        ...inForUser,
        [name]: value,
    });
    };

  const handleSubmit =  (event) => {
    event.preventDefault();
    props.onSubmit(inForUser);
  };

  return (
    <form className="flex flex-col px-5 py-10 gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-row w-50 h-10 bg-[#f0f0f0] rounded-full place-content-start place-items-center px-2 gap-1">
        {/* <label htmlFor="username">Username:</label> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="gray"
          className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
        </svg>
        <input
          type="username"
          id="username"
          name="username"
          onChange={onChangeHandler}
          placeholder='Your Username'
          className=" bg-transparent ml-3"
          required
        />
      </div>

      <div className="flex flex-row w-50 h-10 bg-[#f0f0f0] rounded-full place-content-start place-items-center px-2 gap-1">
        {/* <label htmlFor="password">Password:</label> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="gray"
          className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          id="password"
          name="password"
          onChange={onChangeHandler}
          placeholder='Your Password'
          className="bg-transparent border-0 p-0 ml-3"
          required
        />
      </div>

      <button className="
          flex py-3 px-16 mt-8
          place-content-center place-items-center place-self-center 
          font-semibold text-white bg-gradient-to-r from-[#72afd3] to-[#37ecba] rounded-full
          focus:opacity-75 focus:text-sm focus:font-bold"
        type="submit">LOG IN</button>
    </form>
  );
};

export default LoginForm;