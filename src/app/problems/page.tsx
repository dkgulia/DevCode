"use client"
import { useRouter } from 'next/navigation';
import ProblemList from '../../components/problems/ProblemList';
import { Code2 } from 'lucide-react';
export default function ProblemsPage() {
  const router = useRouter();

  return (
    <main className="container flex flex-col items-center">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full bg-white z-10 flex items-center justify-between px-4 py-2 shadow">
        <button onClick={() => router.back()} className="back-button bg-black text-white px-4 py-2 rounded">
          &larr; Back
        </button>
        <div className="flex items-center">
              <Code2 className="h-8 w-8 text-black" />
              <span className="ml-2 text-xl font-bold">DevCode</span>
            </div>
      </div>

      {/* Spacing element to offset the fixed header */}
      <div className="mt-16"></div>

      <p className="text-black font-bold mb-8 max-w-2xl mx-auto">
        Select a problem to start coding and practice your skills.
      </p>

      <ProblemList />
    </main>
  );
}
