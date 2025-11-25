// components/MCQRenderer.tsx
import React, { useState } from "react";

interface MCQ {
  question: string;
  options: string[];
  answer: string;
}

interface MCQRendererProps {
  mcqs: MCQ[];
}

const MCQRenderer: React.FC<MCQRendererProps> = ({ mcqs }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [results, setResults] = useState<{ [key: number]: boolean | null }>({});

  const handleOptionClick = (index: number, option: string, correctAnswer: string) => {
    const isCorrect = option === correctAnswer;
    setSelectedAnswers((prev) => ({ ...prev, [index]: option }));
    setResults((prev) => ({ ...prev, [index]: isCorrect }));
  };

  return (
    <div className="space-y-8">
      {mcqs.map((mcq, index) => (
        <div key={index} className="p-6 border border-gray-300 rounded-2xl bg-white shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{mcq.question}</h3>
          <div className="space-y-2">
            {mcq.options.map((option, optIndex) => (
              <button
                key={optIndex}
                onClick={() => handleOptionClick(index, option, mcq.answer)}
                className={`w-full text-left px-4 py-2 rounded-md border text-black ${
                  selectedAnswers[index] === option
                    ? results[index]
                      ? "bg-green-100 border-green-400"
                      : "bg-red-100 border-red-400"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>


          

          {selectedAnswers[index] && (
            <p
              className={`mt-3 font-medium ${
                results[index] ? "text-green-600" : "text-red-600"
              }`}
            >
              {results[index] ? "Correct!" : "Wrong!"}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MCQRenderer;