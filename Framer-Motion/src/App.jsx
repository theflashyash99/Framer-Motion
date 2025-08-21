import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 1000, rotate: 360, scale: 2 }}
        transition={{ duration: 3, delay: 1, repeat:2 , ease:"anticipate"}}  
        className="box"
      ></motion.div>
    </div>
  );
};

export default App;
