import React, { useState, useEffect, useRef } from "react";
import { dataService } from "../../services/dataService";
import BeatLoader from "react-spinners/BeatLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Select.css";
import "flowbite";

const Select = (props) => {
  const { getCountryCode } = props;
  const [countries, setCountries] = useState([]);
  const [flagURL, setFlagURL] = useState("");
  const [flagAlt, setFlagAlt] = useState("");
  const [countryName, setCountryName] = useState("");
  const [code, setCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const btnRef = useRef();
  const prevState= useRef(true);

  /* fetch all countries */
  const fetchData = async () => {
    setLoading(true);
    const res = await dataService.getData(
      "https://restcountries.com/v3.1/all"
    );
    setCountries(res);
    // get VN as default
    const init = res.find((country) => country.ccn3 == "704");
    setFlagURL(init.flags.png);
    setFlagAlt(init.flags.alt);
    setCountryName(init.name.common);
    getCountryCode(init.idd.root + init.idd.suffixes[0]);
    setCode(init.idd.root + init.idd.suffixes[0]);
    setLoading(false);
  };

  const phoneCodes =
    countries.length &&
    countries.map((countryData, idx) => {
      const { png, alt } = countryData.flags;
      const { root, suffixes } = countryData.idd;
      const flagIcon = (
        <img
          src={png}
          alt={alt}
          className="w-[1.8rem] h-[1.15rem] rounded-[0.2rem] drop-shadow-md"
        ></img>
      );
      return (
        <li
          key={idx}
          className="w-full flex flex-row gap-5 justify-between text-xs md:text-sm py-4 px-6 hover:bg-sky-200 hover:cursor-pointer focus:bg-slate-300"
          onClick={() => onHandleItemClick(idx)}
        >
          <div className="flex flex-row justify-items-stretch gap-3 w-2/3">
            {flagIcon}
            <p className="truncate">{countryData.name.common}</p>
          </div>
          <p className="">
            {root}
            {suffixes && suffixes.length > 0 ? suffixes[0] : "N/A"}
          </p>
        </li>
      );
    });

  const onHandleItemClick = (val) => {
    setIsOpen(false);
    const selected = countries[val];
    const { flags, name, idd } = selected;
    setFlagURL(flags.png);
    setFlagAlt(flags.alt);
    setCountryName(name.common);
    setCode(idd.root + idd.suffixes.join(""));
    getCountryCode(idd.root + idd.suffixes.join("-"));
  };

  useEffect(() => {
    if (prevState.current) {
      prevState.current = false;
      fetchData();
    }    
  }, []);

  useEffect(() => {
    const closeClickOutside = (e) => {
      if (btnRef.current && !btnRef.current.contains(e.target)) { 
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", closeClickOutside);
    // unmount event listener
    return () => {
      document.body.removeEventListener("click", closeClickOutside);
    };
  }, []);

  return (
    <>
      <button
        id="dropdown-button"
        // data-dropdown-toggle="dropdown-states"
        className="flex-shrink-0 max-w-[45%] w-[45%] lg:max-w-[40%] lg:w-[40%] z-10 relative flex items-center gap-2 py-1.5 md:py-2.5 px-3 xs:px-4 font-medium text-center text-gray-800 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-sky-200 focus:outline-none focus:ring-transparent dark:focus:ring-transparent dark:bg-gray-600 dark:hover:bg-gray-700"
        type="button" ref={btnRef}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {loading ? (
          <div className="w-full flex flex-row justify-center"><BeatLoader color="#0ea5e9" size={8} /></div>
        ) : (
          <>
            <div className="phone-code w-full flex flex-row items-center md:justify-between gap-0 xs:gap-3 lg:gap-5 text-xs md:text-sm">
              <img
                src={flagURL}
                alt={flagAlt}
                className="flag w-[2rem] xs:w-[2.4rem] sm:w-[1.8rem] md:w-[2.5rem] rounded-[0.2rem] basis-1/3 xs:basis-1/4 sm:basis-1/6 md:basis-0"
              ></img>
              <p className="text-left truncate hidden sm:block xs:basis-0 sm:basis-3/6">
                {countryName}
              </p>
              <p className="text-left sm:text-center hidden xs:block text-xs md:text-sm xs:basis-2/4 sm:basis-1/6">
                {code}
              </p>
              <FontAwesomeIcon
                icon={faAngleDown}
                rotation={isOpen ? 180 : 0}
                size="lg"
                className="transition duration-300"
              />
              {/* <svg
                aria-hidden="true"
                className="h-6 sm:min-w-[2rem] ml-1 basis-1/2 xs:basis-1/4 sm:basis-1/6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
            </div>
          </>
        )}
      </button>
      <div
        // id="dropdown-states"
        className={`absolute top-[4.25rem] left-0 max-width-100 w-full sm:w-[45%] lg:w-[40%] h-[20rem] py-4 overflow-y-auto overflow-x-hidden z-10 focus:outline-none outline-none bg-white rounded-lg drop-shadow-md dark:bg-gray-700 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <ul
          className="py-0 text-sm font-light text-gray-700 dark:text-gray-200"
          aria-labelledby="states-button"
        >
          {phoneCodes}
        </ul>
      </div>
    </>
  );
};

export default Select;
