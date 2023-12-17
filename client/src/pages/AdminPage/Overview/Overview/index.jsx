import JobStatistics from "../JobStatistics";
import EmployeesStatus from "../EmployeesStatus";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.05, duration: 0.35 }}
    >
      <JobStatistics />
      <EmployeesStatus itemsPerPage={5} />
    </motion.div>
  );
};
export default Overview;
