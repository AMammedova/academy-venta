// src/services/api.ts

import { Course } from "@/shared/types/CourseType";

interface ContactFormData {
  courseId: number;
  name: string;
  email: string;
  phoneNumber: string;
  avantage: number;
  message: string;
}

// const baseUrl="http://tend.grandmart.az:6001/api"
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://tend.grandmart.az:6001/api';
export const ContactService = {
  submitContactForm: async (data: ContactFormData) => {
    const response = await fetch(`${API_BASE_URL}/contact/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }
    return response;
  }
};



export const CourseService = {
  getCourses: async (lang: string): Promise<Course[]> => {
    const response = await fetch(`${API_BASE_URL}/Course?lang=${lang}`);
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    return response.json();
  }
};