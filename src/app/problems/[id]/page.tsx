"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import CodeEditor from "../../../components/problems/CodeEditor";
import { problems } from "../../../constants/problems";

const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
} as const;

type Difficulty = keyof typeof difficultyColors;

interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  description: string;
  testCases?: any[];
  solutionValidator?: (submittedCode: string) => boolean;
}

const ProblemPage: React.FC = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const problem = problems.find((p) => p.id === id) as Problem | undefined;

  const [output, setOutput] = useState<string>("");
  const [isCompiling, setIsCompiling] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [userSolvedProblems, setUserSolvedProblems] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem("solvedProblems") || "[]");
  });

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  const handleCodeCompile = (compiledCode: string) => {
    setIsCompiling(true);
    setError("");

    try {
      setOutput(compiledCode);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? `Compilation Error: ${err.message}`
          : "An unknown error occurred during compilation";
      setError(errorMessage);
    } finally {
      setIsCompiling(false);
    }
  };

  const handleCodeSubmit = (submittedCode: string): boolean => {
    if (!problem || !problem.solutionValidator) {
      toast.error("No validation method for this problem");
      return false;
    }
  
    try {
      const isCorrect = problem.solutionValidator(submittedCode);
  
      if (isCorrect) {
        // Mark problem as solved for the user
        const updatedSolvedProblems = [...userSolvedProblems, problem.id];
        setUserSolvedProblems(updatedSolvedProblems);
  
        // Save to backend/local storage
        localStorage.setItem("solvedProblems", JSON.stringify(updatedSolvedProblems));
  
        toast.success("Problem Solved Successfully!");
        return true;
      } else {
        toast.error("Solution does not pass all test cases");
        return false;
      }
    } catch (err) {
      toast.error("Error validating solution");
      return false;
    }
  };
  

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    router.push("/sign-in");
    return null;
  }

  if (!problem) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-center text-red-500">
            Problem Not Found
          </h1>
          <p className="text-center mt-2">
            The requested problem could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{problem.title}</h1>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                difficultyColors[problem.difficulty]
              }`}
            >
              {problem.difficulty}
            </span>
          </div>
          <p className="text-gray-600 mt-1">{problem.description}</p>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-2 gap-6 p-6">
        <div className="bg-black rounded-lg shadow-sm p-4">
        <CodeEditor onCodeCompile={handleCodeCompile} onCodeSubmit={handleCodeSubmit} />

        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-2 bg-gray-100 border-b">
            <h3 className="text-sm font-medium text-gray-700">Preview</h3>
          </div>
          <div className="h-[calc(100%-40px)]">
            {error ? (
              <div className="p-4 text-red-600">{error}</div>
            ) : (
              <iframe
                srcDoc={output}
                title="output"
                className="w-full h-full border-none bg-black"
                sandbox="allow-scripts allow-same-origin allow-modals"
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProblemPage;
