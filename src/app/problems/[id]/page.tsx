"use client";


import React from 'react';
import { useParams } from 'next/navigation';  // Correct import
import { problems } from '../../../constants/problems';
import CodeEditor from '../../../components/problems/CodeEditor';

export default function ProblemPage() {
  const { id } = useParams();  // Using useParams to get the dynamic ID

  // Find the problem that matches the ID
  const problem = problems.find((problem) => problem.id === id);

  if (!problem) {
    return <p>Problem not found.</p>;
  }

  return (
    <main className="problem-page-container">
      <section className="problem-statement">
        <h2>{problem.title}</h2>
        <p><strong>Difficulty:</strong> {problem.difficulty}</p>
        <p><strong>Tags:</strong> {problem.tags.join(', ')}</p>
        <p>{problem.description}</p>
        <h4>Example:</h4>
        <p>{problem.example}</p>
      </section>

      <section className="code-editor">
        <h3>Code Editor</h3>
        <CodeEditor />
      </section>

      <section className="output-preview">
        <h3>Output Preview</h3>
        <div className="output-box">
          {/* Placeholder for code output */}
          Output will be shown here.
        </div>
      </section>
    </main>
  );
}
