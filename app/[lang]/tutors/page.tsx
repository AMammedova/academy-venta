import TutorsPage from "@/pages/tutors/Tutors";
import React from "react";
import { getDictionary } from "../dictionaries";

const Page = async ({ params }: { params: { lang: "en" | "az" | "ru" } }) => {
  const dict = await getDictionary(params.lang);
  return (
    <div className="max-w-screen-xl mt-32 px-8 xl:px-16 mx-auto">
      <TutorsPage t={dict?.tutorsPage ?? {}} />
    </div>
  );
};

export default Page;
