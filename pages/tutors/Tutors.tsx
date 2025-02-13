'use client';
import { tutorsData } from "@/shared/constants/tutors";
import { motion } from "framer-motion";
import TutorCard from "./components/TutorCard";
import { TutorsPageType } from "@/shared/types/TutorType";

export interface TutorsPageProps {
  t: TutorsPageType;
}
const TutorsPage = ({ t }: TutorsPageProps) => {
  return (
    <div className="min-h-screen py-16 mt-24">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          {t?.title}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorsData.map((tutor, index) => (
            <motion.div
              key={tutor?.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <TutorCard tutor={tutor} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorsPage;
