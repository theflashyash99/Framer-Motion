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

        {/* <motion.div
          drag
          whileDrag={{ scale: 0.5 }}
          dragConstraints={{ top: 0, left: 0, right: 1000, bottom: 500 }} // this will let you set limit on the drag.
          dragDirectionLock="true" // this let you go in one direction in one click drah either in X or Y axis.
          className="box"
        ></motion.div> */}

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





        {/* //! Scroll Animation */}

        <div className="p-20 text-white text-center font-mono">

        <h1 className="text-red-500 text-7xl font-bold  mb-8"> Spider-Man Scroll Motion!!!</h1>
        <br></br><br></br><br></br>
        <div className="spiderman text-2xl">
        <p>  Spider-Man, one of the most endearing superheroes ever, is the alter ego of Peter Benjamin Parker. Created by Stan Lee and Steve Ditko, he made his first appearance in Amazing Fantasy #15 (August 1962) 
Wikipedia
Encyclopedia Britannica
. A brilliant but modest teenager from Queens, Peter gains his extraordinary powers after being bitten by a radioactive spider—bestowing upon him superhuman strength, agility, speed, reflexes, and the ability to cling to surfaces as well as a precognitive "spider-sense" that warns him of danger 
Wikipedia
epicroadtrips.us
. </p>
<br>

</br>

<p>In his early misuse of these gifts, Peter seeks fame and fortune, only to face tragedy when a burglar he let escape ends up murdering his Uncle Ben. Consumed by guilt, Peter embraces his uncle’s famous lesson: with great power comes great responsibility, and commits himself to fighting crime as Spider-Man 
Britannica Kids
Wikipedia
. Always dealing with everyday struggles like school, work, and loved ones, including Aunt May and his often-complicated love interests like Gwen Stacy and Mary Jane Watson, his life resonates deeply with many fans 
Britannica Kids
Marvel
.
</p>
<br></br>
<br></br>
<br></br>
<p>Spider-Man’s iconic red-and-blue costume, web-shooters, and witty personality blend heroism and humanity. His ongoing battle between personal hardship and heroic duties continues to captivate and inspire readers across generations. </p>

 <p>  Spider-Man, one of the most endearing superheroes ever, is the alter ego of Peter Benjamin Parker. Created by Stan Lee and Steve Ditko, he made his first appearance in Amazing Fantasy #15 (August 1962) 
Wikipedia
Encyclopedia Britannica
. A brilliant but modest teenager from Queens, Peter gains his extraordinary powers after being bitten by a radioactive spider—bestowing upon him superhuman strength, agility, speed, reflexes, and the ability to cling to surfaces as well as a precognitive "spider-sense" that warns him of danger 
Wikipedia
epicroadtrips.us
. </p>
<br>

</br>

<p>In his early misuse of these gifts, Peter seeks fame and fortune, only to face tragedy when a burglar he let escape ends up murdering his Uncle Ben. Consumed by guilt, Peter embraces his uncle’s famous lesson: with great power comes great responsibility, and commits himself to fighting crime as Spider-Man 
Britannica Kids
Wikipedia
. Always dealing with everyday struggles like school, work, and loved ones, including Aunt May and his often-complicated love interests like Gwen Stacy and Mary Jane Watson, his life resonates deeply with many fans 
Britannica Kids
Marvel
.
</p>
<br></br>
<br></br>
<br></br>
<p>Spider-Man’s iconic red-and-blue costume, web-shooters, and witty personality blend heroism and humanity. His ongoing battle between personal hardship and heroic duties continues to captivate and inspire readers across generations. </p>
</div>

</div>
      </>
    </div>
  );
};

export default App;
