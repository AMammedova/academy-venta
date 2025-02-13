// components/TutorCard.tsx
'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { TutorType } from "@/shared/types/TutorType";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Locale } from "@/shared/layout/LanguageSwitcher";


interface TutorCardProps {
  tutor: TutorType;
}
const TutorCard = ({ tutor }:TutorCardProps) => {

 const params = useParams();
 const currentLang = (params?.lang ?? "en") as Locale;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white-300 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl "
    >
      <Link
        href={`/tutors/${tutor?.id}`}
        className="flex flex-col items-center justify-center p-2"
      >
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src={tutor?.image}
              alt={tutor?.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {tutor?.name}
          </h3>
          <p className="text-gray-600 mb-4">{tutor?.position[currentLang]}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default TutorCard;
