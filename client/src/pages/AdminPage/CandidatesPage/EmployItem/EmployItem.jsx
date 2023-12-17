import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../../../../components/StatusBadge/StatusBadge";
import appService from "../../../../services/appService.js";
import Tooltip from "../../../../components/Tooltip/Tooltip";
const EmployItem = (props) => {
  const navigate = useNavigate();
  const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
  const { employee } = props;
  const { personal, profile, teamLead, _id, salary,timeLine,isReject } =
    employee;
   
  const { resumeLink } = profile;
  const currency = salary?salary?.replace(/\d/g, "")?.trim():"VND";
  const localeSalary = appService?.convertCurrency(Number(salary?salary?.replace(currency, ""):""), currency);
 const statusList=["RECEIVED CV","APPROVED","DO A TEST","DONE A TEST","AWAITING INTERVIEW","INTERVIEW","OFFERING","ONBOARDING","REJECT"]

 const onViewDetail = () => {
    navigate(`/admin/candidates/${_id}/edit`);
  };

  /* const onViewResume = () => {
    console.log({ firstName, resumeLink });
  }; */

  let fullName = personal?.lastName + " " + personal?.firstName;

  return (
    <tr className="border-b-[1px] border-sky-200 dark:bg-gray-200 dark:border-gray-700 hover:bg-sky-50 dark:hover:bg-gray-600">
      <td
        scope="row"
        className="flex items-center px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div
          className={`w-12 h-12 flex justify-center items-center rounded-full text-xl text-white uppercase`}
          style={{
            background: bgColor,
          }}
        >
          {fullName?.split(" ").reduce((acc, cur) => {
            // console.log("cur", cur);
            if (cur == "") return acc;
            else return (acc += cur[0]);
          }, "")}
        </div>
        {/* cho-nay-chua-hieu-tai-sao-sai */}

        <div className="w-3/8 text-xs font-semibold pl-3">
          {personal?.lastName + " " + personal?.firstName}
        </div>
      </td>
      <td className="w-1/8 px-4 py-2 text-xs">
        {personal ? personal.headline : "Non title"}
      </td>
      <td className="w-1/8 px-4 py-2">
        <div className="text-xs ">{teamLead ? teamLead : "None TeamLead"}</div>
      </td>
      <td className="w-1/8 px-6 py-4">
        <div className="text-xs ">{localeSalary}</div>
      </td>
      <td className="text-xs w-1/8 px-2 py-4">
        <StatusBadge 
        status={
          isReject?statusList[8]:statusList[timeLine.length-1]
        }
        />
      </td>
      <td className="flex w-1/8 px-3 py-3 justify-center items-center gap-2">
        <Tooltip message="View Detail">
          <FontAwesomeIcon
            icon={faEye}
            size="md"
            className="cursor-pointer text-sky-400 hover:text-sky-600"
            onClick={() => onViewDetail()}
          />
        </Tooltip>
        <Tooltip message="View Resume">
          <a href={resumeLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faFilePdf}
              size="md"
              className="cursor-pointer text-sky-400 hover:text-sky-600"
              // onClick={() => onViewResume()}
            />
          </a>
        </Tooltip>
      </td>
    </tr>
  );
};
export default EmployItem;