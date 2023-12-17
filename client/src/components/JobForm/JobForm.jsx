import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuillEditor from "../../components/QuillEditor/QuillEditor";
import { jobTags, workingTypes } from "../../constants";
import { MultiSelect } from "react-multi-select-component";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import { CareersContext } from "../../Context/CareersContext";
import { dataService } from "../../services/dataService";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import "./JobForm.css";

const JobForm = (props) => {
  const navigate = useNavigate();

  const { onUpdateJobs } = useContext(CareersContext);
  const { jobDetail, jobId } = props && props;
  const tag1 = jobDetail
    ? jobTags.filter((item) => item.value == jobDetail.tags[0])
    : [];
  const tag2 = jobDetail
    ? workingTypes.filter((item) => item.value == jobDetail.tags[1])
    : [];

  // states
  const [jobTitle, setJobTittle] = useState(jobDetail ? jobDetail.title : "");
  const [available, setAvailable] = useState(
    jobDetail ? jobDetail.available : true
  );
  const [workingTime, setWorkingTime] = useState(
    jobDetail ? jobDetail.type : "Full-time"
  );
  const [location, setLocation] = useState(jobDetail ? jobDetail.location : "");
  const [jobContent, setJobContent] = useState(
    jobDetail ? jobDetail.content : ""
  );
  const [jobTag, setJobTag] = useState(tag1);
  const [workingType, setWorkingType] = useState(tag2);
  const [uploadErr, setUploadError] = useState(false);

  const showAlert = (mess) => {
    Swal.fire({
      icon: "success",
      title: "Successful",
      text: mess,
      allowOutsideClick: true,
      allowEscapeKey: true,
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const onContentChange = (value) => {
    setJobContent(value);
  };

  const onJobTittleChange = (e) => {
    const { value } = e.target;
    setJobTittle(value);
  };

  const onLocationChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  const onRadioChange = (e) => {
    setWorkingTime(e.target.value);
  };

  const resetForm = () => {
    setJobTittle("");
    setJobContent("<p>&nbsp;</p>");
    setWorkingTime("Full-time");
    setJobTag([]);
    setWorkingType([]);
    setLocation("");
  };

  const handleSubmitJob = async (e) => {
    e.preventDefault();
    const newJob = {
      title: jobTitle,
      location,
      type: workingTime,
      tags: [jobTag[0].value, workingType[0].value],
      available,
      content: jobContent,
    };

    try {
      if (jobId) {
        await dataService.updateJob(jobId, newJob);
        onUpdateJobs(newJob);
        setTimeout(() => {
          navigate("/admin/jobs");
        }, 2000);
      } else {
        await dataService.postJob(newJob);
        onUpdateJobs(newJob);
      }
    } catch (err) {
      console.log(err);
      setUploadError(true);
    }
    if (!uploadErr) {
      if (!jobId) {
        resetForm();
        showAlert("New job created successfully!");
      } else showAlert("Job updated successfully!");
    }
  };

  return (
    <motion.div
      id="#editor-container"
      className="h-full w-full mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.05, duration: 0.35 }}
    >
      <div className="job-form w-full h-full mx-auto">
        <form
          className="w-full flex flex-col gap-6 h-full bg-white px-4 md:px-6 py-4 mx-auto"
          onSubmit={handleSubmitJob}
        >
          <div className="w-full flex flex-row flex-wrap">
            <div className="w-full flex flex-col grow-0 sm:grow gap-2">
              <h4 className="text-sm font-medium">Job Title</h4>
              <div className="flex grow font-light text-xs md:text-sm">
                <input
                  type="tittle"
                  text={jobTitle}
                  id="tittle"
                  name="tittle"
                  required="true"
                  autoComplete="off"
                  className={`peer w-[90%] md:w-[80%] lg:w-[50%] min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-3 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent dark:focus:border-rose-500 focus:border-rose-500"}`}
                  value={jobTitle || ""}
                  placeholder="Senior Developer"
                  onChange={onJobTittleChange}
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row flex-wrap gap-6 md:gap-12 items-start">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-medium">Job Available</h4>
              <div className="flex flex-row font-light text-xs md:text-sm">
                <SwitchButton
                  isAvailable={available}
                  handleSwitch={() => setAvailable(!available)}
                  switchValue={["Yes", "No"]}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-medium">Working Time</h4>
              <div className="flex flex-row font-light text-xs md:text-sm gap-5">
                <div>
                  <input
                    className="outline-none focus:outline-none bg-gray-300 hover:bg-gray-300 cursor-pointer ring-transparent checked:ring-transparent transition-all duration-200 checked:bg-[#00bbff] checked:hover:checked:bg-[#00bbff]"
                    type="radio"
                    value="Full-time"
                    checked={workingTime === "Full-time"}
                    onChange={onRadioChange}
                  />
                  <span className="pl-2">Full-Time</span>
                </div>
                <div>
                  <input
                    className="outline-none focus:outline-none bg-gray-300hover:bg-gray-300 cursor-pointer ring-transparent checked:ring-transparent transition-all duration-200 checked:bg-[#00bbff] checked:hover:checked:bg-[#00bbff]"
                    type="radio"
                    value="Part-time"
                    checked={workingTime === "Part-time"}
                    onChange={onRadioChange}
                  />
                  <span className="pl-2">Part-Time</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col gap-2 grow">
            <h4 className="text-sm font-medium">Job Detail</h4>
            <QuillEditor
              value={jobContent}
              placeholder={"Write description and requirement of jobs..."}
              onEditorChange={onContentChange}
            />
          </div>

          <div className="w-full flex flex-row flex-wrap lg:flex-nowrap gap-6 lg:gap-10">
            <div className="w-full md:w-[48%] flex flex-col gap-2 text-xs md:text-sm">
              <h4 className="text-sm font-medium">Job title tag</h4>
              <MultiSelect
                options={jobTags}
                value={jobTag}
                onChange={setJobTag}
                labelledBy="Select"
              />
            </div>
            <div className="w-full md:w-[48%] flex flex-col gap-2 text-xs md:text-sm">
              <h4 className="text-sm font-medium">Working type tag</h4>
              <MultiSelect
                options={workingTypes}
                value={workingType}
                onChange={setWorkingType}
                labelledBy="Select"
              />
            </div>
            <div className="w-full md:w-[48%] flex flex-col gap-2 text-xs md:text-sm">
              <h4 className="text-sm font-medium">Job Location</h4>
              <div className="relative grow font-light text-xs md:text-sm">
                <input
                  type="location"
                  text={location}
                  id="location"
                  name="location"
                  required="true"
                  autoComplete="off"
                  className={`peer w-full min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-3 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent dark:focus:border-rose-500 focus:border-rose-500"}`}
                  value={location || ""}
                  placeholder="TP Ho Chi Minh"
                  onChange={onLocationChange}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row mx-auto gap-4 justify-center">
            <button
              type="button"
              className="min-w-fit w-fit text-[#0fafda] border-[#0fafda] border-2 focus:ring-0 focus:outline-none focus:ring-transparent dark:focus:ring-transparent hover:border-rose-500 hover:text-rose-500 font-medium rounded-3xl text-base px-5 py-3 text-center transition-all duration-300"
              onClick={() => navigate("/admin/jobs")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="min-w-fit w-fit text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-transparent dark:focus:ring-transparent font-medium rounded-3xl text-base px-5 py-3 text-center"
            >
              {jobId ? "Update job" : "Save job"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default JobForm;
