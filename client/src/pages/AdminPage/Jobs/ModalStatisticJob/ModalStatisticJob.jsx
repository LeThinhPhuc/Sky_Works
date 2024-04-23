import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../Context/AuthContext";
import BarChart from "../../Overview/BarChart";
import BarChartJob from "../BarChartJob/BarChartJob";

const ModalStatisticJob =(props)=>{
    const { emailAdmin } = useContext(AuthContext);
    const [fromName, setFromName] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState("");
    const [link, setLink] = useState("");
    const [field, setField] = useState(true);
    const [total, setTotal] = useState();
  
    const {isShow, isShowModalSendTest, nameJob} = props;
    // console.log("tu modal ",nameJob)
   
    const handleClose = () => {
      isShowModalSendTest(false);
    };
    return (
      <div
        id="small-modal"
        tabindex="-1"
        aria-hidden="true"
        class={` ${
          isShow == true ? "" : "hidden"
        } fixed top-[20%] left-[40%]  z-50  w-[500px] h-full p-4 overflow-x-hidden overflow-y-auto transition `}
      >
        <div class="relative bg-gray-100 rounded-lg border-gray-400 border-2 shadow dark:bg-gray-700">
          <button
            onClick={handleClose}
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Statistics on application status of <span className="text-red-400">{nameJob}</span>{" "}
            </h3>
            <form class="space-y-4" action="#" novalidate>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Total Candidates : <span className="text-red-400">{total}</span>
                </label>
              </div>
              {/* <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  HR's email
                </label>
                <input
                  type="email"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                ></input>
              </div> */}
              
  
  <div className="dark:bg-slate-800 dark:text-white dark:border-white  row-span-2 col-span-4 border-[1.5px] border-slate-300 rounded-r-md flex justify-center items-center">
            < BarChartJob nameJob={nameJob} setTotal={setTotal}/>
          </div>

              
            </form>
          </div>
        </div>
      </div>
    );
}

export default ModalStatisticJob