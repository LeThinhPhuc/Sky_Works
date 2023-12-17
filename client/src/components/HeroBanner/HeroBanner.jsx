import React from "react";
import "./HeroBanner.css";

const HeroBanner = (props) => {
  return (
    <div className="hero-banner bg-[url('https://skymavis.com/_app/immutable/assets/ImageBackgroundJobDetailMobile-2dbabf27.png')] md:bg-[url('https://skymavis.com/_app/immutable/assets/axie-concept-f5e52a79.png')] container max-w-full mx-auto text-center flex flex-col align-middle justify-center px-4 md:px-8 gap-4 lg:gap-6">
      <div className="flex gap-2 justify-center">
        {props.tags.map((tag, idx) => {
          return (
            <span
              key={idx}
              className="inline-block whitespace-nowrap rounded-[0.35rem] bg-sky-500 px-[0.8rem] py-[0.5rem] text-center align-baseline text-[0.75em] font-bold leading-none text-white"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <h2 className="text-4xl xl:text-5xl font-black">{props.title}</h2>
      <p className="text-base xl:text-lg font-light">{props.location}</p>
    </div>
  );
};

export default HeroBanner;
