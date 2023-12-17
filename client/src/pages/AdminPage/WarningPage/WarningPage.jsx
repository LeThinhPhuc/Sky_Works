import React from "react";
import {Link} from "react-router-dom"

const WarningPage = ()=>{
    return(
        <div className="w-full flex flex-col items-center text-center max-h-fit">
            <img src="/Do-not-enter-sign.svg" alt="UNAUTHORIZED" className=" w-[50%] max-h-fit m-3"/>
            <div>You are not authorized to access this page!</div>
            <Link to="/admin"><button className="m-3 bg-blue-600 rounded-full text-white text-xs w-auto h-10 hover:bg-opacity-80 focus:translate-y-1 p-2 px-5">Back to Homepage</button></Link>
        </div>
    )
}
export default WarningPage;