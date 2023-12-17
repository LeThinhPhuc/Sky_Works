import React, { useState, useEffect } from "react";
import Select from "../Select/Select";

const DropdownInput = (props) => {
  const {type, text, inputName, required, option, value, onHandleInfo} = props;
  // States
  const [inputs, setInputs] = useState({});  
  const [phoneNum, setPhoneNum] = useState("");
  const onHandleChange = (e) => {
    const {name, value} = e.target;
    setInputs({[name]: phoneNum.concat(value)});  
    onHandleInfo({[name]: value});
  };

  const getCountryCode = (response) => {
    setPhoneNum(response + " ");        
  }
  
  return (
    <div className="w-full relative flex flex-row">
      <label
        forhtml={inputName}
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Phone list
      </label>
      <Select getCountryCode= {getCountryCode}/>      
     
      <div className="relative w-full font-light text-xs md:text-sm">
        <input
          type={type}
          id={inputName}
          name={inputName}
          required={required}
          autoComplete="off"
          value={value ? value : phoneNum}
          className={`peer w-full block py-4 px-3 z-20 min-h-[auto] text-xs md:text-sm rounded-lg border md:border-l-0 rounded-l-none bg-white leading-[1.6] placeholder-gray-500 placeholder:text-xs md:placeholder:text-sm focus:placeholder-transparent outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent ${
            required
              ? "dark:focus:border-rose-500 focus:border-rose-500"
              : "dark:focus:border-sky-300 focus:border-sky-300"
          }`}
          placeholder={phoneNum}
          onChange={onHandleChange}
        />
        <label
          forhtml={inputName}
          className={`pointer-events-none bg-transparent absolute h-auto top-0 left-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.65rem] px-3 leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[1.25rem] 
          opacity-0 peer-focus:opacity-100 peer-focus:scale-[0.9] peer-focus:left-4 peer-focus:bg-white motion-reduce:transition-none dark:text-neutral-300  ${
          required
            ? "dark:peer-focus:text-red-500 peer-focus:text-red-500"
            : "dark:peer-focus:text-sky-500 peer-focus:text-sky-500"
        }`}
        >
          {option ? `${text} (Option)` : `${text} (Required)` }
        </label>
      </div>
    </div>
  );
};

export default DropdownInput;
