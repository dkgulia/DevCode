import Navbar from '../components/layout/Navbar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="container main-content">
        <h2>Welcome to CodePractice</h2>
        <p>Practice coding problems and prepare for your technical interviews.</p>
        <Link href="/problems">
          <button className="start-button">Start Practicing</button>
        </Link>
      </main>
    </div>
  );
}
