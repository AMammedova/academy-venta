'use client';
// components/CourseTimeline.tsx
const CourseTimeline = ({ curriculum }: { curriculum: string[] }) => (
    <section className="relative">
      {curriculum?.map((topic, index) => (
        <div key={index} className="flex mb-8">
          <div className="flex flex-col items-center mr-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">{index + 1}</span>
            </div>
            {index < curriculum.length - 1 && (
              <div className="w-1 h-full bg-gray-200"></div>
            )}
          </div>
          <div className="flex-1 pb-8">
            <h3 className="text-lg font-medium mb-2">{topic}</h3>
          </div>
        </div>
      ))}
    </section>
  );

export default CourseTimeline;