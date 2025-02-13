"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import getScrollAnimation from "@/utils/getScrollAnimation";
import { faqItems } from "../constants/faq";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import { FaqPageType } from "../types/FAQItem";
import { Locale } from "../layout/LanguageSwitcher";
import { useParams } from "next/navigation";

interface FaqProps {
  t: FaqPageType;
}
const FAQ = ({ t }: FaqProps) => {
  const params = useParams();
  const currentLang = (params?.lang ?? "en") as Locale;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <ScrollAnimationWrapper>
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          variants={scrollAnimation}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  width={500}
                  height={500}
                  src="/images/faq.svg"
                  alt="FAQ illustration"
                />
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-black-600 text-center lg:text-left mb-4">
                  {t?.title}
                </h2>
                <p className="text-lg text-black-500 text-center lg:text-left">
                  {t?.description}
                </p>
              </motion.div>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl bg-white shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-black-600 text-left">
                        {item?.question[currentLang]}
                      </h3>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          className="w-6 h-6 text-black-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 text-black-500">
                            {item?.answer[currentLang]}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default FAQ;
