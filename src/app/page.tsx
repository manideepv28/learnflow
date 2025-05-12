import { Button } from '@/components/ui/button';
import CourseList from '@/components/courses/course-list';
import { mockCourses } from '@/lib/mock-data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary/30 py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
            <Image 
                src="https://picsum.photos/1920/1080?random=hero" 
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                priority
                data-ai-hint="learning education"
            />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Unlock Your Potential with LearnFlow
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore a wide range of courses, from web development to design, and achieve your learning goals with our engaging video lessons and interactive quizzes.
          </p>
          <div className="space-x-4">
            <Link href="/courses" passHref>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Courses
          </h2>
          <CourseList courses={mockCourses.slice(0, 3)} /> {/* Display first 3 courses as featured */}
          {mockCourses.length > 3 && (
             <div className="text-center mt-12">
                <Link href="/courses" passHref>
                    <Button variant="outline" size="lg">
                        View All Courses <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section - Optional */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why LearnFlow?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">Expert Instructors</h3>
              <p className="text-foreground/80">Learn from industry professionals with real-world experience.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">Interactive Learning</h3>
              <p className="text-foreground/80">Engage with video lessons, quizzes, and practical exercises.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">Flexible Pace</h3>
              <p className="text-foreground/80">Learn at your own speed, anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
