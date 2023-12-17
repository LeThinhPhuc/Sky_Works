import React, { useContext } from "react";
import { CareersContext } from "../../Context/CareersContext";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";
import "./JobDetail.css";

function JobDetail() {
  const param = useParams();
  const { jobsData } = useContext(CareersContext);
  console.log(jobsData);
  const joblist2 = jobsData.find((item) => item._id == param.id);
  console.log(joblist2?.content);
  // const htmlString = `<p><strong>About Sky Mavis</strong></p><p>Sky Mavis, the pioneer behind the blockchain game Axie Infinity, is revolutionizing the virtual gaming world with innovative technology and infrastructure. We are committed to fostering a dynamic and inclusive work culture where individuals can bring their authentic selves to the table. As a team of entrepreneurial disruptors and gamers, we are driven by a shared passion for making a meaningful impact and embracing the challenges and critiques that come with being at the forefront of technological advancement.</p><p><br></p><p><strong>About the Role</strong></p><p>Our DevOps Engineers are responsible for maintaining the robustness and reliability of our system to operate and scale to potentially millions of users. This is not a traditional role - more of a fusion between classic DevOps and Site Reliability Engineering. We are operating at the bleeding edge of blockchain technology, so many of your prerogatives may be experiments that have never been conducted before. You'll need to be bright, nimble, and willing to innovate to succeed in this role. Your day to day might include</p><p><br></p><ul><li>Apply cloud (AWS, Azure, GCP) computing skills to deploy releases and upgrades.</li><li>Apply best practices to improve the company's computing architecture (server monitoring, micro-services management).</li><li>Implement automation tools and frameworks (CI/CD pipelines).</li><li>Improve company engineering tools, procedures, and data security</li></ul>`;
  return (
    <motion.div
      id="jobDetail-page"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
    >
      {jobsData ? (
        <main className="flex-1 flex justify-center flex-col w-full items-center relative">
          <header
            className="md:bg-[url('https://skymavis.com/_app/immutable/assets/axie-concept-f5e52a79.png')] 
          max-md:bg-[url('https://skymavis.com/_app/immutable/assets/ImageBackgroundJobDetailMobile-2dbabf27.png')]          
          page-header flex flex-col items-center text-center p-[34px_28px_60px] md:p-[55px_28px_75px] xl:p-[55px_28px_75px] bg-no-repeat bg-cover bg-center transition-all w-full"
          >
            <div className=" 	flex gap-2">
              {joblist2?.tags.map((tag, idx) => {
                return (
                  <p
                  key={idx}
                    className={`${
                      idx === 0
                        ? "bg-sky-500 text-white"
                        : "bg-[#dee6f1] text-sky-500"
                    } text-sm font-[500] pt-1 pb-1 pl-3 pr-3 rounded-md whitespace-nowrap`}
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
            <div className="text-3xl xl:text-4xl xl:leading-normal font-bold mb-5 mt-5 max-w-[75%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[35%]">
              {joblist2?.title}
            </div>
            {joblist2?.location}
          </header>
          <div className="flex flex-col text-left  max-w-[856px] p-5 xl:p-0">
            <div className="text-[#1D273D] detail-job pt-10 xl:pt-[79px] ">
              {parse(joblist2?.content || "")}
            </div>
            {/* Benefits */}
            <div>
              <h1 className="text-2xl font-medium mt-3 mb-2">Benefits</h1>
              <p className="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/2f72f193dbfde42770e682b1ea82d4ba.png"
                />
                Front row seat to one of the most exciting blockchain projects
                that is making a positive impact and changing people’s lives
                globally
              </p>
              <p className="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/61b1a90b1ca05128690e629ca9889286.png"
                />
                A fast-paced, active, and fun working environment where
                everything revolves around games and cute beings
              </p>
              <p className="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/8381de71a1d1047e4ae87b8cdd7e4ee1.png"
                />
                A competitive salary package that fits your skills, experiences,
                and contributions
              </p>
              <p className="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/a2bbb1584fc2524ef396a6690494cbcc.png"
                />
                Freedom, autonomy & ownership around your work
              </p>
              <p className="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/a6b85f947510fb861e25fd40a200cd3b.png"
                />
                Contribute to making revolutionary games
              </p>
              <p className="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/15e95b6a59569fb890090a73ca795bbe.png"
                />
                Acquire new and unique skills as we usher in a new era of
                digital ownership
              </p>
              <p className="flex gap-x-2 mt-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/ed5f9482fe69d32336c62c0c7bb7150c.png"
                />
                Give yourself and your family the security you deserve
              </p>
              <div />
            </div>
          </div>
          <Link to={`/careers/${param.id}/apply`}>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-full mb-[50px] mt-[30px] py-[5px] px-[54px]">
              Apply
            </button>
          </Link>
        </main>
      ) : (
        <Loading />
      )}
    </motion.div>
  );
}

export default JobDetail;
