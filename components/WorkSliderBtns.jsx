"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { motion } from "framer-motion";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.0,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className={containerStyles}
    >
      <button className={btnStyles}>
        <PiCaretLeftBold
          className={iconsStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold
          className={iconsStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </motion.div>
  );
};

export default WorkSliderBtns;
