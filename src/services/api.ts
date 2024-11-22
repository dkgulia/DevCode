import { CodeValidationResponse } from "@/types/problem";

export const validateCode = async (title: string, code: string): Promise<CodeValidationResponse> => {
  const response = await fetch("/api/validate-code", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, code }),
  });

  if (!response.ok) {
    throw new Error("Failed to validate code");
  }

  return response.json();
};
