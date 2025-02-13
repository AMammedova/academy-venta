'use client';
import React from "react";
import Image from "next/image";
import { CourseType } from "@/shared/types/CourseType";
import { motion } from "framer-motion";
import { CheckIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/outline";
import ButtonPrimary from "@/shared/atoms/ButtonPrimary";
import Link from "next/link";

const CourseDetailPage = ({ course }: { course: CourseType }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {course?.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {course?.detailDescription}
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-6 h-6" />
                  <span className="text-gray-600">
                    {course?.programDuration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-6 h-6 " />
                  <span className="text-gray-600">
                    {course?.participants}+ Tələbə
                  </span>
                </div>
              </div>
              <ButtonPrimary>
                <Link href={"/contact"}>Muraciət et</Link>
              </ButtonPrimary>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-sm"
            >
              <Image
                src={course?.icon}
                alt={course?.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Kimlər üçündür?</h3>
              <ul className="space-y-3">
                {course?.targetAudience?.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Üstünlüklər</h3>
              <ul className="space-y-3">
                {course?.features?.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Kurs Detalları</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Başlama tarixi:</p>
                  <p className="text-gray-600">15 Avqust 2024</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Tədris formatı:</p>
                  <p className="text-gray-600">Online/Offline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tədris Proqramı
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="border-l-2 border-gray-100  relative">
              {course?.curriculum?.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-4 mb-10 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } relative`}
                >
                  {/* Marker */}
                  <span className="w-10 h-10 text-white-500 flex items-center justify-center bg-orange-500  rounded-full shadow-lg font-bold absolute -left-5 top-0">
                    {index + 1}
                  </span>

                  {/* Content Box */}
                  <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-2/3 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold text-black-600 mb-2">
                      {topic.split(":")[0]}
                    </h3>
                    <p className="text-black-500">
                      {topic.split(":")[1] || "Praktiki tətbiqlər və nümunələr"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Təlimə qoşulmağa hazırsınız?
          </h2>
          <p className="text-white mb-8 text-lg">
            Məhdud sayda yerlər üçün indi müraciət edin
          </p>
          <ButtonPrimary>
            <Link href={"/contact"}>Muraciət et</Link>
          </ButtonPrimary>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
