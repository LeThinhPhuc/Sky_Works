import react from "react";
const CardItem = (props) => {
  return (
    <div
      className="dark:bg-slate-800 dark:text-white dark:border-white  w-full flex flex-row justify-between items-center"
      key={props.id}
    >
      <div className="dark:bg-slate-800 dark:text-white dark:border-white  w-4/5">
        <div className="dark:bg-slate-800 dark:text-white dark:border-white  text-lg leading-5 md:leading-6 md:text-xl font-semibold mb-2">
          {props.title}
        </div>
        <div className="dark:bg-slate-800 dark:text-white dark:border-white  text-sm text-gray-500">
          {props.location}
        </div>
      </div>
      <div>
        <div className="dark:bg-slate-800 dark:text-white dark:border-white  flex gap-2">
          {props.tags.map((tag, idx) => {
            return (
              <button
                key={idx}
                className={`${
                  idx === 0
                    ? "bg-sky-500 text-white"
                    : "bg-[#dee6f1] text-sky-500"
                } text-sm font-[500]  pt-1 pb-1 pl-3 pr-3 rounded-md whitespace-nowrap`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CardItem;
