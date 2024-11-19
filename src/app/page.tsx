"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Code2, Terminal, Timer, Users, Search, ArrowRight, Github, Menu, X } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const problems = [
  { title: "Build a File Explorer", difficulty: "Medium", tags: ["React", "Tree Data", "File System"], submissions: 1234 },
  { title: "Create a Calendar App", difficulty: "Hard", tags: ["React", "Date Handling", "Events"], submissions: 982 },
  { title: "Design a Comment System", difficulty: "Easy", tags: ["React", "CRUD", "Real-time"], submissions: 2341 }
];

const HomePage = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    router.push('/problems');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = () => (
    <>
      <Link href="/problems" className="text-gray-700 hover:text-black">Problems</Link>
      {/* <Link href="/leaderboard" className="text-gray-700 hover:text-black">Leaderboard</Link>
      <Link href="/discuss" className="text-gray-700 hover:text-black">Discuss</Link> */}
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
              <span className="ml-2 text-lg sm:text-xl font-bold">DevCode</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLinks />
              {/* <Button onClick={handleClick} className="bg-black text-white hover:bg-gray-800">
                Get Started
              </Button> */}
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" onClick={toggleMobileMenu} className="p-2">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 z-50">
            <div className="px-4 py-2 space-y-4">
              <NavLinks />
              <div className="flex flex-col space-y-2">
                {/* <Button onClick={handleClick} className="bg-black text-white hover:bg-gray-800 w-full">
                  Get Started
                </Button> */}
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-4 sm:mb-6">
            Master Machine Coding Interviews
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Practice real-world frontend challenges. Build real applications. Land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button onClick={handleClick} className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
              Start Practicing
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="outline" className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
              <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Terminal, title: "Real-world Problems", description: "Practice with challenges inspired by actual frontend interviews." },
              { icon: Timer, title: "Timed Challenges", description: "Simulate real interview conditions with timed coding sessions." },
              { icon: Users, title: "Community Solutions", description: "Learn from peers and explore different approaches to problems." }
            ].map((feature, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader>
                  <feature.icon className="h-8 w-8 sm:h-12 sm:w-12 text-black mb-2" />
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Preview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Problems</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input className="pl-10 w-full" placeholder="Search problems..." />
            </div>
            <Button variant="outline" className="w-full sm:w-auto">View All</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="hover:border-black transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">{problem.title}</CardTitle>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs sm:text-sm ${
                    problem.difficulty === 'Easy' ? 'text-green-600' : 
                    problem.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {problem.difficulty}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-xs sm:text-sm text-gray-600">{problem.submissions} submissions</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {problem.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to become a better developer?</h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Join thousands of developers who are improving their machine coding skills with DevCode.
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
            Start Practicing Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: "Product", links: ["Problems", "Features", "Pricing"] },
              { title: "Resources", links: ["Documentation", "Blog", "Guides"] },
              { title: "Company", links: ["About", "Careers", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "Cookie Policy"] }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold mb-3 sm:mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href="#" className="text-gray-600 hover:text-black text-sm">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-center text-sm">© 2024 DevCode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;