import { motion } from "framer-motion"

// varians
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

// calculate the reverse index for staggred delay 
const reverseIndex = (index: any) => {
    const totalSteps = 6; // total number of steps
    return totalSteps - index - 1;
}


const Stairs = () => {
    return <>
        {/* render 6 motion div, each representing a step of stairs.
        each div will have the same animation define by other stairanimation object.
        the delay for each div  is calculated sinamically based on it's reversed index,
        creating a staggered effect with decreasing delay for each subsequent step.        
        */}
        {[...Array(6)].map((_, index) => {
            return (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-white relative"
                />
            );
        })}
    </>
}

export default Stairs