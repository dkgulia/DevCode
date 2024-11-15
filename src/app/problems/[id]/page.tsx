"use client";

import React from "react";
import { useParams,useRouter } from "next/navigation";
import { problems } from "../../../constants/problems";
import CodeEditor from "../../../components/problems/CodeEditor";
import {
  Clock,
  CheckCircle,
  XCircle,
  BarChart2,
  Code2,
  Play,
} from "lucide-react";

// Types remain the same
type Difficulty = "Easy" | "Medium" | "Hard";
type ProblemStatus = "Solved" | "Attempted" | "Todo";

interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  tags: string[];
  description: string;
  example: string;
  timeComplexity?: string;
  spaceComplexity?: string;
}

interface ProblemState {
  status: ProblemStatus;
  executionTime?: string;
  memoryUsed?: string;
  submissionCount: number;
  lastSubmitted?: string;
}

const difficultyColors: Record<Difficulty, string> = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};


export default function ProblemPage() {
  const router = useRouter();
  const { id } = useParams();
  const problem = problems.find((problem: Problem) => problem.id === id);

  const problemState: ProblemState = {
    status: "Attempted",
    executionTime: "52ms",
    memoryUsed: "38.9MB",
    submissionCount: 3,
    lastSubmitted: "2 hours ago",
  };

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
  
      {/* Problem Header */}
      <header className="bg-white border-b">
    

        <div className="container mx-auto px-6 ">
          <div className="py-4 bg-white">
            {/* Title and Difficulty Row */}
            <div className="bg-white flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="bg-black px-4 py-2 rounded-lg">
                  <h1 className="text-xl font-bold text-white">
                    {problem.title}
                  </h1>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    difficultyColors[problem.difficulty]
                  }`}
                >
                  {problem.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  Solutions
                </button>
                <button className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-md flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Run Code
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                {problemState.status === "Solved" ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : problemState.status === "Attempted" ? (
                  <XCircle className="w-4 h-4 text-red-500" />
                ) : (
                  <Clock className="w-4 h-4 text-gray-400" />
                )}
                <span>{problemState.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Execution: {problemState.executionTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4" />
                <span>Memory: {problemState.memoryUsed}</span>
              </div>
              <div>Submissions: {problemState.submissionCount}</div>
              <div>Last Submitted: {problemState.lastSubmitted}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="bg-black flex-1 grid grid-cols-2 gap-6 p-6">
        {/* Left Side - Code Editor */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="h-full p-4">
            <CodeEditor />
          </div>
        </div>

        {/* Right Side - Problem Description and Output */}
        <div className="bg-black text-white rounded-lg shadow-sm overflow-auto p-6">
          {/* Problem Description */}
          <div className="prose max-w-none mb-6">
            <h3 className="text-lg font-semibold">Problem Description</h3>
            <p className="text-gray-300 text-med">{problem.description}</p>

            <h3 className="text-lg font-semibold mt-4">Example</h3>
            <pre className="bg-gray-100 p-4 w-full text-black rounded-lg whitespace-pre-wrap">
              <code>{problem.example}</code>
            </pre>

            {problem.timeComplexity && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Time Complexity</h3>
                <p className="text-gray-700">{problem.timeComplexity}</p>
              </div>
            )}

            {problem.spaceComplexity && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Space Complexity</h3>
                <p className="text-gray-700">{problem.spaceComplexity}</p>
              </div>
            )}
          </div>

          {/* Compiler Output */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Output</h3>
            <div className="bg-gray-100 p-4 rounded-lg min-h-[100px]">
              <p className="text-gray-600">Output will be shown here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
