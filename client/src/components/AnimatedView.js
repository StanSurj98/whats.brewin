import React from 'react'
import { motion } from "framer-motion"


const animations = {
  initial: {opacity: 0, y: 100 },
  animate: {opacity: 1, y: 0 },
  exit: {opacity: 0, y: -100},
  transition: {duration: 0.1},
}

function AnimatedView({ children }) {
  return (
    <motion.div variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedView