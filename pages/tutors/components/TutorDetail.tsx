"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiAward, FiBook, FiStar } from "react-icons/fi";
import { TutorDetailPageType, TutorType } from "@/shared/types/TutorType";
import { useParams } from "next/navigation";
import { Locale } from "@/shared/layout/LanguageSwitcher";

interface TutorDetailProps {
  t: TutorDetailPageType;
  tutor: TutorType;
}

const TutorDetail = ({ tutor, t }: TutorDetailProps) => {
  const params = useParams();
  const currentLang = (params?.lang ?? "en") as Locale;
  const formatRatingValue = (ratingTemplate: string, rating: number) => {
    return ratingTemplate.replace("{rating}", rating.toString());
  };
  const formatYearsExperience = (yearsTemplate: string, years: number) => {
    return yearsTemplate.replace("{years}", years.toString());
  };
  return (
    <div className="min-h-screen py-16 mt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg"
        >
          {/* Profile Header with Gradient */}
          <div className="relative bg-gray-100 py-12">
            <div className="absolute inset-0 opacity-10 pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4" />

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative mx-auto w-56 h-56 rounded-full border-2 border-white shadow-2xl overflow-hidden"
            >
              <Image
                src={tutor?.image}
                alt={tutor?.name}
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </motion.div>
          </div>

          {/* Profile Content */}
          <div className="p-8 lg:p-12 space-y-8">
            {/* Name and Socials */}
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
              >
                {tutor?.name}
              </motion.h1>

              {/* <div className="flex justify-center space-x-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                  href="#"
                >
                  <FiLinkedin className="text-blue-600 text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
                  href="#"
                >
                  <FiGlobe className="text-purple-600 text-xl" />
                </motion.a>
              </div> */}
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <FiAward className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold">{t?.experience}</h3>
                </div>
                <p className="text-gray-600">
                  {formatYearsExperience(
                    t?.yearsOfExperience ?? "",
                    tutor?.yearsOfExperience ?? 0
                  )}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center  mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <FiBook className="text-purple-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold">{t?.specialization}</h3>
                </div>

                <p className="text-gray-600">{tutor?.position[currentLang]}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <FiStar className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold">{t?.rating}</h3>
                </div>
                <p className="text-gray-600">
                  {formatRatingValue(
                    t?.ratingValue ?? "",
                    Number(tutor?.rating ?? 0)
                  )}
                </p>
              </motion.div>
            </div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-8 mr-3 rounded-full" />
                {t?.experienceAndActivities}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {tutor?.experience[currentLang]}
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {tutor?.experience[currentLang]?.split(".").map(
                (item, i) =>
                  item.trim() && (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="p-4 bg-white rounded-xl shadow-md border border-gray-100 flex items-start"
                    >
                      <div className="mr-4 text-purple-600">
                        <FiStar className="text-xl mt-1" />
                      </div>
                      <p className="text-gray-600">{item.trim()}</p>
                    </motion.div>
                  )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TutorDetail;
