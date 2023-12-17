import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import DetailHeader from "./DetailHeader/DetailHeader";
import Field from "./Field/Field";
import EmployService from "../../../../services/employSevice";
import StatusProcess from "../StatusProcess";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { CareersContext } from "../../../../Context/CareersContext";
import "./style.css";
const initialValues = {
  teamLead: "",
  salary: "",
  status: "",
};
const CandidatesDetail = () => {
  const f = new Intl.NumberFormat("en-us");
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;
  const { employee, setEmploysData } = useContext(CareersContext);
  const [employForm, setEmployForm] = useState(initialValues);
  const employData = employee.find((item) => item._id == id);
  const [select1, setSelect1] = useState(employData?.teamLead);
  const [select2, setSelect2] = useState(
    employData?.salary?.slice(
      employData?.salary.length - 3,
      employData?.salary.length
    )
  );
  const [sal, setSal] = useState(f.format(employData?.salary));
  console.log(employData);

  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const handleDelete = async (id) => {
    try {
      const deleteResponse = await EmployService.DeleteById(id);
      console.log("deleteResponse", deleteResponse.data.newData);
      setEmploysData(deleteResponse.data.newData);
      navigate("/admin/candidates");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSelect1 = (e) => {
    setSelect1(e.target.value);
    setEmployForm({
      ...employForm,
      teamLead: e.target.value,
    });
  };
  const handleChangeSelect2 = (e) => {
    setSelect2(e.target.value);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setEmployForm({
      ...employForm,
      [name]: value,
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (employForm.salary == "") {
        employForm.salary = employData.salary;
        console.log("eSa ", employForm.salary);
      }

      if (employForm.teamLead == "") {
        employForm.teamLead = employData.teamLead;
        console.log("eL: ", employForm.teamLead);
      }
      let newSa;
      if (
        employForm?.salary?.slice(
          employForm?.salary.length - 3,
          employForm.salary.length
        ) == "VND" ||
        employForm?.salary?.slice(
          employForm.salary.length - 3,
          employForm.salary.length
        ) == "EUR" ||
        employForm?.salary?.slice(
          employForm.salary.length - 3,
          employForm.salary.length
        ) == "USD" ||
        employForm?.salary?.slice(
          employForm.salary.length - 3,
          employForm.salary.length
        ) == "GBP"
      ) {
        employForm.salary = employForm?.salary?.slice(
          0,
          employForm?.salary.length - 4
        );
      }
      employForm.salary = employForm.salary + " " + select2;
      const updateResponse = await EmployService.UpdateById(id, employForm);
      setEmploysData(updateResponse.data.newData);

      // console.log("final :", cnt)
      navigate("/admin/candidates");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(
    "avatar",
    (employData?.personal.lastName + " " + employData?.personal.firstName)
      ?.split(" ")
      .reduce((acc, cur) => (acc += cur[0]), "")
  );
  let name =
    employData?.personal?.lastName + " " + employData?.personal?.firstName;

  return (
    <div className=" ">
      {/* <DetailHeader fname={employData?.personal.firstName} lname={employData?.personal.lastName} handleDelete={handleDelete(id)} id={id} /> */}
      <div className=" mb-10">
        <div className="flex justify-between items-center text-sm border-b py-3 mx-10">
          <div className="flex items-center ">
            <FontAwesomeIcon
              onClick={() => {
                navigate("/admin/candidates");
              }}
              icon={faArrowLeft}
              className="p-2 fa-xl"
            />
            <div
              style={{ backgroundColor: `#${randomColor}` }}
              class="w-10 h-10 relative flex justify-center items-center rounded-full bg-green-500 text-xl text-white uppercase"
            >
              {name?.split(" ").reduce((acc, cur) => {
                console.log("cur", cur);
                if (cur == "") return acc;
                else return (acc += cur[0]);
              }, "")}
            </div>
            <h3 className="p-2 font-medium">
              {employData?.personal?.lastName +
                " " +
                employData?.personal?.firstName}
            </h3>
          </div>
          <div>
            <button
              onClick={() => handleDelete(id)}
              className="text-[#b91c1c] font-medium bg-[#fff1f2] p-3 rounded-[10px]"
            >
              <FontAwesomeIcon icon={faBoxArchive} /> {/* Sử dụng icon */}
              Archive
            </button>
          </div>
        </div>

        <div className=" text-xs flex justify-around ">
          <div className=" w-[45%]">
            <div className=" text-base font-medium text-gray-400 pb-4 pt-2 ">
              EMPLOYEE DETAILS
            </div>
            <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-100  rounded-[10px] mb-4 ">
              <div className="text-gray-400 pb-1">FIRST NAME</div>
              <div>{employData?.personal?.firstName}</div>
            </div>
            <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-100  rounded-[10px] mb-4 ">
              <div className="text-gray-400 pb-1">LAST NAME</div>
              <div>{employData?.personal?.lastName}</div>
            </div>
            <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-100  rounded-[10px] mb-4 ">
              <div className="text-gray-400 pb-1">EMAIL</div>
              <div>{employData?.personal?.email}</div>
            </div>
            <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-100  rounded-[10px] mb-4 ">
              <div className="text-gray-400 pb-1">PHONE</div>
              <div>{employData?.personal?.phone}</div>
            </div>
            <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-100  rounded-[10px] mb-4 ">
              <div className="text-gray-400 pb-1">SCHOOL</div>
              <div>
                {employData?.education?.school
                  ? employData?.education?.school
                  : "MINDX"}
              </div>
            </div>
            <div className="relative  pr-3 pt-2 pb-2 bg-slate-100  rounded-[10px] mb-4 ">
              <div className="text-gray-400 pb-1 pl-3">EXPERIENCES</div>
              <div className="pl-3">
                {employData?.experience?.title
                  ? employData?.experience?.title
                  : "1 year"}
              </div>
            </div>
            <div className="flex gap-3 mt-10">
              <button
                onClick={onSubmitHandler}
                className="p-2 pl-10 pr-10 mr-3 rounded-[10px] bg-black text-white text-base font-bold  "
              >
                SAVE
              </button>
              <button
                onClick={() => {
                  navigate("/admin/candidates");
                }}
                className="button-can p-2 pl-7 pr-7 rounded-[10px]  bg-slate-100 text-black text-base font-bold "
              >
                CANCEL
              </button>
            </div>
          </div>

          {/* <div className="text-center">hai</div> */}
          <div className=" w-[45%]">
            <div className=" text-base font-medium text-gray-400 pb-4 pt-2 ">
              DEPARTMENT
            </div>

            <select
              value={select1}
              onChange={handleChangeSelect1}
              id="countries"
              className="bg-white-50 font-medium border-sky-300 w-full mr-[10%] mb-5  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-4 px-3"
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

            <div className="flex text-base font-medium text-gray-400 pb-4 pt-2 ">
              SALARY
            </div>
            <div className="flex">
              <select
                value={select2}
                onChange={handleChangeSelect2}
                className="bg-white-50 mr-1 border-sky-300 border-none text-red-600 mb-5  font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-4 px-3"
              >
                <option>USD</option>
                <option>VND</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
              <div className="relative grow font-light text-xs md:text-sm pb-5">
                <input
                  className={`peer font-medium text-sky border-sky-300 w-full min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-4 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent ${"dark:focus:border-sky-300 focus:border-sky-300"}`}
                  placeholder={"Salary"}
                  // value={employData?.salary}
                  // onChange={onChangeHandler}
                  defaultValue={employData?.salary?.slice(
                    0,
                    employData?.salary.length - 4
                  )}
                  type="text"
                  onChange={onChangeHandler}
                  name="salary"
                />
                <label
                  className={`pointer-events-none bg-transparent absolute h-auto top-0 left-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.65rem] px-3 leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[1.25rem] 
        opacity-0 peer-focus:opacity-100 peer-focus:scale-[0.9] peer-focus:left-4 peer-focus:bg-white motion-reduce:transition-none dark:text-neutral-300 ${"dark:peer-focus:text-sky-500 peer-focus:text-sky-500"}`}
                >
                  Salary
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StatusProcess   id={id}/>
      {/* <div className="pl-[35%] p-2">
                <button onClick={onSubmitHandler} className="rounded-[10px] bg-black text-white text-base font-bold w-[20%] pt-2 pb-2">SAVE</button>
                <button onClick={() => { navigate("/candidates") }} className="w-[20%] rounded-[10px] ml-[5%] bg-slate-100 text-black text-base font-bold pt-2 pb-2">CANCEL</button>

            </div> */}
    </div>
  );
};
export default CandidatesDetail;
