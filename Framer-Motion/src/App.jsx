import {motion} from "motion/react";

const App = () => {
  return (
    <div>
    <motion.div animate={{x:1000,rotate:360}} transition={{duration:3 , delay:1}} className='box'>

    </motion.div>
    </div>
  )
}

export default App

