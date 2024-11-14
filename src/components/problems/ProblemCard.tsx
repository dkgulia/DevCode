import Link from 'next/link';

type Problem = {
  id: string;
  title: string;
  difficulty: string;
  tags: string[];
};

const ProblemCard = ({ problem }: { problem: Problem }) => {
  return (
    <div className="problem-card">
      <Link href={`/problems/${problem.id}`}>
        <h3>{problem.title}</h3>
      </Link>
      <p>Difficulty: {problem.difficulty}</p>
      <div>
        {problem.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProblemCard;
