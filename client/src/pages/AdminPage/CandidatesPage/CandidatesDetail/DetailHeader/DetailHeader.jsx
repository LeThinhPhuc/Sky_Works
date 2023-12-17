import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
const DetailHeader = (props)=>{
    const {fname, lname,handleDelete, id}=props

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return(
        <div className="flex justify-between items-center text-sm border-b pb-3">
            <div className="flex items-center">
            <FontAwesomeIcon icon={faArrowLeft} className="p-2" />
                <div style={{backgroundColor:`#${randomColor}`}} class="w-10 h-10 relative flex justify-center items-center rounded-full bg-green-500 text-xl text-white uppercase">{(lname+" "+fname).split(" ").reduce((acc, cur) => acc += cur[0], "")}</div>
                <h3 className="p-2 font-medium">{lname+" "+fname}</h3>
            </div>
            <div>
                <button onClick={()=>handleDelete(id)} className="text-[#b91c1c] font-medium bg-[#fff1f2] p-3 rounded-[10px]">
                    <FontAwesomeIcon icon={faTrash} /> {/* Sử dụng icon */}
                    Delete
                </button>
            </div>
        </div>
    )
}
export default DetailHeader;
