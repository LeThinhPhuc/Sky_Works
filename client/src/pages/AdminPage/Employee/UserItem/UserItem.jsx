import React from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";
const UserItem=(props)=>{
  const navigate=useNavigate();
    const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    const {employee} = props
    const { _id  } = employee
    const onclick=()=>{
      // navigate(`/candidates/${_id}/edit`);
      navigate(`/admin/employee/${_id}/edit`)
      
    }
    // let name=(personal?.lastName + " " + personal?.firstName);

        return(
         

          <tr onClick={onclick} className="border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {/* <Link to={`/candidates/${_id}/edit`}> */}

                          <th
                            scope="row"
                            className="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <div className={`w-12 h-12 flex justify-center items-center rounded-full text-xl text-white uppercase`}
                            style={{
                              background: bgColor
                            }}
                            >
                        {employee.username?.split(" ").reduce((acc, cur) => { console.log("cur",cur); if(cur=='') return acc; else return acc += cur[0];}, "")}

                              </div>
                            {/* cho-nay-chua-hieu-tai-sao-sai */}

                            <div className="text-xs font-semibold pl-3">
                              {employee?.username}
                            </div>


                          </th>
                          <td class="px-6 py-4 text-xs">{employee?.email}</td>
                          <td class="px-6 py-4">
                            <div class="text-xs ">{employee?.role?employee?.role:"None"}</div>
                          </td>
                          {/* </Link> */}
            </tr>

        )
}
export default UserItem;