import { coursesData } from "@/shared/constants/courses";
import Course from "@/pages/course/Course";

const CourseDetail = ({ params }: { params: { id: string } }) => {
  const id = params?.id as string | undefined;
  const course = coursesData.find((course) => course?.id === id);

  if (!course) {
    return <p>Kurs tapılmadı!</p>;
  }

  return (
    <div className="max-w-screen-xl mt-36 px-8 xl:px-16 mx-auto">
      <Course course={course} />
    </div>
  );
};

export default CourseDetail;
