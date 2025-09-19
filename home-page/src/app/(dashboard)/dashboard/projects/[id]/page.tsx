"use client"

import { notFound } from "next/navigation"
import RoadmapViewToggle from "@/components/roadmap/RoadmapViewToggle"
import RoadmapLinear from "@/components/roadmap/RoadmapLinear"
import RoadmapTree from "@/components/roadmap/RoadmapTree"
import type { CourseRoadmap } from "@/components/roadmap/types"
import * as React from "react"

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
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = courses.find((c) => c.id === params.id)
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

  const [view, setView] = React.useState<"linear" | "tree">("linear")

  return (
    <div className="min-h-screen bg-[#122236] text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl p-6 text-center">
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
      </section>

      {/* Roadmap Section */}
      <section className="py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <h2 className="text-xl font-semibold text-blue-300">Your Roadmap</h2>
          <RoadmapViewToggle value={view} onChange={setView} labels={{ linear: "Journey", tree: "Map" }} />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-4">
          {view === "linear" ? (
            <RoadmapLinear
              data={roadmapData}
              showLabels
              showAvatar
              showProgressFill
              onModuleClick={(id) => console.log("module", id)}
              onTopicClick={(mid, tid) => console.log("topic", mid, tid)}
            />
          ) : (
            <RoadmapTree
              data={roadmapData}
              onModuleClick={(id) => console.log("module", id)}
              onTopicClick={(mid, tid) => console.log("topic", mid, tid)}
            />
          )}
        </div>
      </section>
    </div>
  )
}