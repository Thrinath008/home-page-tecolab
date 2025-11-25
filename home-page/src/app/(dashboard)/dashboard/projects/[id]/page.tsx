"use client"

import { notFound } from "next/navigation"
import RoadmapViewToggle from "@/components/roadmap/RoadmapViewToggle"
import RoadmapLinear from "@/components/roadmap/RoadmapLinear"
import RoadmapTree from "@/components/roadmap/RoadmapTree"
import type { CourseRoadmap } from "@/components/roadmap/types"
import * as React from "react"
import { use } from "react"
import ReactMarkdown from "react-markdown"
import LessonLayout from "@/components/LessonLayout"
import CodeEditor from "@/components/CodeEditor"
import ModuleRenderer from "@/components/ModuleRenderer";
import MCQRenderer from "@/components/MCQRenderer";
import { data } from "framer-motion/client"
// ===================== DATA CONTRACT =====================
type ResourceLink = { label: string; url: string }
type Module = {
  id: string
  title: string
  summary: string
  difficulty?: "Beginner" | "Intermediate" | "Advanced"
  topics: string[]
  video?: string
  resources?: {
    docs?: ResourceLink[]
    blogs?: ResourceLink[]
    videos?: ResourceLink[]
  }
}

type Course = {
  id: string
  title: string
  description: string
  estimated_time: string
  modules: Module[]
  prerequisites?: string[]
  will_learn?: string[]
  enrollment?: { status: "none" | "enrolled" | "entitled" }
  access?: { entitled: boolean }
}

// ===================== FAKE DATA (replace with API later) =====================
const courses: Course[] = [
  {
    id: "1",
    title: "Intermediate Guide to LangChain for AI Engineers",
    description:
      "Build production-grade LLM applications using LangChain with this 3-week intensive course.",
    estimated_time: "3 weeks",
    will_learn: [
      "Design and compose chains",
      "Implement Retrieval-Augmented Generation (RAG)",
      "Build tool-using agents with safety rails",
    ],
    prerequisites: ["Basic Python/JS", "API fundamentals", "Prompting basics"],
    enrollment: { status: "entitled" },
    access: { entitled: true },
    modules: [
      {
        id: "m1",
        title: "Module 1: Foundations of LangChain",
        summary: "Core architecture, components, prompt templates.",
        difficulty: "Intermediate",
        topics: [
          "LangChain architecture (LLMs, prompts, parsers)",
          "PromptTemplate & OutputParser",
          "Callbacks & tracing",
        ],
      },
      {
        id: "m2",
        title: "Module 2: Building and Managing Chains",
        summary: "Sequential, parallel, and custom chains with best practices.",
        difficulty: "Intermediate",
        topics: [
          "LCEL overview",
          "Sequential vs. Router chains",
          "Streaming and retries/timeouts",
        ],
      },
      {
        id: "m3",
        title: "Module 3: Retrieval-Augmented Generation (RAG)",
        summary: "Use vector stores and knowledge retrieval in pipelines.",
        difficulty: "Advanced",
        topics: [
          "Chunking & embeddings",
          "Vector stores (Pinecone/FAISS)",
          "Reranking & evaluation",
        ],
      },
      {
        id: "m4",
        title: "Module 4: Agents + Tools",
        summary: "Build tool-using agents for autonomous workflows.",
        difficulty: "Advanced",
        topics: [
          "Agent types & planning",
          "Tool design (safety & validation)",
          "Memory & persistent state",
        ],
      },
    ],
  },
]

