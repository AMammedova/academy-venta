export type CourseType = {
  id: string;
  title: string;
  description: string;
  detailDescription?: string;
  icon: string;
  targetAudience?: string[];
  programDuration?: string;
  curriculum?: string[];
  features?: string[];
  participants?: number;
};
export interface CoursesType {
  title: string;
  description: string;
  viewCourse: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
}
