import { motion } from "motion/react";
import oggy from "./assets/pngwing.com.png";

const App = () => {
  return (
    <div>
      <>
        {/* //! basic Structure */}
        {/* <motion.div
        initial={{ x: 300 }}
        animate={{ x: 1000, rotate: 360, scale: 2 }}
        transition={{ duration: 3, delay: 1, repeat:2 , ease:"anticipate"}}  
        className="box"
      >Shivam Gulati</motion.div> */}

        {/* //!Keyframes */}
        {/* <motion.div
        animate={{ x: [0,500,500,0,0], y:[0,0,300,300,0] , rotate:[0,360,0,360,0]  }}
        transition={{ duration: 3, delay: 1, repeat:Infinity , ease:"anticipate"}}  
        className="box"
      >Shivam Gulati</motion.div> */}

        {/* //! whileHover
       <motion.div 
       whileHover={{background:"green", scale:2.3 , rotate:360}}
       transition={{duration:5 , repeat:Infinity}}
        className="box"
      ></motion.div> */}

        {/* //!whileHover AND tap 
       //! whileHover */}
        {/* <motion.div
          whileHover={{ background: "green" }}
          whileTap={{ scale: 2.5 }}
          className="box"
        ></motion.div> */}

        {/* //!Drag on framer-Motion */}

        <motion.div
         drag
          className="box"
        ></motion.div> 

        {/* //! On Image */}
        {/* <motion.img
          initial={{
            x:100,
            y:100
          }}
          animate={{ x: 500 , y:200 , rotate:360 , scale:2}}
          transition={{ duration: 5, repeat: Infinity, ease: "anticipate" }}
          src={oggy}
        />
        
        {/* //! Image with Paragraph */}
        {/* <motion.p className="oggy" animate={{x:1000}} transition={{duration:5, repeat:Infinity , ease:"anticipate"}}>"Main hu Oggy!!! BHeem ke diwane"</motion.p> */}
        {/* <motion.p
          className="oggy"
          animate={{ x: 1000 }}
          transition={{ duration: 5, repeat: Infinity, ease: "anticipate" }}
        >
          "Shivam CHinar"
        </motion.p> */}
      </>
    </div>
  );
};

export default App;
