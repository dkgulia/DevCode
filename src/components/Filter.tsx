// components/Filter.tsx
import React from 'react';

interface FilterProps {
  selectedDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedDifficulty, onDifficultyChange }) => {
  return (
    <div className="filter-container">
      <label htmlFor="difficulty">Filter by Difficulty:</label>
      <select
        id="difficulty"
        value={selectedDifficulty}
        onChange={(e) => onDifficultyChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
};

export default Filter;
