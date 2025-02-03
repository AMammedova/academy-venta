import {motion} from "framer-motion";

import { ReactNode } from "react";

export default function ScrollAnimationWrapper({children, className, ...props}: {children: ReactNode, className?: string}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}