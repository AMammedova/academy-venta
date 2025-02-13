import Landing from "@/pages/landing/Landing";
import { getDictionary } from "./dictionaries";


export default async function Home({
  params,
}: {
  params: { lang: "en" | "az" | "ru" };
}) {
  const dict = await getDictionary(params.lang);
  return <Landing dict={dict} />;
}
