import React, {useEffect, useState} from "react";
import {Link,NavLink} from "react-router-dom";
import { useParams } from "react-router-dom";

import CareerHeader from "../../../CareerHeader";
import CareerFooter from "../../../CareerFooter";


const CardItemDetails =()=>{
    const param = useParams()
    const jobList = [
        {
            id:1,
            title: "DevOps Engineer",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:2,
            title: "QA Engineer",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:3,
            title: "Senior Game Engineer",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:4,
            title: "Product Designer",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:5,
            title: "Senior Analytics Engineer",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:6,
            title: "Growth Data Analyst (APAC Remote/HCMC, relocation support available)",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:7,
            title: "Social Media Specialist",
            descriptions: "United States , Michigan Center - Full-time",
            position: "Growth"
        },
        {
            id:8,
            title: "Marketing Creative Manager",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Growth"
        }
    ]
    const joblist2 = jobList.find(item => item.id == param.id)
    
    return (
        <Link to={`/item/${param.id}/apply`}>
        <div className="min-h-screen flex flex-col ml-0">
            <CareerHeader/>
            <div>{joblist2.title}</div>
            <a className="bg-[#4C98FF] rounded-[31px] p-[12px_54px] text-white text-center text-base font-semibold hover:bg-light-blue">Apply Now</a>
            <CareerFooter/>
        </div>
        </Link>
    )
}

export default CardItemDetails