import React, { useContext, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
// import BarChart from "../BarChart";
import BarChart from "../BarChart";
import { CareersContext } from "../../../../Context/CareersContext";

const JobStatistics = () => {
  const {employee, user} = useContext(CareersContext)
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <main>
      <section className="dark:bg-slate-800 dark:text-white dark:border-white  flex flex-row justify-between px-4 py-2 ">
        <p className="dark:bg-slate-800 dark:text-white dark:border-white  flex font-semibold p-2 place-content-center place-items-center">
          Job Statistics
        </p>
        <div className="dark:bg-slate-800 dark:text-white dark:border-white  flex min-w-[400px]"></div>
      </section>
      {/* JOBS STATISTICS */}
      <section class="h=[80%] w-full">
        <div className="dark:bg-slate-800 dark:text-white dark:border-white  grid grid-rows-2 grid-flow-col  h-[30%] w-full px-6 py-3">
          {/* 1 */}
          <div className="dark:bg-slate-800 dark:text-white dark:border-white  row-span-1  border-l-[1.5px] border-t-[1.5px] border-slate-300 rounded-tl-md flex items-center  pl-5 -pr-5">
            <div className="dark:bg-slate-800 dark:text-white dark:border-white  text-sm dark:text-white">
              <div className="dark:bg-slate-800 dark:text-white dark:border-white  text-xs font-se text-gray-700 pb-2 dark:text-gray-400">
                Total Employees
              </div>
              <div className="font-bold pb-1  text-xl flex">
                {user?.length}
                {/* <div className="ml-1 text-[10px] font-medium ">
                  <mark className="px-1 bg-green-300  text-green-500 rounded-md">
                    +49%
                  </mark>
                </div> */}
              </div>
              <div className="dark:bg-slate-800 dark:text-white dark:border-white  text-xs text-gray-500 dark:text-gray-400">
                Employees
              </div>
            </div>
          </div>
          {/* 2 */}
          {/* <div className="row-span-1 border-l-[1.5px] border-b-[1.5px] border-t-0 border-slate-300 rounded-bl-md flex items-center  pl-5 -pr-5">
            <div className="text-sm dark:text-white">
              <div className="text-xs font-se text-gray-700 pb-2 dark:text-gray-400">
                Job View
              </div>
              <div className="dark:bg-slate-800 dark:text-white dark:border-white  font-bold pb-1  text-xl flex">
                4400{" "}
                <div className="dark:bg-slate-800 dark:text-white dark:border-white  ml-1 text-[10px] font-medium ">
                  <mark className="dark:bg-slate-800 dark:text-white dark:border-white  px-1 bg-green-300  text-green-500 rounded-md">
                    +49%
                  </mark>
                </div>
              </div>
              <div className="dark:bg-slate-800 dark:text-white dark:border-white  text-xs text-gray-500 dark:text-gray-400">
                viewers
              </div>
            </div>
          </div> */}
          {/* 3 */}
          {/* <div className="pl-5 -pr-5 row-span-1 border-t-[1.5px] border-slate-300 flex items-center ">
            <div className="text-sm dark:text-white">
              <div className="text-xs font-se text-gray-700 pb-2 dark:text-gray-400">
                Resigned Employees
              </div>
              <div className="dark:bg-slate-800 dark:text-white dark:border-white  font-bold pb-1  text-xl flex">
                23{" "}
                <div className="dark:bg-slate-800 dark:text-white dark:border-white  ml-1 text-[10px] font-medium ">
                  <mark className="dark:bg-slate-800 dark:text-white dark:border-white  px-1 bg-red-300  text-red-500 rounded-md">
                    -49%
                  </mark>
                </div>
              </div>
              <div className="dark:bg-slate-800 dark:text-white dark:border-white  text-xs text-gray-500 dark:text-gray-400">
                Employees
              </div>
            </div>
          </div> */}
          {/* 4 */}
          <div className="dark:bg-slate-800 dark:text-white dark:border-white  pl-5 -pr-5 row-span-1 border-b-[1.5px] border-slate-300 flex items-center ">
            <div className="dark:bg-slate-800 dark:text-white dark:border-white  text-sm dark:text-white">
              <div className="dark:bg-slate-800 dark:text-white dark:border-white  text-xs font-se text-gray-700 pb-2 dark:text-gray-400">
                Job Aplied
              </div>
              <div className="font-bold pb-1  text-xl flex">
                {employee?.length}
                {/* <div className="ml-1 text-[10px] font-medium ">
                  <mark className="px-1 bg-green-300  text-green-500 rounded-md">
                    +49%
                  </mark>
                </div> */}
              </div>
              <div className="dark:bg-slate-800 dark:text-white dark:border-white  text-xs text-gray-500 dark:text-gray-400">
                Applicants
              </div>
            </div>
          </div>
          {/* Chart  job statistics*/}
          <div className="dark:bg-slate-800 dark:text-white dark:border-white  row-span-2 col-span-4 border-[1.5px] border-slate-300 rounded-r-md flex justify-center items-center">
            <BarChart />
          </div>
        </div>
      </section>
    </main>
  );
};
export default JobStatistics;
