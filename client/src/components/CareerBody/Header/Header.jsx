import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="w-full page-header flex flex-col items-center p-[67px_35px] sm:p-[67px_150px] md:p-[67px_150px] xl:p-[80px_428px_100px] 3xl:p-[185px_550px_150px] bg-no-repeat bg-cover sm:bg-contain bg-center transition-all svelte-1jp7mce"
            //   style={{backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpeg)`}}>
                style={{backgroundImage: `url(/bg3.png)`}}>

        <div className="mb-[12px] md:mb-[16px]  font-bold text-[32px] md:text-[36px] leading-[40px] md:leading-[54px] text-center transition-all px-12 sm:px-0 svelte-1jp7mce">Careers at Sky Works</div>
        <div className="text-[20px] md:text-[24px] leading-[28px] md:leading-[36px] text-center transition-all svelte-1jp7mce">We're looking for adventurers, thinkers, &amp; builders to help usher in a paradigm shift in how games treat their users</div>
      </header>
    </div>
  );
}

export default Header;
