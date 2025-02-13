export interface TutorType {
  id: number;
  name: string;
  position: {
    az: string;
    en: string;
    ru: string;
  };
  contact: string;
  experience: {
    az: string;
    en: string;
    ru: string;
  };
  image: string;
  rating: string;
  yearsOfExperience: number;
}

export interface TutorsPageType {
  title: string;
}
export interface TutorDetailPageType {
  notFound: string;
  experience: string;
  yearsOfExperience: string;
  specialization: string;
  rating: string;
  ratingValue: string;
  experienceAndActivities: string;
}
