import React, { useState, useContext, useEffect } from "react";
import { CareersContext } from "../../../Context/CareersContext";
import CardItem from "../../../components/CareerBody/Components/CardItem/CardItem";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import { motion } from "framer-motion";

const Jobs = () => {
  const [key, setKey] = useState("");
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const { jobsData } = useContext(CareersContext);

  // console.log(jobsData);
  const handleChangeKey = (e) => {
    setKey(e.target.value);
  };
  const handleReset = () => {
    setKey("");
    setSelect1("");
    setSelect2("");
  };
  const handleChangeSelect1 = (e) => {
    setSelect1(e.target.value);
    console.log(select1);
  };
  const handleChangeSelect2 = (e) => {
    setSelect2(e.target.value);
    console.log(select2);
  };

  const [visibleCount, setVisibleCount] = useState(4); // Số lượng phần tử hiển thị ban đầu

  const showMore = () => {
    setVisibleCount(visibleCount + 4); // Tăng số lượng phần tử hiển thị lên 5
  };
  console.log("data", jobsData);
  let show = jobsData
    ?.filter((item) => {
      return item?.title?.toLowerCase()?.includes(key.toLowerCase());
    })
    .filter(
      (item) =>
        (select1 === "" ||
          item.location.toLowerCase().includes(select1.toLowerCase()) ||
          item.tags[1].toLowerCase().includes(select1.toLowerCase())) &&
        (select2 === "" ||
          item.tags[0].toLowerCase().includes(select2.toLowerCase()))
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.05, duration: 0.35 }}
    >
      {jobsData.length > 0 ? (
        <div className="mt-20 mb-8 px-10 min-[900px]:px-14">
          <div className="">
            <div className="flex text-xs sm:text-sm min-[900px]:text-base flex-col min-[900px]:flex-row justify-center gap-4">
              <div className="relative w-2/3 mx-auto min-[900px]:mx-0 min-[900px]:w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  value={key}
                  onChange={handleChangeKey}
                  type="search"
                  id="default-search"
                  className=" block w-full py-[0.75rem] min-[900px]:py-4 px-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
              </div>

              <select
                value={select1}
                onChange={handleChangeSelect1}
                id="countries"
                className="w-2/3 min-[900px]:w-full py-[0.75rem] min-[900px]:max-w-[160px] min-[900px]:max-w-full mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="">
                  Location
                </option>
                <option value="Remote">Remote</option>
                <option value="Vietnam">Vietnam</option>
                <option value="United States">United States</option>
              </select>
              <select
                value={select2}
                onChange={handleChangeSelect2}
                id="countries"
                className="w-2/3 min-[900px]:w-full py-[0.75rem] min-[900px]:max-w-[160px] min-[900px]:max-w-full mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="">
                  Department
                </option>
                <option value="Art">Art</option>
                <option value="Engineer">Engineer</option>
                <option value="Finance">Finance</option>
                <option value="Game Production">Game Production</option>
                <option value="Growth">Growth</option>

                <option value="HR & Admin">HR & Admin</option>

                <option value="Legal">Legal</option>
                <option value="Product">Product</option>
              </select>
              <div className="flex justify-center">
                <button
                  onClick={handleReset}
                  className="text-blue-500 text-sm font-medium whitespace-nowrap"
                >
                  Reset Filter
                </button>
              </div>
            </div>
          </div>

          <div className=" pt-8">
            <div className=" text-3xl font-semibold pb-7 ">
              {/* {jobsData.length} total position */}
              {show.length} total positions
            </div>

            <div>
              {show.length == 0 ? (
                <h1>No result</h1>
              ) : (
                show.slice(0, visibleCount).map((item, idx) => {
                  return (
                    // <Link to={`/careers/${item._id}`} key={idx} className="cursor-pointer flex p-6 drop-shadow-[0px_8px_30px_#DEE6F1] border-t first:border-b-[#C5CEE0] last:border-b hover:border-transparent hover:border-0 hover:rounded-2xl hover:shadow-[0px_8px_30px_#DEE6F1] transition-all duration-200">
                    <Link
                      to={`/admin/update-job/${item._id}`}
                      key={idx}
                      className="cursor-pointer flex p-6 drop-shadow-[0px_8px_30px_#DEE6F1] border-t first:border-b-[#C5CEE0] last:border-b hover:border-transparent hover:border-0 hover:rounded-2xl hover:shadow-[0px_8px_30px_#DEE6F1] transition-all duration-200"
                    >
                      <CardItem
                        id={item._id}
                        title={item.title}
                        location={item.location}
                        tags={item.tags}
                      />
                    </Link>
                  );
                })
              )}
            </div>
          </div>
          {visibleCount < jobsData.length && (
            <div className="flex items-center justify-center svelte-1jp7mce">
              <button
                onClick={showMore}
                className="text-[#4C98FF] cursor-pointer text-center font-semibold mt-[28px] text-base svelte-1jp7mce"
              >
                Show more
              </button>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </motion.div>
  );
};
export default Jobs;
