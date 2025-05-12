"use client";

import Link from 'next/link';
import { BookOpen, LayoutDashboard, LogIn, UserPlus, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from 'react';

const Navbar = () => {
  // Dummy auth state for now
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Hydration safety
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
             <Link href="/" className="mr-6 flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">LearnFlow</span>
            </Link>
          </div>
          <div className="h-8 w-px bg-border hidden md:block mr-4" /> {/* Placeholder for search or spacing */}
           <div className="flex-1 items-center justify-end space-x-2 md:flex">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              {/* Placeholder for search */}
            </div>
            <nav className="hidden md:flex gap-2">
                <Button variant="ghost" disabled>Courses</Button>
                <Button variant="ghost" disabled>Dashboard</Button>
            </nav>
            <div className="hidden md:flex gap-2">
              <Button variant="outline" disabled>Login</Button>
              <Button disabled>Sign Up</Button>
            </div>
          </div>
        </div>
      </header>
    );
  }


  const NavLinks = () => (
    <>
      <Link href="/courses" passHref>
        <Button variant="ghost" className="w-full justify-start md:w-auto">
          <BookOpen className="mr-2 h-4 w-4" />
          Courses
        </Button>
      </Link>
      {isAuthenticated && (
        <Link href="/dashboard" passHref>
          <Button variant="ghost" className="w-full justify-start md:w-auto">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>
      )}
    </>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">LearnFlow</span>
          </Link>
          <nav className="flex items-center space-x-2 text-sm font-medium">
            <NavLinks />
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden flex-grow">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] pt-10">
              <Link href="/" className="mb-6 flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">LearnFlow</span>
              </Link>
              <nav className="flex flex-col space-y-3">
                <NavLinks />
                 <div className="relative mt-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search courses..." className="pl-8 w-full" />
                </div>
                {!isAuthenticated ? (
                  <>
                    <Link href="/login" passHref>
                      <Button variant="outline" className="w-full justify-start">
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" passHref>
                      <Button className="w-full justify-start">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Sign Up
                      </Button>
                    </Link>
                  </>
                ) : (
                  <Button variant="ghost" onClick={() => setIsAuthenticated(false)} className="w-full justify-start">
                    Logout
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
         <Link href="/" className="flex items-center space-x-2 md:hidden flex-grow justify-center">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">LearnFlow</span>
        </Link>


        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="pl-8 w-full md:w-[200px] lg:w-[300px]" />
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {!isAuthenticated ? (
              <>
                <Link href="/login" passHref>
                  <Button variant="outline">
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </Button>
                </Link>
                <Link href="/signup" passHref>
                  <Button>
                    <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                {/* Placeholder for User Avatar/Dropdown */}
                <Button variant="ghost" onClick={() => setIsAuthenticated(false)}>Logout</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
