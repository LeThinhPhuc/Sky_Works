import { useState, useEffect, useContext } from "react";
import ModalEmail from "./ModalEmail";
import ModalInviteInterview from "./ModalInviteInterview";
import renderData from "./RenderData";
import EmployService from "../../../../services/employSevice";
import { CareersContext } from "../../../../Context/CareersContext";

const StatusProcess = (props) => {
  //  const stepStatus = useState(0)
  function formatDate(input) {
    const dateNow = new Date(input);
    const day = dateNow.getDate();
    const month = dateNow.getMonth() + 1;
    const year = dateNow.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const { employee, setEmploysData } = useContext(CareersContext);
  const { id } = props;
  const [isReject, setIsReject] = useState(false || false);
  const stepStatusInit = [{ nameStep: 0, created_at: Date.now() }];
  const [stepStatus, setStepStatus] = useState(stepStatusInit);
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const [isLoadingBack, setIsLoadingBack] = useState(false);
  const [isShowModalSendTest, setIsShowModalSendTest] = useState(false);
  const [showModalInviteInterview, setIsShowModalInviteInterview] =
    useState(false);
  const data = employee.find((item) => item._id == id);
  useEffect(() => {
    if (data !== undefined) {
      if (data.timeLine.length == 0) {
        updateTimeLineInit();
      } else {
        setStepStatus(data.timeLine);
      }
      setIsReject(data.isReject);
    }
  }, [data]);
  const updateTimeLineInit = async () => {
    const dataUpdate = {
      ...data,
      timeLine: [{ nameStep: 0, created_at: Date.now() }],
    };
    const updateResponse = await EmployService.UpdateById(data._id, dataUpdate);
    console.log(updateResponse.data.newData);
    setEmploysData(updateResponse.data.newData);
    setStepStatus(
      updateResponse.data.newData.find((item) => item._id == data._id).timeLine
    );
  };
  const updateDataForward = async () => {
    setIsLoadingNext(true);
    const dataUpdate = {
      ...data,
      timeLine: [
        ...stepStatus,
        { nameStep: stepStatus.length - 1 + 1, created_at: Date.now() },
      ],
    };
    const updateResponse = await EmployService.UpdateById(data._id, dataUpdate);
    console.log(updateResponse.data.newData);
    setEmploysData(updateResponse.data.newData);
    setStepStatus(
      updateResponse.data.newData.find((item) => item._id == data._id).timeLine
    );
    setIsLoadingNext(false);
  };
  console.log(data);
  const updateDataBack = async () => {
    setIsLoadingBack(true)
    const dataUpdate = {
      ...data,
      timeLine: [...stepStatus.slice(0, -1)],
    };
    const updateResponse = await EmployService.UpdateById(data._id, dataUpdate);
    console.log(updateResponse.data.newData);
    setEmploysData(updateResponse.data.newData);
    setStepStatus(
      updateResponse.data.newData.find((item) => item._id == data._id).timeLine
    );
  setIsLoadingBack(false)
  };

  const updateReject = async () => {
    const dataUpdate = {
      ...data,
      isReject: !isReject,
    };
    const updateResponse = await EmployService.UpdateById(data._id, dataUpdate);
    setEmploysData(updateResponse.data.newData);
    console.log(updateResponse.data.newData);
    setIsReject(
      updateResponse.data.newData.find((item) => item._id == data._id).isReject
    );
  };

  // console.log(data.timeLine);
  const nextStepSendTest = (data) => {
    if (data) {
      updateDataForward();
    }
  };

  const handleModalSendTest = (data) => {
    setIsShowModalSendTest(data);
  };
  const handleModalInviteInterview = (data) => {
    setIsShowModalInviteInterview(data);
  };
  const handleBtnUndo = () => {
    if (isReject) {
      updateReject();
      console.log(isReject);
    } else {
      if (stepStatus.length > 1) {
        updateDataBack();
      }
    }
  };
  const handleBtnReject = () => {
    updateReject();
  };
  const handleOnclickBtnNextStep = () => {
    if (stepStatus.length == 2) {
      setIsShowModalSendTest(true);
    } else {
      if (stepStatus.length == 4) {
        setIsShowModalInviteInterview(true);
      } else {
        if (stepStatus.length == 6) {
          setIsShowModalInviteInterview(true);
        } else {
          updateDataForward();
        }
      }
    }
  };

  return (
    <div class="relative mx-5">
      <div
        className={` mx-4 relative overflow-x-auto border-[1.5px] rounded-lg min-w-[30%] min-h-[10%]`}
      >
        <table className="w-full  text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900  bg-gray-300 border-b-[1.5px] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3 text-sm font-semibold">
                Manage Applicant Statuses
              </th>
            </tr>
          </thead>
        </table>
        {/* item.idProcess < stepStatus.length */}
        <ol class="items-start lg:flex m-4">
          {renderData.map((item) =>
            true ? (
              <li class="relative mb-10 sm:mb-2">
                <div class="flex items-center">
                  <div
                    class={`relative z-10 flex items-center justify-center w-6 h-6 ${
                      item.idProcess > stepStatus.length - 1
                        ? "bg-blue-50"
                        : " bg-blue-200"
                    } rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}
                  >
                    {item.idProcess == stepStatus.length && isLoadingNext ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="w-6 h-6 absolute left-[-0.9px] top-[1px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    ) : (
                      ""
                    )}

                    {item.idProcess > stepStatus.length - 1
                      ? item.svg1
                      : item.svg}

                    {item.idProcess == stepStatus.length - 1 ? (
                      <div
                        class={`absolute z-[-1] left-0 top-0 w-6 h-6 bg-blue-200 rounded-full ${
                          isReject ? "" : "animate-ping"
                        }`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </div>
                  {item.idProcess > stepStatus.length - 2 ? (
                    item.idProcess == 7 ? (
                      ""
                    ) : (
                      <div class=" sm:flex w-full bg-blue-100 h-0.5 dark:bg-gray-700 "></div>
                    )
                  ) : (
                    <div class={`sm:flex w-full bg-blue-400 h-0.5 dark:bg-gray-700 ${isLoadingBack? "animate-ping":""} `}></div>
                  )}
                </div>
                <div class="mt-3 sm:pr-8">
                  <time class="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                    {item.idProcess > stepStatus.length - 1
                      ? "N/A"
                      : formatDate(stepStatus[item.idProcess].created_at)}
                  </time>
                  <h3
                    class={`text-sm font-semibold ${
                      item.idProcess > stepStatus.length - 1
                        ? "text-gray-300"
                        : "text-gray-900"
                    }  dark:text-white`}
                  >
                    {item.title}
                  </h3>
                  <p
                    class={`text-sm font-normal ${
                      item.idProcess > stepStatus.length - 1
                        ? "text-gray-300"
                        : "text-gray-500"
                    } dark:text-gray-400`}
                  >
                    {item.decr}
                  </p>
                  {isReject ? (
                    ""
                  ) : item.idProcess == 7 ? (
                    ""
                  ) : item.idProcess == stepStatus.length - 1 ? (
                    <button
                      onClick={handleOnclickBtnNextStep}
                      class="bg-blue-50 hover:bg-blue-300 text-gray-900 font-bold text-sm py-1 px-4 rounded-lg mt-3"
                    >
                      {item.button}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            ) : (
              ""
            )
          )}
        </ol>
        <div class="flex justify-end absolute bottom-[1px] right-1">
          <button
            onClick={handleBtnUndo}
            class=" z-[150] flex flex-col items-center bg-blue-50 hover:bg-blue-300  text-gray-900 font-bold text-xs mr-5 rounded-lg mt-3 w-[60px] h-[60px]"
          >
            <svg
              class="h-11 w-11"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L8.41421 8H13.5C16.5376 8 19 10.4624 19 13.5C19 16.5376 16.5376 19 13.5 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 10.4477 17 11 17H13.5C15.433 17 17 15.433 17 13.5C17 11.567 15.433 10 13.5 10H8.41421L10.7071 12.2929C11.0976 12.6834 11.0976 13.3166 10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
            {isReject ? "Unreject" : "Undo"}
          </button>
          <button
            onClick={handleBtnReject}
            class={`${
              isReject ? "hidden" : ""
            } mr-3 mb-3 flex flex-col items-center bg-blue-50 hover:bg-blue-300 text-gray-900 font-bold text-xs  rounded-lg mt-3 w-[60px] h-[60px]`}
          >
            <svg
              class="h-7 w-7 ml-1 mb-2 mt-2"
              viewBox="0 -0.5 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>799</title> <defs> </defs>{" "}
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <path
                    d="M9.016,0.06 C4.616,0.06 1.047,3.629 1.047,8.029 C1.047,12.429 4.615,15.998 9.016,15.998 C13.418,15.998 16.985,12.429 16.985,8.029 C16.985,3.629 13.418,0.06 9.016,0.06 L9.016,0.06 Z M3.049,8.028 C3.049,4.739 5.726,2.062 9.016,2.062 C10.37,2.062 11.616,2.52 12.618,3.283 L4.271,11.631 C3.508,10.629 3.049,9.381 3.049,8.028 L3.049,8.028 Z M9.016,13.994 C7.731,13.994 6.544,13.583 5.569,12.889 L13.878,4.58 C14.571,5.555 14.982,6.743 14.982,8.028 C14.981,11.317 12.306,13.994 9.016,13.994 L9.016,13.994 Z"
                    fill="#434343"
                    class="si-glyph-fill"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
            Reject
          </button>
        </div>
      </div>

      <ModalEmail
        isShowModalSendTest={handleModalSendTest}
        isShow={isShowModalSendTest}
        isNextStep={nextStepSendTest}
        dataMail={data}
      />
      <ModalInviteInterview
        isShowModalInviteInterview={handleModalInviteInterview}
        isShow={showModalInviteInterview}
        isNextStep={nextStepSendTest}
        isJobOffer={stepStatus}
        dataMail={data}
      />
      {isReject ? (
        <div class="absolute  flex flex-col justify-end items-center top-10 left-0 z-[110] bg-[rgba(209,213,219,0.6)]  mx-4 overflow-x-auto border-[1.5px] rounded-b-lg w-[calc(100%-2rem)] h-[calc(100%-2rem)] ">
          <p
            style={{ opacity: 1 }}
            class=" bg-slate-50 p-5 mb-5  text-center text-orange-700 font-bold rounded-lg w-1/3 max-w-[300px] "
          >
            This candidate was rejected !
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default StatusProcess;
