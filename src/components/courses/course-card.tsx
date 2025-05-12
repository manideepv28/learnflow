import type { Course } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, UserCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Link href={`/courses/${course.id}`} className="block">
          <div className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={course.imageUrl}
              alt={course.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${course.category} course`}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        {course.category && <Badge variant="secondary" className="mb-2">{course.category}</Badge>}
        <Link href={`/courses/${course.id}`}>
          <CardTitle className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{course.title}</CardTitle>
        </Link>
        <CardDescription className="text-sm text-muted-foreground mb-3 line-clamp-3">{course.description}</CardDescription>
        <div className="flex items-center text-xs text-muted-foreground">
          <UserCircle className="h-4 w-4 mr-1.5" />
          <span>{course.instructor}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {course.price !== undefined && <p className="text-lg font-semibold text-primary">${course.price.toFixed(2)}</p>}
        <Link href={`/courses/${course.id}`} passHref>
          <Button variant="outline" size="sm">
            View Course <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
