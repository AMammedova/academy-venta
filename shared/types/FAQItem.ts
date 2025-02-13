export type FAQItem = {
  id: string;
  question: {
    az: string;
    en: string;
    ru: string;
  };
  answer: {
    az: string;
    en: string;
    ru: string;
  };
};
export interface FaqPageType{
  title:string;
  description:string;
}