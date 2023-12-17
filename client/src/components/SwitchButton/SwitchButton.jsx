import React from "react";
import "./SwitchButton.css";

const SwitchButton = (props) => {
  const { isAvailable, handleSwitch, switchValue} = props;
  return (
    <>
      <input
        checked={isAvailable}
        onChange={handleSwitch}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isAvailable && "#4c98ff" }}
        className={`w-auto sm:min-w-[5.5rem] sm:max-w-[5.75rem] md:min-w-[6rem] md:max-w-[6rem] flex flex-row grow react-switch-label transition-all duration-500 ease-in-out text-sm md:text-sm`}
        htmlFor={`react-switch-new`}
      >
        <span
          className={`${
            isAvailable ? "p-6" : "pl-[3.25rem]"
          } text-white transition-all duration-300 ease-in-out`}
        >
          {isAvailable ? switchValue[0] : switchValue[1]}
        </span>
        <span className={`react-switch-button`}></span>
      </label>
    </>
  );
};

export default SwitchButton;
