import React from "react";
import MainFooter from "../CareerBody/MainFooter/MainFooter/MainFooter";
import Header from "../CareerBody/Header/Header";
import Content from "../CareerBody/Content/Content";
import { motion } from "framer-motion";

const CareerPage = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col ml-0"      
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0}}
      transition={{ delay: 0.15, duration: 0.5 }}
    >
      <main className="flex-1 w-full">
        <Header />
        <Content />
      </main>
      <MainFooter />
    </motion.div>
  );
};
export default CareerPage;
