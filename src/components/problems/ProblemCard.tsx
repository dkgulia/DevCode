import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Problem, DifficultyLevel } from "@/types/problem";

const getDifficultyColor = (difficulty: DifficultyLevel) => {
  const colors: Record<DifficultyLevel, string> = {
    Easy: "bg-green-500 text-green-100",
    Medium: "bg-yellow-500 text-yellow-100",
    Hard: "bg-red-500 text-red-100",
  };
  return colors[difficulty] || "bg-gray-700 text-gray-300";
};

interface ProblemCardProps {
  problem: Problem;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem }) => {
  const router = useRouter();

  const handleTitleClick = () => {
    router.push(`/problems/${problem.id}`);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card
        className="max-w-5xl mx-auto bg-black hover:bg-[white]  shadow-sm border border-gray-100 transition-all duration-300 group cursor-pointer"
        onClick={handleTitleClick}
      >
        <CardHeader className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 flex-1">
              {/* Difficulty indicator */}
              <div
                className={`h-4 w-4 rounded-full ${getDifficultyColor(
                  problem.difficulty
                )}`}
              />

              {/* Title and Tags Container */}
              <div className="flex items-center justify-between flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-black hover:text-blue-500 transition-colors">
                  {problem.title}
                </h3>

                {/* Skills/Tags */}
                <div className="flex flex-wrap gap-1.5 items-center">
                  {problem.tags.map((tag) => {
                    const getTagStyle = (tag) => {
                      const styles = {
                        HTML: "bg-[#2d2e3d] text-[#6366f1]",
                        CSS: "bg-[#2d2e3d] text-[#38bdf8]",
                        JavaScript: "bg-[#2d2e3d] text-[#facc15]",
                        React: "bg-[#2d2e3d] text-[#0ea5e9]",
                        TypeScript: "bg-[#2d2e3d] text-[#3b82f6]",
                        Accessibility: "bg-[#2d2e3d] text-[#a78bfa]",
                        "Component Design": "bg-[#2d2e3d] text-[#f43f5e]",
                        "CRUD Operations": "bg-[#2d2e3d] text-[#10b981]",
                        "Responsive Design": "bg-[#2d2e3d] text-[#f97316]",
                        default: "bg-[#2d2e3d] text-gray-300",
                      };
                      return styles[tag] || styles.default;
                    };

                    return (
                      <Badge
                        key={tag}
                        className={`px-2 py-1 text-[11px] font-medium rounded-full
                                  transition-all duration-200
                                  ${getTagStyle(tag)}
                                  hover:opacity-80
                                  group-hover:bg-[#2d2e3d]`}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ProblemCard;
