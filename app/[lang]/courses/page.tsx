import Courses from "@/pages/landing/components/Courses";

import React from "react";
import { getDictionary } from "../dictionaries";

const Page = async ({ params }: { params: { lang: "en" | "az" | "ru" } }) => {
  const dict = await getDictionary(params.lang);

  return <Courses t={dict?.courses ?? {}} />;
};

export default Page;
