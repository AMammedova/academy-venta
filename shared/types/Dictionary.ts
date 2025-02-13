import { ContactType } from "./ContactType";
import { CoursesType } from "./CourseType";
import { FaqPageType } from "./FAQItem";
import { FeatureType } from "./FeatureType";
import { FooterType } from "./FooterType";
import { HeaderType } from "./HeaderType";
import { HeroType } from "./HeroType";
import { TestimonialType } from "./TestimonialType";
import { TutorDetailPageType, TutorsPageType } from "./TutorType";

export interface Dictionary {
  dict: {
    header: HeaderType;
    hero: HeroType;
    feature: FeatureType;
    courses: CoursesType;
    tutorsPage: TutorsPageType;
    tutorsDetailPage?: TutorDetailPageType;
    testimonial:TestimonialType;
    contact: ContactType; 
    faq:FaqPageType;
    footer: FooterType;
  };
}
