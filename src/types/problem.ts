export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface Problem {
  id: string;
  title: string;
  difficulty: DifficultyLevel;
  tags: string[];
  description: string;
  example: string;
  solutionValidator?: (submittedCode: string) => boolean;
}

export interface CodeValidationResponse {
  isCorrect: boolean;
  message: string;
}
