import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from "react-router-dom";
import { CareersContext } from "../../Context/CareersContext";
import ApplyForm from "../../components/ApplyForm/ApplyForm";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import { motion } from "framer-motion";

import "./ApplyPage.css";
const ApplyPage = () => {
  const param = useParams();
  const { jobsData } = useContext(CareersContext);
  const joblist2 = jobsData.find((item) => item._id == param.id);
  // console.log(joblist2);
  return (
    <motion.div initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    exit={{ scaleX: 0 }}
    transition={{ delay: 0.15, duration: 0.5 }}>
      {joblist2 ? (
        <div
          className="apply-page box-border mx-auto w-full min-h-full flex flex-row flex-wrap align-middle"          
        >
          <HeroBanner
            key={joblist2.id}
            title={joblist2.title}
            location={joblist2.location}
            tags={joblist2.tags}
          />
          <div className="bg-transparent md:container px-4 md:px-16 mx-auto py-12 sm::max-w-[90%] lg:max-w-[75%]">
            <div className="flex flex-row gap-1 items-center text-[#57627B] focus:text-gray-400 hover:text-sky-500">
              <FontAwesomeIcon icon={faAnglesLeft} size="xs" beat />
              <Link
                to={`/careers/${param.id}`}
                className="uppercase text-left font-extrabold text-xs transition duration-150"
              >
                Back to Job Description
              </Link>
            </div>
            <ApplyForm param={param} jobTitle={joblist2?.title} team={joblist2?.tags[0]} />
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </motion.div>
  );
};

export default ApplyPage;
