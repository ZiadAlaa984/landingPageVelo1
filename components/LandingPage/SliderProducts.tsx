"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { products } from "@/app/data/data";
import bgRes2 from "../../app/img/SliderProducts/bgRes2.png";
import Bus from "../../app/img/icons/bus.png";
import Cart from "../../app/img/icons/cart-4.png";
import Dic from "../../app/img/Group6.png";
import Stars from "../../app/img/icons/Frame18366(1).png";
import BgRes from "../../app/img/SliderProducts/BgRes.png";
import SpecialTitle from "../const/SpecialTitle";
import { Button } from "../ui/button";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
// Define the Product interface
export default function SliderProducts() {
  const frame1Ref = useRef<HTMLDivElement>(null);
  const frame2Ref = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isFrame1InView = useInView(frame1Ref, { once: true });
  const isFrame2InView = useInView(frame2Ref, { once: true });
  const isSliderInView = useInView(sliderRef, { once: true });

  return (
    <section className="flex h-screen lg:h-full   bg-[#FFFFFF]   gap-14  relative flex-col  mx-auto">
      {/* Frame Animations */}
      <motion.div
        ref={frame1Ref}
        initial={{ x: "-100%", opacity: 0 }}
        animate={isFrame1InView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute  block top-1/2 lg:top-1/3 w-[100px] h-[100px] right-0"
      >
        <Image alt="bgRes2" src={bgRes2} />
      </motion.div>

      <motion.div
        ref={frame2Ref}
        initial={{ opacity: 0 }}
        animate={isFrame2InView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute  block left-0 w-[100px] lg:w-[164px] lg:h-[264px] h-[100px] bottom-0 "
      >
        <Image alt="BgRes" src={BgRes} className="w-full" />
      </motion.div>

      <SpecialTitle
        index={1}
        title="استكشف أفضل المنتجات"
        par="نوفر لك كل ما تحتاجه لتسوق ناجح وآمن. استمتع بتجربة تسوق استثنائية مع خدماتنا المصممة خصيصًا لتلبية احتياجاتك"
      />
      <div>
        <motion.div
          ref={sliderRef}
          initial={{ y: 100, opacity: 0 }}
          animate={isSliderInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-20    lg:w-full  mx-auto"
        >
          <Carousel className=" mx-auto w-[310px] lg:h-[70vh] lg:w-[1100px]">
            <CarouselContent className="-ml-1">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 lg:p-2 p-1 lg:basis-1/4"
                >
                  <div>
                    <Card>
                      <CardContent>
                        <div className="flex shadow-md  rounded-xl overflow-hidden flex-col">
                          <div className="  bg-[#ECECEC] ">
                            <Image
                              src={product.image}
                              alt={product.title}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex p-1  lg:p-3   flex-col relative  gap-2  lg:gap-3">
                            <div className="flex justify-between items-center">
                              <p className="flex justify-center items-center font-bold lg:text-[14px] text-[10px] gap-2">
                                <span>{product.originalPrice}</span>
                                <Image
                                  className="w-6 mb-1 object-contain"
                                  src={Dic}
                                  alt="frame"
                                />
                              </p>
                              <p className="flex gap-2 items-center">
                                <span className="text-[9.6px]">
                                  ({product.reviews})
                                </span>
                                <Image
                                  className="w-[32px] h-[14px] object-contain"
                                  src={Stars}
                                  alt="frame"
                                />
                              </p>
                            </div>
                            <p className="lg:text-sm text-[8.2px] text-right font-[400]">
                              ماكينة القهوة الاحترافية Barista Pro – لتحضير قهوة
                              بجودة المقاهي
                            </p>
                            <p className="lg:text-xs text-[6.83px] text-right text-[#FF691F]">
                              {product.discount}
                            </p>
                            <div className="flex justify-between gap-2 items-center">
                              <Button className="rounded-xl lg:text-[12px] flex text-[6.83px] gap-2 ">
                                <Image
                                  src={Cart}
                                  alt="cart"
                                  className="w-[18px] h-[18px]"
                                />
                                إضافه
                              </Button>
                              <Button
                                variant="ghost"
                                className="rounded-xl lg:text-[10px] text-[6.83px]"
                              >
                                توصيل مجاني{" "}
                                <Image
                                  src={Bus}
                                  alt="bus"
                                  className="w-[16px] h-[16px]"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute  lg:static -bottom-12  left-1/2">
              <CarouselPrevious />
            </div>
            <div className="absolute lg:static   -bottom-12 right-1/2">
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
