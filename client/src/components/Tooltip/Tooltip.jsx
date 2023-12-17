import React, {useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ message, children }) => { /* { message: string; children: ReactNode } */
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex flex-col items-center group">
      <span className="flex justify-center" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </span>
      <div className={`absolute whitespace-nowrap bottom-[1.5rem] flex flex-col items-center group-hover:flex ${!show ? "opacity-0" : "opacity-100"} transition-all duration-300`}>
        <span className="relative text-[0.65rem] z-10 p-2 -left-[2rem] leading-none text-gray-600 whitespace-no-wrap bg-gray-200 rounded-md">
          {message}
        </span>
        <div className="tooltip" />
      </div>
    </div>
  );
};
export default Tooltip;