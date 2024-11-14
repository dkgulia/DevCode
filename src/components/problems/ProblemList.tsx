import ProblemCard from './ProblemCard';
import { problems } from '../../constants/problems';

const ProblemList = () => {
  return (
    <div>
      {problems.map((problem) => (
        <ProblemCard key={problem.id} problem={problem} />
      ))}
    </div>
  );
};

export default ProblemList;
