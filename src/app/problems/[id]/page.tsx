"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
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
  // Add other problem properties as needed
}

const ProblemPage: React.FC = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const problem = problems.find((p) => p.id === id) as Problem | undefined;
  
  const [output, setOutput] = useState<string>("");
  const [isCompiling, setIsCompiling] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  const handleCodeCompile = (compiledCode: string) => {
    try {
      setIsCompiling(true);
      setError("");
      setOutput(compiledCode);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Compilation Error: ${err.message}`);
      } else {
        setError("An unknown error occurred during compilation");
      }
    } finally {
      setIsCompiling(false);
    }
  };

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
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
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container ">
          <div className=" text-black py-4 flex items-center justify-between">
            <h1 className="text-xl text font-bold">{problem.title}</h1>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                difficultyColors[problem.difficulty]
              }`}
            >
              {problem.difficulty}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-2 gap-6 p-6">
        {/* Editor Section */}
        <div className="bg-black rounded-lg shadow-sm overflow-hidden p-4">
          <CodeEditor onCodeCompile={handleCodeCompile} />
        </div>

        {/* Output Preview */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                className="w-full h-full border-none"
                sandbox="allow-scripts allow-same-origin allow-modals"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;