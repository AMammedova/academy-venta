"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { courses } from "../constants/courses";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/components/layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";

const Courses = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div id="courses">
      <ScrollAnimationWrapper>
        <motion.div className="mb-16 text-center" variants={scrollAnimation}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kurslarımız</h1>
          <p className="text-gray-600 text-lg">
            Peşəkar bacarıqlarınızı inkişaf etdirin
          </p>
        </motion.div>
      </ScrollAnimationWrapper>
      <div
        id="courses"
        className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 m-auto lg:mt-24"
      >
        {courses.map((course, index) => (
          <ScrollAnimationWrapper key={index}>
            <motion.div
              className="bg-white shadow-xl rounded-3xl mb-8 h-[500px] lg:h-[450px] cursor-pointer flex flex-col justify-between items-center transition-all"
              variants={scrollAnimation}
              whileHover={{
                scale: 1.05, // Hover olunduqda kart 5% böyüyəcək
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Kölgə effekti
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Image
                width={500}
                height={300}
                src={course.icon}
                alt=""
                className="object-contain h-44 pt-2"
              />
              <div className="p-6 flex flex-col justify-between items-center">
                <h2 className="text-center text-gray-800 text-2xl font-bold">
                  {course.title}
                </h2>
                <div className="w-full">
                  <p className="text-center text-gray-400 pt-3">
                    {course.description}
                  </p>
                </div>
                <div className="bg-blue-700 w-full mt-6 p-2 hover:bg-indigo-500 rounded-2xl text-black-600 text-center flex justify-center">
                  <button className="text-sm font-bold flex items-center justify-center gap-4">
                    Learn More
                    <Image
                      src="/icon/right-arrow.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
};

export default Courses;
