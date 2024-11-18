"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { problems } from "../../../constants/problems";
import CodeEditor from "../../../components/problems/CodeEditor";
import { useAuth } from "@clerk/nextjs";


const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

export default function ProblemPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const problem = problems.find((p) => p.id === id);

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in'); // Update this line
    }
  }, [isLoaded, isSignedIn, router]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleCodeCompile = async () => {
    setIsCompiling(true);
    setError("");
    setOutput("");

    try {
      const sandbox = `
        try {
          ${code}
        } catch (error) {
          console.error('Runtime Error:', error.message);
        }
      `;

      const compiledFunction = new Function(sandbox);
      const originalConsole = console.log;
      let output = "";

      console.log = (...args) => {
        output += args.join(" ") + "\n";
      };

      compiledFunction();

      console.log = originalConsole;
      setOutput(output || "No output generated");
    } catch (err: unknown) {
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
      <header className="bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">{problem.title}</h1>
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

      <div className="flex-1 grid grid-cols-2 gap-6 p-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <CodeEditor onCodeCompile={handleCodeChange} />
        </div>
        <div className="bg-black text-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold">Output</h3>
          <div className="bg-gray-800 p-4 rounded-lg min-h-[100px] font-mono text-sm">
            {error ? (
              <span className="text-red-400">{error}</span>
            ) : isCompiling ? (
              <span className="text-yellow-400">Compiling...</span>
            ) : output ? (
              <pre className="text-green-400 whitespace-pre-wrap">{output}</pre>
            ) : (
              <span className="text-gray-400">Run your code to see the output here</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
