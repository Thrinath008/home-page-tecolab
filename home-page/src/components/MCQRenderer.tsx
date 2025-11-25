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

  const handleOptionSelect = (index: number, option: string, correctAnswer: string) => {
    const isCorrect = option === correctAnswer;
    setSelectedAnswers(prev => ({ ...prev, [index]: option }));
    setResults(prev => ({ ...prev, [index]: isCorrect }));
  };

  return (
    <div className="space-y-10">
      {mcqs.map((mcq, index) => (
        <section
          key={index}
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-100"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{mcq.question}</h3>
              <p className="text-sm text-gray-500 mt-1">Choose the best answer</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {mcq.options.map((option, optIndex) => {
              const isSelected = selectedAnswers[index] === option;
              const isCorrect = results[index];
              const showState = isSelected && isCorrect !== null;

              return (
                <label key={optIndex} className="cursor-pointer">
                  <input
                    type="radio"
                    name={`mcq-${index}`}
                    value={option}
                    checked={isSelected}
                    onChange={() => handleOptionSelect(index, option, mcq.answer)}
                    className="sr-only"
                  />
                  <div
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-gray-900 ${
                      showState
                        ? isCorrect
                          ? "border-emerald-400 bg-emerald-50"
                          : "border-rose-400 bg-rose-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <span className="text-base font-medium">{option}</span>
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-sm ${
                        showState
                          ? isCorrect
                            ? "border-transparent bg-emerald-500 text-white"
                            : "border-transparent bg-rose-500 text-white"
                          : "border-gray-200 bg-white text-gray-400"
                      }`}
                    >
                      {showState ? (isCorrect ? "✓" : "✕") : optIndex + 1}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>

          {selectedAnswers[index] && (
            <p
              aria-live="polite"
              className={`mt-4 text-sm font-semibold ${
                results[index] ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {results[index] ? "Great job — that's correct!" : "Not quite. Try reviewing the options again."}
            </p>
          )}
        </section>
      ))}
    </div>
  );
};

export default MCQRenderer;