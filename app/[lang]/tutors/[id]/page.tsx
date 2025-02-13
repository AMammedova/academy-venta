import TutorDetail from "@/pages/tutors/components/TutorDetail";
import { tutorsData } from "@/shared/constants/tutors";
import { getDictionary } from "../../dictionaries";

const Page = async ({
  params,
}: {
  params: { id: string; lang: "en" | "az" | "ru" };
}) => {
  const id = params?.id as string | undefined;
  const dict = await getDictionary(params.lang);

  const tutor = tutorsData.find((tutor) => tutor?.id === Number(id));

  if (!id) return <p>Tutor tapılmadı!</p>;

  if (!tutor) return <p>Tutor tapılmadı!</p>;
  return <TutorDetail tutor={tutor} t={dict?.TutorDetail ?? {}} />;
};

export default Page;
