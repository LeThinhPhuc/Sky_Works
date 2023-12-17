import React, { useState } from "react";

const Input = (props) => {
  const [inputs, setInputs] = useState({});
  const { type, text, inputName, required, option, value, onHandleInfo } =
    props;
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ [name]: value });
    onHandleInfo({ [name]: value });
  };

  return (
    <div className="relative grow font-light text-xs md:text-sm">
      <input
        type={type}
        id={inputName}
        name={inputName}
        required={required}
        autoComplete="off"
        className={`peer w-full min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-4 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent ${
          required
            ? "dark:focus:border-rose-500 focus:border-rose-500"
            : "dark:focus:border-sky-300 focus:border-sky-300"
        }`}
        value={value || ""}
        placeholder={text}
        onChange={onHandleChange}
      />
      <label
        forhtml={inputName}
        className={`pointer-events-none bg-transparent absolute h-auto top-0 left-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.65rem] px-3 leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[1.25rem] 
        opacity-0 peer-focus:opacity-100 peer-focus:scale-[0.9] peer-focus:left-4 peer-focus:bg-white motion-reduce:transition-none dark:text-neutral-300 ${
          required
            ? "dark:peer-focus:text-red-500 peer-focus:text-red-500"
            : "dark:peer-focus:text-sky-500 peer-focus:text-sky-500"
        }`}
      >
        {option ? `${text} (Option)` : `${text} (Required)`}
      </label>
    </div>
  );
};

export default Input;
