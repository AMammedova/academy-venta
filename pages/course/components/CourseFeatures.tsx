'use client';
import { CheckIcon } from "@heroicons/react/16/solid";

const CourseFeatures = ({ features }: { features: string[] }) => (
    <section className="bg-blue-50 p-6 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Xüsusiyyətlər</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features?.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckIcon className="text-green-500 w-5 h-5" />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );

  export default CourseFeatures;