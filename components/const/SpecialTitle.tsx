"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import one from "../../app/img/SpecialTitle/one.png";
import two from "../../app/img/SpecialTitle/two.png";
import three from "../../app/img/SpecialTitle/three.png";
import four from "../../app/img/SpecialTitle/four.png";
import five from "../../app/img/SpecialTitle/five.png";
interface SpecialTitleProps {
  title: string;
  par: string;
  index: number;
  titleClassName?: string;
  parClassName?: string;
  containerClassName?: string;
}

export default function SpecialTitle({
  title,
  par,
  index,
  titleClassName = "",
  parClassName = "",
  containerClassName = "",
}: SpecialTitleProps) {
  const imgs = [one, two, three, four, five];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={`flex flex-col mx-auto px-[15px] justify-center items-center relative ${containerClassName}`}
    >
      <div className="relative gap-4 flex flex-col mx-auto justify-center items-center">
        <h2
          className={`lg:text-[32px] relative text-[18px]  flex gap-2  items-center    text-center  z-10 font-extrabold ${titleClassName}`}
        >
          <span className="relative z-10">{title}</span>
          <Image
            src={imgs[index]}
            className="lg:h-[72px] lg:absolute static  lg:right-0 lg:translate-x-1/2  lg:w-[72px]  h-[40px] w-[40px] object-contain"
            alt="logo_img"
          />
        </h2>
        <p
          className={`lg:text-[16px] text-[12px]  max-w-xl text-[#6B6B6B] text-center ${parClassName}`}
        >
          {par}
        </p>
      </div>
    </motion.div>
  );
}
