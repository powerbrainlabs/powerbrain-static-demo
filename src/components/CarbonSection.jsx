import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { earth } from "../assets";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import RocketLaunchIcon  from "@mui/icons-material/RocketLaunch";



const CarbonSection = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>
          Powerbrain is <span style={{ color: "#1e3a8a" }}>Redifining</span> Innovation
        
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Our team of experienced IT professionals is dedicated to delivering exceptional 
          results and exceeding client expectations
        </motion.p>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row gap-7">
        {/* <img width="350" height="350" src={earth}></img>
         */}

          <RocketLaunchIcon sx={{ fontSize: 188,mt:10, color: "rgb(30 58 138)" }} />
        <div
          ref={ref}
          style={{ lineHeight: "3.7rem" }}
          className="text-black font-bold w-full flex-column items-center jusitfy-center p-5 lg:px-20"
        >
          <p className="text-[35px] mb-4">Our Impact</p>
          <h2 className="text-[25px]">
            {inView && (
              <CountUp
                style={{ color: "brown", fontSize: "80px" }}
                start={0}
                end={10}
                duration={3}
              />
            )}
            <span className={styles.sectionSubText}>+ Years of Technological Expertise</span>
          </h2>
          <h2 className="text-[25px]">
            {inView && (
              <CountUp
                style={{ color: "darkcyan", fontSize: "80px" }}
                start={0}
                end={200}
                
              />
            )}{" "}
            <span className={styles.sectionSubText}>% Avg Client Efficiency Improvement</span>
          </h2>
          <h2 className="text-[25px] ">
            {inView && (
              <CountUp
                style={{ color: "peru", fontSize: "80px" }}
                start={0}
                end={99.8}
                decimal="."
                decimals={1}
                duration={1.5}
              />
            )}{" "}
            <span className={styles.sectionSubText}>Project Success Rate</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(CarbonSection, "carbon");
