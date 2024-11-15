import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Code2, Terminal, Timer, Users, Search, ArrowRight, Github } from 'lucide-react';

const problems = [
  { title: "Build a File Explorer", difficulty: "Medium", tags: ["React", "Tree Data", "File System"], submissions: 1234 },
  { title: "Create a Calendar App", difficulty: "Hard", tags: ["React", "Date Handling", "Events"], submissions: 982 },
  { title: "Design a Comment System", difficulty: "Easy", tags: ["React", "CRUD", "Real-time"], submissions: 2341 }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-black" />
              <span className="ml-2 text-xl font-bold">DevCode</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/problems" className="text-gray-700 hover:text-black">Problems</Link>
              <Link href="/leaderboard" className="text-gray-700 hover:text-black">Leaderboard</Link>
              <Link href="/discuss" className="text-gray-700 hover:text-black">Discuss</Link>
              <Button variant="outline">Sign in</Button>
              <Button className="bg-black text-white hover:bg-gray-800">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-black mb-6">Master Machine Coding Interviews</h1>
          <p className="text-xl text-gray-600 mb-8">Practice real-world frontend challenges. Build real applications. Land your dream job.</p>
          <div className="flex justify-center space-x-4">
            <Button  className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
              Start Practicing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Terminal, title: "Real-world Problems", description: "Practice with challenges inspired by actual frontend interviews." },
              { icon: Timer, title: "Timed Challenges", description: "Simulate real interview conditions with timed coding sessions." },
              { icon: Users, title: "Community Solutions", description: "Learn from peers and explore different approaches to problems." }
            ].map((feature, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-black mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Preview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Problems</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input className="pl-10 w-64" placeholder="Search problems..." />
            </div>
            <Button variant="outline">View All</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="hover:border-black transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{problem.title}</CardTitle>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm ${problem.difficulty === 'Easy' ? 'text-green-600' : problem.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                    {problem.difficulty}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{problem.submissions} submissions</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {problem.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to become a better developer?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Join thousands of developers who are improving their machine coding skills with DevCode.</p>
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">Start Practicing Now</Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Product", links: ["Problems", "Features", "Pricing"] },
              { title: "Resources", links: ["Documentation", "Blog", "Guides"] },
              { title: "Company", links: ["About", "Careers", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "Cookie Policy"] }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href="#" className="text-gray-600 hover:text-black">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-center">© 2024 DevCode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
