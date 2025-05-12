export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  instructor: string;
  imageUrl: string;
  lessons: Lesson[];
  modules: Module[];
  price?: number;
  category?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  quiz?: Quiz;
}

export interface Lesson {
  id: string;
  title:string;
  duration: string; // e.g., "10:30"
  videoUrl: string; // YouTube video ID
  content?: string; // Text content or transcript
  isCompleted?: boolean; // For progress tracking
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string; // Could be an index or the text of the option
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  enrolledCourses: Array<{ courseId: string; progress: number; completedLessons: string[] }>;
}
