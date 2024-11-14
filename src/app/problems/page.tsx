"use client"
import { useRouter } from 'next/navigation';
import ProblemList from '../../components/problems/ProblemList';

export default function ProblemsPage() {
  const router = useRouter();

  return (
    <main className="container">
      <button onClick={() => router.back()} className="back-button">
        &larr; Back
      </button>
      <h2>Coding Problems</h2>
      <p>Select a problem to start coding and practice your skills.</p>
      <ProblemList />
    </main>
  );
}
