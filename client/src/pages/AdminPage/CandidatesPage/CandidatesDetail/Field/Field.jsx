import React from "react";
const Field = (props) => {
    const { text , money} = props
    const {onChangeHandler}=props;
    return (
        <div className="relative grow font-light text-xs md:text-sm pb-5">
            <input
                className={`peer font-medium text-sky border-sky-300 w-full min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-4 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent ${"dark:focus:border-sky-300 focus:border-sky-300"
                    }`}
                placeholder={text}
                value={money}
                onChange={onChangeHandler}
            />
            <label
                className={`pointer-events-none bg-transparent absolute h-auto top-0 left-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.65rem] px-3 leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[1.25rem] 
        opacity-0 peer-focus:opacity-100 peer-focus:scale-[0.9] peer-focus:left-4 peer-focus:bg-white motion-reduce:transition-none dark:text-neutral-300 ${"dark:peer-focus:text-sky-500 peer-focus:text-sky-500"
                    }`}
            >
                {text}
            </label>
        </div>
    )
}
export default Field;