import type { Course, Lesson, QuizQuestion, Quiz, Module } from '@/types';

const sampleQuizQuestions: QuizQuestion[] = [
  { id: 'q1', text: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], correctAnswer: 'Paris' },
  { id: 'q2', text: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correctAnswer: 'Mars' },
  { id: 'q3', text: 'What is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correctAnswer: 'Pacific' },
];

const sampleQuiz: Quiz = {
  id: 'quiz1',
  title: 'Chapter 1 Quiz',
  questions: sampleQuizQuestions,
};

const sampleLessonsModule1: Lesson[] = [
  { id: 'l1-1', title: 'Introduction to Course', duration: '5:20', videoUrl: 'dQw4w9WgXcQ', content: 'Welcome to this amazing course! We will cover many topics.', isCompleted: true },
  { id: 'l1-2', title: 'Core Concepts Part 1', duration: '12:45', videoUrl: 'L_LUpnjgPso', content: 'Understanding the fundamental ideas.', isCompleted: false },
  { id: 'l1-3', title: 'Core Concepts Part 2', duration: '15:10', videoUrl: '3tmd-ClpJxA', content: 'Delving deeper into the core concepts with examples.', isCompleted: false },
];

const sampleLessonsModule2: Lesson[] = [
  { id: 'l2-1', title: 'Advanced Techniques', duration: '18:30', videoUrl: 'gfkts0u-m6w', content: 'Exploring advanced methods and strategies.', isCompleted: false },
  { id: 'l2-2', title: 'Case Studies', duration: '22:00', videoUrl: 'V-_O7nl0Ii0', content: 'Analyzing real-world examples and case studies.', isCompleted: false },
];

const sampleModules: Module[] = [
  {
    id: 'm1',
    title: 'Module 1: Fundamentals',
    lessons: sampleLessonsModule1,
    quiz: sampleQuiz,
  },
  {
    id: 'm2',
    title: 'Module 2: Advanced Topics',
    lessons: sampleLessonsModule2,
  }
];

export const mockCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Next.js for Beginners',
    description: 'Learn the fundamentals of Next.js and build modern web applications.',
    longDescription: 'This comprehensive course covers everything from setting up your Next.js environment to deploying full-stack applications. You will learn about routing, data fetching, server components, client components, and best practices for building performant and scalable web apps. Perfect for developers looking to get started with Next.js or level up their skills.',
    instructor: 'Jane Doe',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    lessons: [...sampleLessonsModule1, ...sampleLessonsModule2], // For simplicity, combining all lessons here too
    modules: sampleModules,
    price: 49.99,
    category: 'Web Development',
  },
  {
    id: 'course-2',
    title: 'Advanced TypeScript',
    description: 'Master TypeScript with advanced concepts like generics, decorators, and utility types.',
    longDescription: 'Take your TypeScript skills to the next level. This course dives deep into advanced features, design patterns, and practical applications of TypeScript in large-scale projects. Learn how to write more robust, maintainable, and type-safe code. Suitable for developers with existing TypeScript experience.',
    instructor: 'John Smith',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    lessons: [
        { id: 'atl1', title: 'Generics Deep Dive', duration: '20:00', videoUrl: 'yG-A1z2c1yY', content: 'Exploring generics in depth.' },
        { id: 'atl2', title: 'Decorators and Metaprogramming', duration: '25:30', videoUrl: 'ubVPmga4b6c', content: 'Understanding decorators.' },
    ],
    modules: [
      { id: 'atm1', title: 'Module 1: Advanced Types', lessons: [{ id: 'atl1', title: 'Generics Deep Dive', duration: '20:00', videoUrl: 'yG-A1z2c1yY' }] },
      { id: 'atm2', title: 'Module 2: Metaprogramming', lessons: [{ id: 'atl2', title: 'Decorators and Metaprogramming', duration: '25:30', videoUrl: 'ubVPmga4b6c' }], quiz: { ...sampleQuiz, id: 'quiz2', title: 'TypeScript Quiz'} },
    ],
    price: 79.99,
    category: 'Programming Languages',
  },
  {
    id: 'course-3',
    title: 'UI/UX Design Principles',
    description: 'Discover the core principles of user interface and user experience design.',
    longDescription: 'Learn the essential principles and practices of UI/UX design to create intuitive, engaging, and user-centered digital products. This course covers user research, wireframing, prototyping, usability testing, and visual design fundamentals. Ideal for aspiring designers, developers, and product managers.',
    instructor: 'Alice Brown',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    lessons: [
        { id: 'udl1', title: 'Intro to UX', duration: '10:15', videoUrl: '64a7C9g4f5A' },
        { id: 'udl2', title: 'Wireframing', duration: '14:50', videoUrl: 'NnMFN9ls6fA' },
    ],
    modules: [
      { id: 'udm1', title: 'Module 1: UX Fundamentals', lessons: [{ id: 'udl1', title: 'Intro to UX', duration: '10:15', videoUrl: '64a7C9g4f5A' }] },
      { id: 'udm2', title: 'Module 2: Design Process', lessons: [{ id: 'udl2', title: 'Wireframing', duration: '14:50', videoUrl: 'NnMFN9ls6fA' }] },
    ],
    price: 59.99,
    category: 'Design',
  },
];

export const mockUser: import('@/types').User = {
  id: 'user123',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatarUrl: 'https://picsum.photos/100/100?random=user',
  enrolledCourses: [
    { courseId: 'course-1', progress: 33, completedLessons: ['l1-1'] },
    { courseId: 'course-2', progress: 0, completedLessons: [] },
  ],
};

export const getCourseById = (id: string): Course | undefined => mockCourses.find(course => course.id === id);

export const getLessonById = (courseId: string, lessonId: string): Lesson | undefined => {
  const course = getCourseById(courseId);
  if (!course) return undefined;
  for (const module of course.modules) {
    const lesson = module.lessons.find(l => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
};
