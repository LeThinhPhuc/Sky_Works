import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import EmployService from "../../../../services/employSevice";
import userService from "../../../../services/userService";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CareersContext } from "../../../../Context/CareersContext";
import './EmployeeDetail.css';
const initialValues = {
    role:"",
};
const EmployeeDetail = () => {
    const navigate = useNavigate();
    const param = useParams();
    const { id } = param;
    const { user, setUserData } = useContext(CareersContext);
    const [userForm, setUserForm] = useState(initialValues);
    const userData = user.find((item) => item._id == id);
    const [select1,setSelect1]=useState(userData.role);
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const handleDelete = async (id) => {
        try {
            const deleteResponse = await userService.DeleteById(id);
            console.log("deleteResponse", deleteResponse.data.newData);
            setUserData(deleteResponse.data.newData)
            navigate("/admin/employee")
        } catch (error) {
            console.log(error);
        }
    }
    const handleChangeSelect1 = (e) => {
        setUserForm({
            ...userForm,
            role: e.target.value,
        });
        setSelect1(e.target.value);
      };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (userForm.role == "") {
                userForm.role = userData.role;
                console.log("eL: ", userForm.role);

            }
            const updateResponse = await userService.UpdateById(id, userForm);
            setUserData(updateResponse.data.newData)
            console.log("user sau khi cap nhat role :",updateResponse)
            navigate("/admin/employee")
        } catch (error) {
            console.log(error);
        }
    };
    const get_day_of_time = (d1, d2) => {
        let ms2 = d2.getTime();
        let ms1 = d1.getTime();
        return Math.ceil((ms1 - ms2) / (24*60*60*1000));
    };
    const handleDate=(e)=>{
          let dayFinish = new Date(e);
          let today = new Date();
          return get_day_of_time(today,dayFinish)
        }
        console.log("so ngay la : ",handleDate(userData?.created_at.slice(0,10)))
    let name=userData?.username;
    return (
        <div className="p-2 pl-7 pr-7 items-center" >
            <div className="flex justify-between items-center text-sm border-b pb-3">
                <div className="flex items-center">
                    <FontAwesomeIcon onClick={() => { navigate("/admin/candidates") }} icon={faArrowLeft} className="p-2" />
                    <div style={{ backgroundColor: `#${randomColor}` }} class="w-10 h-10 relative flex justify-center items-center rounded-full bg-green-500 text-xl text-white uppercase">
                        {name?.split(" ").reduce((acc, cur) => { console.log("cur",cur); if(cur=='') return acc; else return acc += cur[0];}, "")}</div>
                    <h3 className="p-2 font-medium">{name}</h3>
                </div>
                <div>
                    <button onClick={() => handleDelete(id)} className="text-[#b91c1c] font-medium bg-[#fff1f2] p-3 rounded-[10px]">
                        <FontAwesomeIcon icon={faTrash} /> {/* Sử dụng icon */}
                        Delete
                    </button>
                </div>
            </div>
            <div className=" text-xs grid grid-cols-3 ">
                <div className=" w-[80%]">
                    <div className=" text-lg font-medium text-gray-400 pb-4 pt-2 ">USER DETAILS</div>
                    <div className="pl-3 text-sm pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">USERNAME</div>
                        <div>{userData?.username}</div>
                    </div>
                    <div className="pl-3 text-sm pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">EMAIL</div>
                        <div>{userData?.email}</div>
                    </div>
                    <div className="relative text-sm  pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1 pl-3">CREATED</div>
                        <div className="pl-3">{handleDate(userData?.created_at.slice(0,10)) +" days"}</div>
                        <div className="reab absolute ">
                            <div className="button-wrapper">
                                <button onClick={onSubmitHandler} className="p-2 pl-10 pr-10 mr-3 rounded-[10px] bg-black text-white text-base font-bold  ">SAVE</button>
                                <button onClick={() => { navigate("/admin/employee") }} className="button-can p-2 pl-7 pr-7 rounded-[10px]  bg-slate-100 text-black text-base font-bold ">CANCEL</button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="text-center">hai</div> */}
                <div className=" w-[80%]">
                    <div className=" text-lg font-medium text-gray-400 pb-4 pt-2 ">ROLE</div>
                    <select
                value={select1}
                onChange={handleChangeSelect1}
                id="role"
                className="bg-gray-50 border font-semibold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
              >
                <option selected value="">
                  Role
                </option>
                <option value="admin">admin</option>
                <option value="content">content</option>
                <option value="employer">employer</option>
              </select>

                </div>
                {/* <div className="text-center">ba</div> */}
                <div className=" w-[80%]">
                    <div className=" text-lg font-medium text-gray-400 pb-4 pt-2 ">ONBOARDING</div>
                    <div className="relative max-w-sm mb-3">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        </div>
                        <label className="absolute pl-10 left-0 text-gray-500 pb-5"> Starts on</label>
                        <input datepicker datepicker-title="Flowbite datepicker" type="date" className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                    </label>

                    <div className="  text-xs font-medium text-gray-400 pb-4 pt-4 ">Onboarding Scripts</div>

                    <div className="flex-container pt-3 pb-3  border-b">

                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Office Tour</span>
                        </label>
                        <div className="text-sm font-medium">100%</div>
                    </div>

                    <div className="flex-container pt-3 pb-3  border-b">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Work Tools</span>
                        </label>
                        <div className="text-sm font-medium">20%</div>  
                    </div>

                    <div className="flex-container pt-3 pb-3  border-b">

                        <label class="relative inline-flex  cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Duties Journal</span>
                        </label>
                        <div className="text-sm font-medium">0%</div>
                    </div>

                    <div className="flex-container pt-3 pb-3  border-b">

                        <label class="relative inline-flex  cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Requests Handling</span>
                        </label>
                        <div className="text-sm font-medium">0%</div>
                    </div>
                    <div className="flex-container pt-3 pb-3  border-b">

                        <label class="relative inline-flex  cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Activity Tracking</span>
                        </label>
                        <div className="text-sm font-medium">0%</div>
                    </div>



                </div>

            </div>
            {/* <div className="pl-[35%] p-2">
                <button onClick={onSubmitHandler} className="rounded-[10px] bg-black text-white text-base font-bold w-[20%] pt-2 pb-2">SAVE</button>
                <button onClick={() => { navigate("/candidates") }} className="w-[20%] rounded-[10px] ml-[5%] bg-slate-100 text-black text-base font-bold pt-2 pb-2">CANCEL</button>
            </div> */}
        </div>
    )
}
export default EmployeeDetail;