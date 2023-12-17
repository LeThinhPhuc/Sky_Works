import React from "react";

const StatusBadge = (props) => {
  const { status } = props;
  let textColor, bgColor;
  switch (status) {
    case "RECEIVED CV":
      textColor = "text-amber-500";
      bgColor = "bg-amber-100";
      break;      
    case "APPROVED":
      textColor = "text-emerald-500";
      bgColor = "bg-green-100";
      break;
    case "DO A TEST":
      textColor = "text-cyan-600";
      bgColor = "bg-cyan-100";
      break;
    case "DONE A TEST":
      textColor = "text-white";
      bgColor = "bg-cyan-500";
      break;
    case "AWAITING INTERVIEW":
      textColor = "text-teal-500";
      bgColor = "bg-teal-100";
      break;
    case "REJECT":
      textColor = "text-red-500";
      bgColor = "bg-neutral-100";
      break;
    case "INTERVIEW":
      textColor = "text-orange-500";
      bgColor = "bg-orange-100";
      break;
    case "OFFERING":
      textColor = "text-rose-400";
      bgColor = "text-violet-600";
      break;
    case "ONBOARDING":
      textColor = "text-sky-500";
      bgColor = "bg-sky-100";
      break;      
    default:
      break;
  }

  return (
    <>
      {status ? (
        <mark
          className={`px-2 py-1 font-semibold rounded-md ${textColor} ${bgColor}`}
        >
          {status}
        </mark>
      ) : (
        <p className="text-slate-400">please check status</p>
      )}
    </>
  );
};

export default StatusBadge;
