import React from "react";
import { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import { CareersContext } from "../../../Context/CareersContext";
import UserItem from "./UserItem/UserItem";
import { motion } from "framer-motion";
const CandidatesPage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const [check, setCheck] = useState(true);
  const [val, setVal] = useState("");
  const [sort1, setSort1] = useState("");
  const [sort2, setSort2] = useState("");
  const { user } = useContext(CareersContext);
  console.log(user);
  const handleChangeVal = (e) => {
    setVal(e.target.value);
  };
  const handleSort1 = (e) => {
    setSort1(e.target.value);
  };
  const handleSort2 = (e) => {
    setSort2(e.target.value);
  };
  console.log("day la user : ", user);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const [sortedArray, setSortedArray] = useState(user?.slice());
  const currentuserss = sortedArray?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedArray?.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % user.length;
    console.log(
      `DA FIX User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const newArray = [...(user ? user : "")];
    newArray.sort((a, b) => b?.username.localeCompare(a?.username));
    if (sort2 == "Z - A") {
      setSortedArray(newArray);
      console.log(sortedArray);
    } else if (sort2 == "A - Z") {
      setSortedArray(newArray.reverse());
      console.log(sortedArray);
    } else if (sort2 == "Sort Name") {
      setSortedArray([...user]);
    }
  }, [sort2]);
  useEffect(() => {
    setSortedArray([...user?.slice()]);
  }, [user?.length]);
  console.log("day la sortarray : ", sortedArray);
  return (
    <motion.div
      className="dark:bg-slate-800 dark:text-white dark:border-white  bg-white px-4 pt-3 pb-4 flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.05, duration: 0.35 }}
    >
      <section className="dark:bg-slate-800 dark:text-white dark:border-white  px-4 py-2">
        <div className="dark:bg-slate-800 dark:text-white dark:border-white  ">
          <div className="dark:bg-slate-800 dark:text-white dark:border-white  flex items-center justify-between pb-2 bg-white   ">
            <div>
              <p className="dark:bg-slate-800 dark:text-white dark:border-white  text-xl lg:text-2xl text-neutral-500 font-semibold">
                Employees
              </p>
            </div>
            {check ? (
              <button
                onClick={() => setCheck(false)}
                type="button"
                className="dark:bg-slate-800 dark:text-white dark:border-white  flex  text-slate-500 bg-white border border-gray-200 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-3 py-1 mr-2 mb-2  dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="dark:bg-slate-800 dark:text-white dark:border-white  w-5 h-5 pr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
                <div className="dark:bg-slate-800 dark:text-white dark:border-white  pt-[1px]">
                  Filter & Sort
                </div>
              </button>
            ) : (
              <div className="dark:bg-slate-800 dark:text-white dark:border-white  w-3/5 flex justify-around">
                <div className="dark:bg-slate-800 dark:text-white dark:border-white  relative w-3/5">
                  <div className=" dark:text-white dark:border-white   absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className=" dark:text-white dark:border-white  w-5 h-5 text-gray-500 "
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
                    value={val}
                    onChange={handleChangeVal}
                    type="search"
                    id="default-search"
                    className="dark:bg-slate-800 dark:text-white dark:border-white   block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                  />
                </div>
                <select
                  value={sort2}
                  onChange={handleSort2}
                  id="countries"
                  className="dark:bg-slate-800 dark:text-white dark:border-white  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                >
                  <option selected value="Sort Name">
                    Sort Name
                  </option>
                  <option value="A - Z">A - Z</option>
                  <option value="Z - A">Z - A</option>
                </select>
              </div>
            )}
          </div>
          <div className="dark:bg-slate-800 dark:text-white dark:border-white  relative m-auto overflow-x-auto border-[1.5px] rounded-lg w-[80%]">
            <table className="dark:bg-slate-800 dark:text-white dark:border-white  w-full   text-sm text-center text-gray-500 ">
              <thead className="dark:bg-slate-800 dark:text-white dark:border-white  text-xs text-gray-500  bg-gray-100 border-b-[1.5px] ">
                <tr>
                  <th scope="col" className="  px-3 py-3 font-semibold">
                    Username
                  </th>
                  <th scope="col" className="  px-3 py-3 font-semibold">
                    Email
                  </th>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentuserss?.map((item) => {
                  return <UserItem key={item._id} employee={item} />;
                })}
              </tbody>
            </table>
            <nav
              className="dark:bg-slate-800 dark:text-white dark:border-white  flex items-center justify-between py-2 pt-1 pl-2"
              aria-label="Table navigation"
            >
              <span className="dark:bg-slate-800 dark:text-white dark:border-white  text-xs font-normal text-gray-500 ">
                Showing{" "}
                <span className="dark:bg-slate-800 dark:text-white dark:border-white  font-semibold text-gray-900 d">
                  {endOffset >= user?.length
                    ? `${itemOffset + 1}-${user?.length}`
                    : `${itemOffset + 1}-${endOffset}`}
                </span>{" "}
                of{" "}
                <span className="dark:bg-slate-800 dark:text-white dark:border-white  font-semibold text-gray-900 ">
                  {user?.length}
                </span>
              </span>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                marginPagesDisplayed={2}
                renderOnZeroPageCount={null}
                className="dark:bg-slate-800 dark:text-white dark:border-white  inline-flex items-center -space-x-px"
                pageLinkclassName="dark:bg-slate-800 dark:text-white dark:border-white  px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                nextLinkclassName="dark:bg-slate-800 dark:text-white dark:border-white  px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                previousLinkclassName="dark:bg-slate-800 dark:text-white dark:border-white  px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                activeLinkclassName="dark:bg-slate-800 dark:text-white dark:border-white  px-2 py-2 text-xs text-gray-800 bg-white font-bold"
              />
            </nav>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
export default CandidatesPage;
