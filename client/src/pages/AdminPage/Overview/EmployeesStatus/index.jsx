import React, { useEffect, useState, useContext } from "react";
import DoughnutChart from "../DoughnutChart";
import axios from "axios";
import ReactPaginate from "react-paginate";

import { CareersContext } from "../../../../Context/CareersContext";
import StatusBadge from "../../../../components/StatusBadge/StatusBadge";

function Items({ currentItems }) {
  const statusList=["RECEIVED CV","APPROVED","DO A TEST","DONE A TEST","AWAITING INTERVIEW","INTERVIEW","OFFERING","ONBOARDING","REJECT"]
 
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <tr
            key={item._id}
            className="bg-white  border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div
                style={{
                  backgroundColor:
                    "#" +
                    (Math.random().toString(16) + "000000").substring(2, 8),
                }}
                className={`w-12 h-12 relative flex justify-center items-center rounded-full 
                bg-[${
                  "#" + (Math.random().toString(16) + "000000").substring(2, 8)
                }] text-xl text-white uppercase`}
              >
                {(item.personal?.firstName + " " + item.personal?.lastName)
                  .split(" ")
                  .reduce(
                    (acc, cur) => (cur == "" ? acc : (acc += cur[0])),
                    ""
                  )}
              </div>

              <div className="text-xs font-semibold pl-3">
                {item.personal?.firstName + " " + item.personal?.lastName}
              </div>
            </th>
            <td className="px-2 py-4 text-xs">
              {item.personal?.headline ? item.personal?.headline : "None title"}
            </td>
            <td className="px-2 py-4">
              <div className="text-xs ">{item.teamLead} </div>
            </td>
            <td className="pl-2 pr-2 py-4">
              <StatusBadge class='text-'
        status={
          item.isReject?statusList[8]:statusList[item.timeLine.length-1]
        }
        />
            </td>
          </tr>
        ))}
    </>
  );
}

function EmployeesStatus({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  // const [employees, setEmployees] = useState([]);
  // const { employees } = useContext(CareersContext)

  const [itemOffset, setItemOffset] = useState(0);
  const { employee } = useContext(CareersContext);
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  // const currentEmployees=[1,2,3,4,5,6]
  const endOffset = itemOffset + itemsPerPage;
  const currentEmployees = employee?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(employee?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % employee?.length;
    
    setItemOffset(newOffset);
  };
  console.log(employee);
  return (
    <>
      <section className="px-4 py-2 flex justify-between">
        <div className=" flex flex-col  w-2/3">
          <div className="flex items-center justify-between pb-2 bg-white dark:bg-gray-900  ">
            <div>
              <p className="font-semibold">Employee Status</p>
            </div>

          
          </div>
          <div className="relative overflow-x-auto border-[1.5px] rounded-lg ">
            <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-sm text-gray-500  bg-gray-100 border-b-[1.5px] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-3 pl- py-3 font-semibold">
                    Employee Name
                  </th>
                  <th scope="col" className="px-3 pl-5 py-3 font-semibold">
                    Job Title
                  </th>
                  <th scope="col" className="px-3 pl-5 py-3 font-semibold">
                    Team Lead
                  </th>
                  <th scope="col" className="px-0  pl-5 py-3 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <Items currentItems={currentEmployees} />
              </tbody>
            </table>

            <nav
              className="flex items-center justify-between py-2 pt-1 pl-2"
              aria-label="Table navigation"
            >
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {endOffset >= employee?.length
                    ? `${itemOffset + 1}-${employee?.length}`
                    : `${itemOffset + 1}-${endOffset}`}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {employee?.length}
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
                className="inline-flex items-center -space-x-px"
                pageLinkClassName="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                nextLinkClassName="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                previousLinkClassName="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                activeLinkClassName="px-2 py-2 text-xs text-gray-800 bg-white font-bold"
              />
            </nav>
          </div>
        </div>
        <div className="w-1/3 pl-7 pr-2 ">
          <p className="font-semibold pt-1 pb-4">Working Format</p>
          <div className="border-[1.5px] rounded-lg h-[356px] flex justify-center items-center">
            <DoughnutChart />
          </div>
        </div>
      </section>
    </>
  );
}
export default EmployeesStatus;
