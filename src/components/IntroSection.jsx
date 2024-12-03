import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Button } from "@mui/material";


const ServiceCard = ({ index, title, icon, description }) => (
  <div className='xs:w-[450px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='rounded-[20px] py-5 px-2 lg:px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='image'

          className='w-46 h-46 object-contain'
        />

        <h3 className='text-black text-[20px] m-1 font-bold text-center'>
          {title}
        </h3>
        <p className="text-black text-justify">
          {description}
        </p>
      </div>
    </motion.div>
  </div>
);

const Intro = () => {
  return (
    <>
        <div className="mt-[-120px] mb-[30px] md:mb-[0] md:mt-[-40px] flex flex-col block lg:hidden">
          <p className="text-[24px] text-black font-semibold text-center">
            Digital Brilliance, Crafted for You
          </p>
          <a href="#contact" className="flex items-center justify-center">
            <Button variant="contained" sx={{ my: 2, minWidth:"10rem", background:"#1e3a8a" }}>
              {" "}
              Join Now
            </Button>
          </a>
        </div>
      <div className="mt-[0px] lg:mt-[-70px]">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Who <span className="text-blue-900">we </span> are ?</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-black text-[17px] max-w-3xl leading-[30px] text-justify"
        >
         Digital visionaries breaking boundaries in web development, mobile development, digital marketing, and multimedia solutions. We don't just solve problems—we reimagine potential, transforming digital landscapes with a decade of razor-sharp expertise.
        <br></br>
        <br></br>
        <span className="text-2xl">
        Let's move Together !
          </span>
        </motion.p>

        {/* <br></br>
        <br></br>
        <p style={{ color: "black" }} className={styles.sectionSubText}>
          PROVIDING ON-DEMAND DIESEL DELIVERY FROM REFINERY TO TABLE, USING
          BOWSER TRUCKS & DATMS
        </p>
          <div className="mt-20 flex items-center justify-center flex-wrap gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div> */}
      </div>
    </>
  );
};

export default SectionWrapper(Intro, "about");
