import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { uniquepoints } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SavingsIcon from '@mui/icons-material/Savings';
import DiscountIcon from '@mui/icons-material/Discount';
import LaptopIcon from '@mui/icons-material/Laptop';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';

const PointCard = ({ point }) => {


  return (
    <div className="pr-6 lg:p-5 rounded w-full md:w-auto" style={{ width: "100%" }}>
      <div
        className={`flex flex-col items-center justify-center ${
          point.icon == "margin" ? "lg:pl-10" : point.icon == "save" ? "lg:pl-10": "lg:pl-10"
        }`}
      >
        {/* {point.icon == "margin" ? (
          <LaptopIcon sx={{ fontSize: 68, color: "rgb(30 58 138)" }} />
        ) : point.icon == "save" ? (
          <MobileFriendlyIcon sx={{ fontSize: 68, color: "rgb(30 58 138)" }} />
        ) : (
          <ScreenShareIcon sx={{ fontSize: 68, color: "rgb(30 58 138)" }} />
        )} */}
        {point.icon == "margin" ? (
          <MobileFriendlyIcon sx={{ fontSize: 68, color: "rgb(30 58 138)" }} />
        ) : point.icon == "save" ? (
          <ScreenShareIcon sx={{ fontSize: 68, color: "rgb(30 58 138)" }} />
        ) : (
          <LaptopIcon sx={{ fontSize: 68, color: "rgb(30 58 138)" }} />
        )}
        <h3 className={`text-[black] text-[24px] font-bold `}>
          {point.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {point.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {point.description.map((obj, index) => (
          <p
            key={`experience-point-${index}`}
            className={`${index === 0 ? "font-semibold text-black text-[15px] ":"text-black text-[12px] tracking-wider"} pl-1`}
          >
            {/* {index !==0 && "◉"} */}
            <>
  <span className="font-semibold">{index !==0 && obj.split(': ')[0]}</span>
  {index !==0  && `: ${obj.split(': ')[1]}`}
</>
          {index === 0 && obj}
          </p>
        ))}
      </ul>
      <br></br>
    </div>
  );
};

const UniquePointSect = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>
          What we are providing ?
        </h2>
        <p className={`${styles.sectionSubText} `}>
          Powerbrain offers a UNIQUE DISTRIBUTION MODEL with an Attractive Pricing
        </p>
      </motion.div>

      <div className='mt-8 flex flex-col'>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {uniquepoints.map((point, index) => (
            <PointCard
              key={`experience-${index}`}
              point={point}
            />
          ))}
          </div>
 
      </div>


    </>
  );
};

export default SectionWrapper(UniquePointSect, "Different");
