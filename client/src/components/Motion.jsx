import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Motion = () => {
    const [ isVisible , setIsVisible ] = useState(false)
  return (
    <div
    style={{
        display:"grid",
        placeContent:"center",
        height:"100vh",
        gap:'0.8rem'
    }}
    >
        <motion.button 
        onClick={()=>{setIsVisible(!isVisible)}}
        layout
        >
            show / hide
        </motion.button>
        <AnimatePresence mode="popLayout">
        {isVisible &&(
            <motion.div
            initial={{
                rotate: "0deg",
                scale: 0,
                y: 0,
            }}
            animate={{
                rotate: "360deg",
                scale: 1,
                y: [0 , 150 , -150, 150, 0],
                x: [0 , 150 , -150 , 0],
            }}
            transition={{
                duration: 5,
                ease: "backInOut",
                times: [1 , 1 , 1 , 1 , 1]
            }}
    exit={{
        rotate: "20deg",
        scale: 0,
        y: 0,
        x: 0,
    }}
    style={{
        height:"150px",
        width:"150px",
        backgroundColor:"blueviolet",
    }}
    >

    </motion.div>
    )}
    </AnimatePresence>
    <motion.button whileHover={{scale: 1.05}}   
    whileTap={{scale: 0.95,
    rotate:"2.5deg",
    }}
    transition={{
        duration: 2,
        ease: "easeInOut"
    }}
    style={{
        height:"50px",
        width:"100px",
        borderRadius:"5px",
        backgroundColor:"blueviolet",
        border:"none",
        fontSize:"18px",
        cursor:"pointer"
    }}
    >
        Click here
    </motion.button>
    </div>
  )
}

export default Motion