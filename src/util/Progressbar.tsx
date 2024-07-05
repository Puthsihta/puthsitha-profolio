import { motion, useAnimation, Variants } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const ProgressBar = ({ progressPercentage, skill }: any) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("onscreen");
    }
    if (!inView) {
      controls.start("offscreen");
    }
  }, [controls, inView]);

  const variants: Variants = {
    offscreen: {
      width: 0,
    },
    onscreen: {
      width: `${progressPercentage}%`,
      transition: {
        duration: 3,
        type: "just",
      },
    },
  };

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <p ref={ref} className="text-slate-600">
          {skill}
        </p>
        {inView && (
          <div className="flex gap-1">
            <CountUp
              duration={5}
              start={0}
              end={progressPercentage}
              className="text-slate-600">
              {progressPercentage}
            </CountUp>
            <span>%</span>
          </div>
        )}
      </div>
      <div className="relative h-2 rounded-md w-full bg-gray-300 overflow-hidden">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={variants}
          animate={controls}
          style={{ width: `${progressPercentage}%` }}
          className={`h-full rounded-l-md ${"bg-green-600"}`}></motion.div>
      </div>
    </div>
  );
};
