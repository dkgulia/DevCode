import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>CodePractice</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/problems">Problems</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
