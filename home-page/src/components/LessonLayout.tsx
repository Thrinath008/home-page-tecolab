import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface LessonLayoutProps {
  title: string;
  summary?: string;
  content: string;
}

const LessonLayout: React.FC<LessonLayoutProps> = ({ title, summary, content }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Placeholder for send action
    setMessage('');
  };

  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="w-2/3 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {summary && <p className="text-lg text-gray-600 mb-6">{summary}</p>}
        <div className="prose max-w-none mb-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Run Code
        </button>
      </div>

      {/* Right side - Assistant Sidebar */}
      <div className="w-1/3 bg-gray-100 border-l border-gray-300 flex flex-col p-6">
        <div className="flex items-center mb-4">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Elara AI"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <div className="flex items-center">
              <span className="font-semibold text-lg">Elara AI</span>
              <span className="ml-2 w-3 h-3 bg-green-500 rounded-full" title="Online"></span>
            </div>
            <p className="text-sm text-gray-600">Your AI assistant for coding lessons.</p>
          </div>
        </div>
        <textarea
          className="flex-grow resize-none rounded border border-gray-300 p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LessonLayout;
