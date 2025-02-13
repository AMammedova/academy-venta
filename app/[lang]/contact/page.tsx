import Contact from "@/shared/components/Contact";
import React from "react";
import { getDictionary } from "../dictionaries";

const page = async ({ params }: { params: { lang: "en" | "az" | "ru" } }) => {
  const dict = await getDictionary(params.lang);
  return (
    <div className="max-w-screen-xl mt-32 px-8 xl:px-16 mx-auto">
      <Contact t={dict?.contact ?? {}} />
    </div>
  );
};

export default page;
