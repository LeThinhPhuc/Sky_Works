import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ModalInviteInterview = (props) => {
  //   // Khởi tạo state cho các trường form
  const [toEmail, setToEmail] = useState("nguyen.thanhtai@rocketmail.com");
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const [field, setField] = useState(true);

  const {
    isShowModalInviteInterview,
    isShow,
    isNextStep,
    isJobOffer,
    dataMail,
  } = props;
  const {email,lastName
  }  = dataMail?.personal??{}

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      toEmail != "" &&
      fromName != "" &&
      fromEmail != "" &&
      message != "" &&
      lastName != ""
    ) {
      setField(true);
      emailjs
        .send(
          "service_5wgh36p",
          "template_qzjkmv7",
          {
            to_name: lastName,
            to_email: email,
            from_name: fromName,
            message: message,
            from_email: fromEmail,
          },
          "nOpouuUmwx8KVUufV"
        )
        .then(
          (result) => {
            console.log(result.text);
            isNextStep(true);

            setFromName("");
            setFromEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
            setField(false);
          }
        );
      isShowModalInviteInterview(false);
    } else {
      setField(false);
    }
    // Gửi email thông qua EmailJS

    // Reset lại các trường form sau khi gửi email
  };
  const handleClose = () => {
    isShowModalInviteInterview(false);
    setFromName("");
    setFromEmail("");
    setMessage("");
  };
  return (
    <div
      id="small-modal"
      tabindex="-1"
      aria-hidden="true"
      class={` ${
        isShow == true ? "" : "hidden"
      } fixed top-[20%] left-[40%]  z-50  w-[500px] h-full p-4 overflow-x-hidden overflow-y-auto transition `}
    >
      <div class="relative bg-gray-100 rounded-lg border-gray-400 border-2 shadow dark:bg-gray-700">
        <button
          onClick={handleClose}
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            {isJobOffer.length == 6
              ? "Inviting candidate to accept the job"
              : "Send an interview invitation email"}{" "}
          </h3>
          <form class="space-y-4" action="#" novalidate>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                HR's name
              </label>
              <input
                type="text"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                required
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              ></input>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                HR's email
              </label>
              <input
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                required
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              ></input>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                class="h-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              ></textarea>
            </div>

            {field ? (
              ""
            ) : (
              <div className="flex justify-center">
                <p className="mb-2 m- text-sm font-medium text-red-500 dark:text-white">
                  Please fill out all fields{" "}
                </p>
              </div>
            )}

            <div class="flex justify-between">
              <button
                onClick={handleSubmit}
                type="submit"
                class="ml-7 w-2/5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send
              </button>
              <button
                onClick={handleClose}
                class="w-2/5 mr-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalInviteInterview;
