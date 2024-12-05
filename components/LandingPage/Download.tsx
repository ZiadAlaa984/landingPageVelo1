"use client";
import download from "../../app/img/dowload/download.png";
import icon1 from "../../app/img/dowload/icon1.png";
import icon2 from "../../app/img/dowload/icon2.png";
import icon3 from "../../app/img/dowload/icon3.png";
import icon4 from "../../app/img/dowload/icon4.png";
import down from "../../app/img/SpecialTitle/download.png";
import Image from "next/image";
import arrow_left from "../../app/img/icons/arrow-left.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";

export default function Download() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-[#434343] overflow-hidden  px-[15px] min-h-screen relative  grid grid-cols-2  text-center">
      <Image alt="icon2" src={icon2} className="absolute top-0 left-0    " />
      <Image
        alt="icon1"
        src={icon1}
        className="absolute w-[60px] lg:w-[200px] lg:h-[250px] lg:bottom-1/2  lg:translate-y-1/2 right-0   h-[60px] bottom-0 -translate-y-12    "
      />
      <Image
        alt="icon3"
        src={icon3}
        className="lg:absolute hidden lg:block   bottom-0 right-0    "
      />
      <Image
        alt="icon4"
        src={icon4}
        className="absolute lg:hidden w-[109.4px] object-contain translate-x-1/4 h-[109.4px]  bottom-0 right-0    "
      />
      <motion.div
        ref={ref}
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex relative col-span-2 order-1 max-w-[1200px]  lg:col-span-1 z-10 gap-4  lg:gap-8 flex-col justify-center items-center "
      >
        <div className="relative  lg:gap-8 gap-4 flex flex-col pt-6 mx-auto justify-center items-center">
          <h2
            className={`relative z-10 font-bold flex  gap-2 items-center text-white lg:text-[32px] text-[20px]`}
          >
            <span className="relative z-10 text-nowrap">
              قم بتحميل التطبيق الخاص بنا
            </span>
            <Image
              src={down}
              className="lg:h-[72px] lg:absolute static lg:right-0 lg:translate-x-1/2  lg:w-[72px]  h-[40px] w-[40px] object-contain"
              alt="down_img"
            />
          </h2>
          <p className="lg:text-[16px] text-[12px] opacity-75  font-extralight text-white max-w-sm text-center ">
            حمّل تطبيقنا مجاناً الآن لتجربة تسوق مبتكرة وسهلة أينما كنت. استمتع
            بالعروض الحصرية والتنبيهات الفورية مباشرة على هاتفك.
          </p>
        </div>

        <div className="flex   gap-2 lg:gap-6 mt-8 ">
          <Button className="flex font-bold lg:text-base  text-[10px] items-center gap-2 p-3 lg:p-6  rounded-lg">
            <Image
              src={arrow_left}
              className="lg:h-[24px] lg:w-[24px]  h-[18px] w-[18px] object-contain"
              alt="arrow_left"
            />
            تحميل الان من بلاي ستور
          </Button>
          <Button className="flex font-bold  lg:text-base  text-[10px]  items-center  lg:p-6 p-3 gap-2    rounded-lg">
            <Image
              src={arrow_left}
              className="lg:h-[24px] lg:w-[24px]  h-[18px] w-[18px]  object-contain"
              alt="arrow_left"
            />
            تحميل الان من جوجل بلاي
          </Button>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex relative col-span-2 order-2  lg:col-span-1 z-10  justify-center items-center"
      >
        <Image
          src={download}
          alt=" تطبيق تحميل"
          className="w-full lg:w-[640px] lg:h-[467.71px] object-contain "
        />
      </motion.div>
    </div>
  );
}
