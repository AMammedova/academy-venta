"use client";

import {
  ClipboardDocumentIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { ContactType } from "../types/ContactType";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { ContactService, CourseService } from "@/services/api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Locale } from "../layout/LanguageSwitcher";
import { Course } from "../types/CourseType";

interface ContactProps {
  t: ContactType;
}

const Contact = ({ t }: ContactProps) => {
  const params = useParams();
  const currentLang = (params?.lang ?? "en") as Locale;
  const [activeButton, setActiveButton] = useState(0);
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
  const buttons = [
    t.form?.options.hrManagement,
    t.form?.options.digitalMarketing,
    t.form?.options.frontendDevelopment,
    t.form?.options.backendDevelopment,
    t.form?.options.turism,
  ];

  const initialValues = {
    courseId: 0,
    name: "",
    email: "",
    phoneNumber: "",
    avantage: 0,
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t.form?.errors.nameRequired),
    email: Yup.string()
      .email(t.form?.errors.emailInvalid)
      .required(t.form?.errors.emailRequired),
    phoneNumber: Yup.string()
      .matches(/^\d{7,15}$/, t.form?.errors.phoneInvalid)
      .required(t.form?.errors.phoneRequired),
    message: Yup.string()
      .min(10, t.form?.errors.messageMinLength)
      .required(t.form?.errors.messageRequired),
  });

  const handleSubmit = async (
    values: typeof initialValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      await ContactService.submitContactForm({
        ...values,
        avantage: values.avantage || 1,
      });
      toast.success(t.form?.successMessage);
      resetForm();
    } catch (error) {
      console.log(error);
      toast.error(t.form?.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const formatWhatsAppNumber = (phone: string) => {
    const cleanNumber = phone.replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}`;
  };

  const handleEmailClick = (email: string) => {
    console.log(email, "email");
    window.location.href = `mailto:${email}`;
  };

  const openGoogleMaps = () => {
    // Replace these coordinates with your actual location coordinates
    const latitude = 40.3789; // Example coordinates - replace with your actual coordinates
    const longitude = 49.8472; // Example coordinates - replace with your actual coordinates
    const address = encodeURIComponent("Venta Company");
    console.log;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${address}`,
      "_blank"
    );
  };

  const copyToClipboard = async (
    text: string,
    type: "email" | "phone" | "address"
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(
        `${
          type === "email"
            ? "Email"
            : type === "phone"
            ? "Phone number"
            : "Address"
        } copied!`
      );
    } catch (err) {
      toast.error("Failed to copy text");
    }
  };
  return (
    <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto rounded-lg font-roboto">
      <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4">
        <div>
          <h1 className="text-4xl font-bold text-black-500">{t.title}</h1>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            {t.description}
          </p>

          <ul className="mt-12 space-y-8">
            <li className="flex items-center group">
              <EnvelopeIcon className="w-6 h-6" />
              <span
                onClick={() => handleEmailClick("info@venta.az")}
                className="text-black-500 text-sm ml-4 hover:text-orange-500 transition-colors flex-grow cursor-pointer"
              >
                info@venta.az
              </span>
              <button
                onClick={() => copyToClipboard("info@venta.az", "email")}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                title="Copy email"
              >
                <ClipboardDocumentIcon className="w-5 h-5 text-gray-500 hover:text-orange-500" />
              </button>
            </li>
            <li className="flex items-center group">
              <PhoneIcon className="w-6 h-6" />
              <a
                href={formatWhatsAppNumber("+994516388838")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-500 text-sm ml-4 hover:text-orange-500 transition-colors flex-grow"
              >
                +994516388838
              </a>
              <button
                onClick={() => copyToClipboard("+994516388838", "phone")}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                title="Copy phone number"
              >
                <ClipboardDocumentIcon className="w-5 h-5 text-gray-500 hover:text-orange-500" />
              </button>
            </li>
            <li className="flex items-center group">
              <MapPinIcon
                className="w-6 h-6 cursor-pointer group-hover:text-orange-500"
                onClick={openGoogleMaps}
              />
              <span
                className="text-black-500 text-sm ml-4 cursor-pointer group-hover:text-orange-500 flex-grow"
                onClick={openGoogleMaps}
              >
                {t.address}
              </span>
              <button
                onClick={() => copyToClipboard(t.address || "", "address")}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                title="Copy address"
              >
                <ClipboardDocumentIcon className="w-5 h-5 text-gray-500 hover:text-orange-500" />
              </button>
            </li>
          </ul>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="bg-[#F8F8F8] p-6 rounded-lg space-y-4">
              <p className="text-sm font-semibold text-gray-800">
                {t.form?.interested}
              </p>

              <div className="space-y-2 max-lg:mt-4">
                {/* {buttons.map((btn, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`px-4 py-2 rounded-lg text-sm tracking-wider font-medium outline-none mr-2 ${
                      activeButton === index
                        ? "bg-orange-500 text-white-500"
                        : "bg-transparent text-black-500"
                    }`}
                    onClick={() => {
                      setFieldValue("subject", btn);
                      setActiveButton(index);
                    }}
                  >
                    {btn}
                  </button>
                ))} */}
                {courses.map((course, index) => (
                  <button
                    key={course.id}
                    type="button"
                    className={`px-4 py-2 rounded-lg text-sm tracking-wider font-medium outline-none mr-2 ${
                      activeButton === index
                        ? "bg-orange-500 text-white-500"
                        : "bg-transparent text-black-500"
                    }`}
                    onClick={() => {
                      setFieldValue("courseId", course.id);
                      setActiveButton(index);
                    }}
                  >
                    {course.title}
                  </button>
                ))}
              </div>

              <div>
                <Field
                  name="name"
                  placeholder={t.form?.name}
                  className="w-full rounded-lg py-3 px-4 text-black-600 text-sm outline-none"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>

              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder={t.form?.email}
                  className="w-full rounded-lg py-3 px-4 text-black-600 text-sm outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>

              <div>
                <Field
                  name="phoneNumber"
                  type="tel"
                  placeholder={t.form?.phone}
                  className="w-full rounded-lg py-3 px-4 text-black-600 text-sm outline-none"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="mb-10">
                <h4 className="text-black-500 text-sm tracking-wider font-medium leading-7 mb-4">
                  {t.form?.communicationMethod}
                </h4>
                <div className="flex">
                  {[t.form?.emailOption, t.form?.phoneOption].map(
                    (method, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between gap-2 mr-11"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Field
                          id={`radio-group-${index}`}
                          type="radio"
                          name="avantage"
                          value={index + 1}
                          className="checked:bg-indigo-500 checked:border-indigo-500"
                          onChange={() => {
                            setFieldValue("avantage", index + 1);
                          }}
                        />
                        <label
                          htmlFor={`radio-group-${index}`}
                          className="flex items-center cursor-pointer text-sm text-black-500  font-normal leading-6"
                        >
                          {method}
                        </label>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              <div>
                <Field
                  name="message"
                  as="textarea"
                  rows={6}
                  placeholder={t.form?.message}
                  className="w-full rounded-lg px-4 text-black-600 text-sm pt-3 outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white-500 bg-orange-500 tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6 disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                  />
                </svg>
                {isSubmitting ? t.form?.sending : t.form?.sendMessage}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
