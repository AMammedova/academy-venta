"use client";
import React, { useMemo, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../icons/Stars";
import ArrowBack from "../icons/ArrowBack";
import ArrowNext from "../icons/ArrowNext";
import { listTestimonial } from "../../../shared/constants/listTestimonial";
import ScrollAnimationWrapper from "@/components/layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";

const Testimonial = ({}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const settings = {
    dots: true,
    customPaging: function () {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass:
      "slick-dots  mt-20 absolute top-[16.5rem] lg:top-[20rem] right-0 left-0",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderRef = useRef<Slider>(null);

  return (
    <div
      className="w-full bg-gradient-to-b from-white-300 to-white-500 py-8 mt-24"
      id="testimonial"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className=" my-16" id="testimonial">
          <div className="flex flex-col w-full ">
            {" "}
            <ScrollAnimationWrapper>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal  mx-auto"
              >
                Yüzlərlə Məmnun Tələbənin Etibarı
              </motion.h3>
              <motion.p
                variants={scrollAnimation}
                className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
              >
                Bu bölmədə bizim platformadan istifadə edən tələbələrin şərhləri
                və təcrübələri ilə tanış olun.
              </motion.p>
            </ScrollAnimationWrapper>
          </div>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Slider
                {...settings}
                arrows={false}
                ref={sliderRef}
                className="flex items-stretch justify-items-stretch"
              >
                {listTestimonial.map((listTestimonis, index) => (
                  <div className="px-3 flex items-stretch" key={index}>
                    <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
                      <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                        <div className="flex order-2 xl:order-1">
                          <Image
                            src={listTestimonis.image}
                            height={50}
                            width={50}
                            alt="Icon People"
                          />
                          <div className="flex flex-col ml-5 text-left">
                            <p className="text-lg text-black-600 capitalize">
                              {listTestimonis.name}
                            </p>
                            <p className="text-sm text-black-500 capitalize">
                              {listTestimonis.city},{listTestimonis.country}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                          <p className="text-sm">{listTestimonis.rating}</p>
                          <span className="flex ml-4">
                            <Stars />
                          </span>
                        </div>
                      </div>
                      <p className="mt-5 text-left">
                        “{listTestimonis.testimoni}”.
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="flex w-full items-center justify-end">
                <div className="flex flex-none justify-between w-auto mt-14">
                  <div
                    className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                    onClick={() => sliderRef.current?.slickPrev()}
                  >
                    <ArrowBack />
                  </div>
                  <div
                    className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                    onClick={() => sliderRef.current?.slickNext()}
                  >
                    <ArrowNext />
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
