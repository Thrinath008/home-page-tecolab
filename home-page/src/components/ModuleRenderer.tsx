import React, { useState } from "react";

interface Section {
  type: string;
  heading?: string;
  content?: string;
  language?: string;
  items?: string[] | { label: string; url: string }[];
}

interface Module {
  title: string;
  sections: Section[];
}

interface ModuleRendererProps {
  modules: Module[];
}

const ModuleRenderer: React.FC<ModuleRendererProps> = ({ modules }) => {
  const [copiedIndex, setCopiedIndex] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (moduleIndex: number, sectionIndex: number, text: string) => {
    navigator.clipboard.writeText(text);
    const key = `${moduleIndex}-${sectionIndex}`;
    setCopiedIndex(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedIndex(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <div className="space-y-10 bg-white">
      {modules.map((mod, i) => (
        <div key={i} className="border border-gray-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{mod.title}</h2>

          {mod.sections.map((sec, j) => (
            <div key={j} className="mb-8">
              {sec.heading && <h3 className="text-lg font-medium text-gray-700 mb-2">{sec.heading}</h3>}

              {sec.type === "text" && (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{sec.content}</p>
              )}

              {sec.type === "list" && Array.isArray(sec.items) && sec.items.every(item => typeof item === "string") && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {(sec.items as string[]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {sec.type === "code" && (
                <div className="rounded-xl overflow-hidden border border-gray-700">
                  <div className="flex justify-between items-center bg-black text-white px-4 py-2">
                    {sec.language && (
                      <div className="text-xs uppercase">
                        {sec.language}
                      </div>
                    )}
                    <button
                      onClick={() => handleCopy(i, j, sec.content || "")}
                      className="text-xs flex items-center space-x-1 hover:underline"
                    >
                      <span>{copiedIndex[`${i}-${j}`] ? "Copied!" : "Copy"}</span>
                      <span>📋</span>
                    </button>
                  </div>
                  <pre className="overflow-x-auto bg-gray-900 text-gray-100 p-4 m-0">
                    <code className="whitespace-pre">{sec.content}</code>
                  </pre>
                </div>
              )}

              {sec.type === "resources" &&
                Array.isArray(sec.items) &&
                sec.items.every(item => typeof item === "object" && item !== null && "label" in item && "url" in item) && (
                  (sec.items as { label: string; url: string }[]).map((res, idx) => (
                    <a
                      key={idx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:underline"
                    >
                      {res.label}
                    </a>
                  ))
                )}

              {sec.type === "exercise" && Array.isArray(sec.items) && sec.items.every(item => typeof item === "string") && (
                <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <ul className="list-decimal list-inside text-gray-700 space-y-1">
                    {(sec.items as string[]).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {sec.type === "summary" && (
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
                  {sec.content}
                </blockquote>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ModuleRenderer;