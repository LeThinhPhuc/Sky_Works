import React from "react";

const AboutUs = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our team
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Nhóm của chúng mình
          </p>
        </div>
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="text-center text-gray-500 dark:text-gray-400" />
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Lê Thịnh Phúc</a>
          </h3>
          <p>47.01.104.161</p>
        </div>
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
          />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Nguyễn Hoàng Nam</a>
          </h3>
          <p>47.01.104.136</p>
        </div>
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
          />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Võ Khắc Kiệt</a>
          </h3>
          <p>47.01.104.118</p>
        </div>
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="Joseph Avatar"
          />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Joseph Mcfall</a>
          </h3>
          <p>Sales</p>
        </div>
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
            alt="Sofia Avatar"
          />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Lana Byrd</a>
          </h3>
          <p>Web Designer</p>
        </div>
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
            alt="Leslie Avatar"
          />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Leslie Livingston</a>
          </h3>
          <p>Graphic Designer</p>
        </div>
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="Michael Avatar"
          />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Michael Gough</a>
          </h3>
          <p>React Developer</p>
        </div>
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
            alt="Neil Avatar"
          />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Neil Sims</a>
          </h3>
          <p>Vue.js Developer</p>
        </div>
      </div>
    </section>
  );
};
