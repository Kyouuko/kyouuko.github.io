import { motion, useScroll } from "framer-motion";

function Scroller() {
    const { scrollYProgress } = useScroll()
    return <motion.div style={{
        scaleX: scrollYProgress,
    }}
        className="h-1 w-screen bg-cyan-200 fixed z-10 top-0">

    </motion.div>
}
export default Scroller;