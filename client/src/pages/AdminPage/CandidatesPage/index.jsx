import React from "react";
import { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import { CareersContext } from "../../../Context/CareersContext";
import EmployItem from "./EmployItem/EmployItem";
import { motion } from "framer-motion";

const CandidatesPage = () => {
  const { employee } = useContext(CareersContext);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const [check, setCheck] = useState(true);
  const [val, setVal] = useState("");
  const [sort1, setSort1] = useState("");
  const [sort2, setSort2] = useState("");
  const [sortedArray, setSortedArray] = useState(employee?.slice());

  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  console.log(employee);
  const statusList = [
    "RECEIVED CV",
    "APPROVED",
    "DO A TEST",
    "DONE A TEST",
    "AWAITING INTERVIEW",
    "INTERVIEW",
    "OFFERING",
    "ONBOARDING",
    "REJECT",
  ];

  const handleChangeVal = (e) => {
    setVal(e.target.value);
  };
  const handleSort1 = (e) => {
    setSort1(e.target.value);
  };
  const handleSort2 = (e) => {
    setSort2(e.target.value);
  };
  const handleChangeSelect1 = (e) => {
    setSelect1(e.target.value);
  };
  const handleChangeSelect2 = (e) => {
    setSelect2(e.target.value);
  };

  const endOffset = itemOffset + itemsPerPage;
  const currentEmployeess = sortedArray?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedArray?.length / itemsPerPage);

  console.log(currentEmployeess);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % employee.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const newArray = [...(employee ? employee : "")];
    newArray.sort((a, b) =>
      b?.personal?.lastName.localeCompare(a?.personal?.lastName)
    );
    // console.log("day la newArray", newArray);

    if (sort2 == "Z - A") {
      setSortedArray(newArray);
    } else if (sort2 == "A - Z") {
      setSortedArray(newArray.reverse());
    } else if (sort2 == "Sort Name") {
      setSortedArray([...employee]);
    }
  }, [sort2]);

  useEffect(() => {
    setSortedArray([...employee?.slice()]);
  }, [employee?.length]);

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
          <div className="dark:bg-slate-800 dark:text-white dark:border-white  flex items-center justify-between pb-2 bg-white ">
            <div>
              <p className="dark:bg-slate-800 dark:text-white dark:border-white  text-xl lg:text-2xl text-neutral-500 font-semibold">
                Candidates
              </p>
            </div>

            {check ? (
              <button
                onClick={() => setCheck(false)}
                type="button"
                className=" dark:text-white dark:border-white  flex  text-slate-500 bg-white border border-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-3 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" dark:text-white dark:border-white  w-5 h-5 pr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
                <div className=" dark:text-white dark:border-white  pt-[1px]">
                  Filter & Sort
                </div>
              </button>
            ) : (
              <div className=" dark:text-white dark:border-white  w-2/3 flex justify-between">
                <div className="dark:bg-slate-800 dark:text-white dark:border-white  relative w-4/5">
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
                    className="dark:bg-slate-800 dark:text-white dark:border-white   block w-4/5 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                  />
                </div>
                <select
                  value={select1}
                  onChange={handleChangeSelect1}
                  id="countries"
                  className="dark:bg-slate-800 dark:text-white dark:border-white  bg-gray-50 border mr-[5%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/5"
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
                <select
                  value={select2}
                  onChange={handleChangeSelect2}
                  id="countries"
                  className="dark:bg-slate-800 dark:text-white dark:border-white  bg-gray-50 border mr-[5%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/5"
                >
                  <option selected value="">
                    Status
                  </option>
                  <option value="RECEIVED CV">RECEIVED CV</option>
                  <option value="APPROVED">APPROVED</option>
                  <option value="DO A TEST">DO A TEST</option>
                  <option value="DONE A TEST">DONE A TEST</option>
                  <option value="AWAITING INTERVIEW">AWAITING INTERVIEW</option>
                  <option value="INTERVIEW">INTERVIEW</option>
                  <option value="OFFERING">OFFERING</option>
                  <option value="ONBOARDING">ONBOARDING</option>
                  <option value="REJECT">REJECT</option>
                </select>
                <select
                  value={sort2}
                  onChange={handleSort2}
                  id="countries"
                  className="dark:bg-slate-800 dark:text-white dark:border-white  bg-gray-50 border w-2/5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
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
          <div className="dark:bg-slate-800 dark:text-white dark:border-white  rounded-lg w-full">
            <table className="dark:bg-slate-800 dark:text-white dark:border-white  w-full text-sm text-center text-gray-500  rounded-lg border-collapse">
              <thead className="dark:bg-sky-400 dark:text-white dark:border-white  text-xs text-white bg-sky-400 border-b-0 ">
                <tr>
                  <th
                    scope="col"
                    className=" dark:text-white dark:border-white  w-3/8 px-3 py-3 font-semibold rounded-tl-lg"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className=" dark:text-white dark:border-white  w-1/8 px-3 py-3 font-semibold"
                  >
                    Job Title
                  </th>
                  <th
                    scope="col"
                    className=" dark:text-white dark:border-white  w-1/8 px-3 py-3 font-semibold"
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    className=" dark:text-white dark:border-white  w-1/8 px-3 py-3 font-semibold"
                  >
                    Salary
                  </th>
                  <th
                    scope="col"
                    className=" dark:text-white dark:border-white  w-1/8 px-3 py-3 font-semibold"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className=" dark:text-white dark:border-white  w-1/8 px-3 py-3 font-semibold rounded-tr-lg"
                  >
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody className=" dark:bg-slate-800 dark:text-white dark:border-white  border-[1.5px] border-t-0 border-sky-200">
                {
                  currentEmployeess
                    ?.filter((item) => {
                      return (
                        item?.personal?.lastName +
                        " " +
                        item?.personal?.firstName
                      )
                        .toLowerCase()
                        .includes(val.toLowerCase())
                        &&
                        (select1 === "" || item?.teamLead?.toLowerCase().includes(select1?.toLowerCase()))
                        &&
                        (select2 === "" || item?.isReject ? statusList[8] : statusList[item?.timeLine.length - 1].toLowerCase().includes(select2?.toLowerCase()))
                        && item?.isAccepted == false
                    })
                    ?.map((item) => {
                      return <EmployItem key={item._id} employee={item} />;
                    })
                }
              </tbody>
            </table>

            <nav
              className="dark:bg-slate-800 dark:text-white dark:border-white  flex items-center justify-between py-2 pt-1 pl-2"
              aria-label="Table navigation"
            >
              <span className="dark:bg-slate-800 dark:text-white dark:border-white  text-xs font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="dark:bg-slate-800 dark:text-white dark:border-white  font-semibold text-gray-900 dark:text-white">
                  {endOffset >= employee?.filter((item)=>{return item.isAccepted==false})?.length
                    ? `${itemOffset + 1}-${employee?.filter((item)=>{return item.isAccepted==false})?.length}`
                    : `${itemOffset + 1}-${endOffset}`}
                </span>{" "}
                of{" "}
                <span className="dark:bg-slate-800 dark:text-white dark:border-white  font-semibold text-gray-900 dark:text-white">
                  {employee?.filter((item)=>{return item.isAccepted==true})?.length}
                </span>
              </span>

              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3} // Điều chỉnh giá trị này để tăng khoảng cách giữa các số trang
                pageCount={pageCount}
                previousLabel="<"
                marginPagesDisplayed={5}
                renderOnZeroPageCount={null}
                className="dark:bg-slate-800 dark:text-white dark:border-white inline-flex items-center -space-x-px"
                pageLinkClassName="dark:bg-slate-800 dark:text-white dark:border-white px-2 py-2 text-xs text-gray-500 bg-white border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                nextLinkClassName="dark:bg-slate-800 dark:text-white dark:border-white px-2 py-2 text-xs text-gray-500 bg-white border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                previousLinkClassName="dark:bg-slate-800 dark:text-white dark:border-white px-2 py-2 text-xs text-gray-500 bg-white border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                activeLinkClassName="dark:bg-slate-800 dark:text-white dark:border-white px-2 py-2 text-xs text-gray-800 bg-white font-bold"
              />



            </nav>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CandidatesPage;
