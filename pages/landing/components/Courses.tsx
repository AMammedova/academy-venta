"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/shared/layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import Link from "next/link";
import { Course, CoursesType } from "@/shared/types/CourseType";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CourseService } from "@/services/api";
import { useParams } from "next/navigation";
import { Locale } from "@/shared/layout/LanguageSwitcher";

interface CoursesProps {
  t: CoursesType;
}
const Courses = ({ t }: CoursesProps) => {
  const params = useParams();
  const currentLang = (params?.lang ?? "en") as Locale;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseData = await CourseService.getCourses(currentLang);
        setCourses(courseData);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div id="courses">
      <ScrollAnimationWrapper>
        <motion.div className="mb-16 text-center" variants={scrollAnimation}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t?.title}</h1>
          <p className="text-gray-600 text-lg">{t?.description}</p>
        </motion.div>
      </ScrollAnimationWrapper>
      <div
        id="courses"
        className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 m-auto lg:mt-24"
      >
        {courses?.map((course, index) => (
          <ScrollAnimationWrapper key={index}>
            <motion.div
              className="bg-white shadow-xl rounded-3xl my-6 h-[500px] lg:h-[450px] cursor-pointer flex flex-col justify-between items-center transition-all"
              variants={scrollAnimation}
              whileHover={{
                scale: 1.01,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.001, ease: "easeInOut" }}
            >
              <Image
                width={500}
                height={300}
                src={course?.iconUrl}
                alt={course?.title}
                className="object-contain h-44 pt-2"
              />
              <div className="p-6 flex flex-col justify-between items-center">
                <h2 className="text-center text-gray-800 text-2xl font-bold">
                  {course?.title}
                </h2>
                <div className="w-full">
                  <p className="text-center text-gray-400 pt-3">
                    {course?.description}
                  </p>
                </div>
                <div className="w-full mt-6 p-2 rounded-2xl text-black-600 text-center flex justify-center">
                  <Link
                    href={`/courses/${course?.id}`}
                    className="text-sm font-bold flex items-center justify-center gap-4"
                  >
                    {t?.viewCourse}

                    <ArrowRightIcon width={20} />
                  </Link>
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