// ===================== PAGE =====================
export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = courses.find((c) => c.id === id)
  if (!project) return notFound()

  const isEntitled = true

  // Map modules→topics into CourseRoadmap
  const roadmapData: CourseRoadmap = {
    courseId: project.id,
    title: project.title,
    estimatedTime: project.estimated_time,
    current: { moduleId: "m2", topicId: "t2" },
    modules: project.modules.map((m, mi) => ({
      id: m.id,
      title: m.title,
      summary: m.summary,
      status: mi === 0 ? "completed" : mi === 1 ? "in-progress" : "available",
      topics: m.topics.map((t, ti) => ({
        id: `t${ti + 1}`,
        title: t,
        status:
          mi === 0 ? "completed" :
          mi === 1 && ti === 0 ? "completed" :
          mi === 1 && ti === 1 ? "in-progress" :
          "available",
      })),
      dependsOn: mi > 0 ? [project.modules[mi - 1].id] : [],
    })),
    access: { entitled: isEntitled },
  }

  const [started, setStarted] = React.useState(false)
  const [selectedModule, setSelectedModule] = React.useState<number | null>(null)

  const [view, setView] = React.useState<"linear" | "tree">("linear")

  const [modules, setModules] = React.useState<any[]>([]);
  const [mcqs, setMcqs] = React.useState<any[]>([]);

  // const [topics, setTopics] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch("/data/output.json")
      .then(res => res.json())
      .then(data => {
        setModules(data.modules);
        setMcqs(data.mcqs || []);
      });
      // .then(topic => setTopics(topic.course_outline));
  }, []);

  if (!started) {
    return (
      <div className="min-h-screen bg-[#122236] text-white">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl p-6 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-blue-400 md:text-5xl">
            {project.title}
          </h1>
          <p className="mb-2 text-lg text-gray-300">{project.description}</p>
          <div className="mb-6">
            <span className="inline-block rounded bg-blue-900/40 px-3 py-1 text-sm font-medium text-blue-300">
              ⏳ Duration: {project.estimated_time}
            </span>
          </div>
          {project.will_learn && (
            <ul className="mx-auto mt-3 grid max-w-3xl grid-cols-1 gap-2 text-left text-sm text-gray-300 md:grid-cols-3">
              {project.will_learn.map((it, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span>✅</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={() => setStarted(true)}
            className="mt-8 rounded bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Start/Continue
          </button>
        </section>
      </div>
    )
  }

  // started === true: show demoData content only
  const courseOutline = {
    title: "Mastering LangChain Agents for Intermediate Developers",
    description: "This 4-week course empowers intermediate Python developers to build, customize, and deploy intelligent AI agents using LangChain. Through modular lessons and hands-on projects, you'll deepen your understanding of agent frameworks, tool integrations, and advanced workflows to craft sophisticated AI solutions."
  };


  return (
    <div className="min-h-screen bg-[#122236] text-white p-6 max-w-7xl mx-auto">
      <h1 className="mb-4 text-4xl font-extrabold text-blue-400 md:text-5xl">
        {courseOutline.title}
      </h1>
      <p className="mb-2 text-lg text-gray-300">{courseOutline.description}</p>
      <div className="mb-6">
        <span className="inline-block rounded bg-blue-900/40 px-3 py-1 text-sm font-medium text-blue-300">
          ⏳ Duration: {}
        </span>
      </div>

      {selectedModule === null ? (
        modules && modules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((mod: any, idx: number) => (
              <section key={idx} className="border border-blue-700 rounded p-4">
                <h2 className="mb-2 text-2xl font-semibold text-blue-300">{mod.title}</h2>
                {(() => {
                  const overview = mod.sections?.find((s:any) => s.type === "text" && (s.heading === "Introduction" || s.heading === "Overview"));
                  return overview ? <p className="mb-2 text-gray-300">{overview.content}</p> : null;
                })()}
                <button
                  onClick={() => setSelectedModule(idx)}
                  className="mt-2 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                >
                  View Details
                </button>
              </section>
            ))}
          </div>
        ) : null
      ) : (
        <div>
          <button
            onClick={() => setSelectedModule(null)}
            className="mb-4 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            &larr; Back to Modules
          </button>
          <ModuleRenderer modules={[modules[selectedModule]]} />
          {mcqs.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">Quick Quiz</h2>
              <MCQRenderer mcqs={mcqs} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}