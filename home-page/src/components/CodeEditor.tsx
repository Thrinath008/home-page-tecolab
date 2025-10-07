// src/components/CodeEditor.tsx
"use client"

import { useState } from "react"

type CodeEditorProps = {
  language: string
  code: string
}

export default function CodeEditor({ language, code }: CodeEditorProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  return (
    <div className="bg-[#0d1117] rounded-lg shadow-lg mb-6 border border-gray-700">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#161b22] border-b border-gray-700 rounded-t-lg">
        <span className="text-xs font-mono text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code Block */}
      <pre className="p-4 overflow-x-auto text-sm text-gray-100 font-mono whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  )
}