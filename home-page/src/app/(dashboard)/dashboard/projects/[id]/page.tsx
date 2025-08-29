"use client"

import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

// NEW: roadmap components
import RoadmapViewToggle from "@/components/roadmap/RoadmapViewToggle"
import RoadmapLinear from "@/components/roadmap/RoadmapLinear"
import RoadmapTree from "@/components/roadmap/RoadmapTree"
import type { CourseRoadmap } from "@/components/roadmap/types"
import * as React from "react"

// ===================== DATA CONTRACT (use this with backend later) =====================

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
    enrollment: { status: "entitled" }, // demo: already has access
    access: { entitled: true },        // demo: already has access
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
        video: "https://www.youtube.com/watch?v=V7V7V7V7V7V",
        resources: {
          docs: [{ label: "LangChain Docs: Getting Started", url: "https://python.langchain.com/docs/get_started/introduction" }],
          blogs: [{ label: "Prompt Templates 101", url: "https://www.promptingguide.ai/" }],
        },
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
        video: "https://www.youtube.com/watch?v=YzYzYzYzYzY",
        resources: {
          docs: [{ label: "Chains Overview", url: "https://python.langchain.com/docs/expression_language/" }],
          blogs: [{ label: "Designing robust chains", url: "https://towardsdatascience.com/" }],
        },
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
        video: "https://www.youtube.com/watch?v=QWERTYUIOP",
        resources: {
          docs: [{ label: "RAG Cookbook", url: "https://python.langchain.com/docs/use_cases/question_answering/" }],
          videos: [{ label: "RAG deep dive", url: "https://www.youtube.com/watch?v=QWERTYUIOP" }],
        },
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
        video: "https://www.youtube.com/watch?v=ZXCZXCZXCZC",
        resources: {
          docs: [{ label: "Agents Overview", url: "https://python.langchain.com/docs/modules/agents/" }],
          blogs: [{ label: "Designing safe tools", url: "https://blog.langchain.dev/" }],
        },
      },
    ],
  },
]

// ===================== PAGE =====================

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = courses.find((c) => c.id === params.id)
  if (!project) return notFound()

  // ── Access / Auth gating (SKIPPED for now) ──────────────────────────────────────
  // const user = useSession()
  // const isSignedIn = Boolean(user)
  // const isEnrolled = project.enrollment?.status === "enrolled" || project.enrollment?.status === "entitled"
  // const isEntitled = Boolean(project.access?.entitled)
  const isEntitled = true

  // Map your modules→topics(string[]) into CourseRoadmap for the components
  const roadmapData: CourseRoadmap = {
    courseId: project.id,
    title: project.title,
    estimatedTime: project.estimated_time,
    // Demo current position: Module 2, Topic 2
    current: { moduleId: "m2", topicId: "t2" },
    modules: project.modules.map((m, mi) => ({
      id: m.id,
      title: m.title,
      summary: m.summary,
      // simple status demo: first completed, second in-progress, rest available
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl p-6 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-blue-900 md:text-5xl">{project.title}</h1>
        <p className="mb-2 text-lg text-gray-700">{project.description}</p>
        <div className="mb-6">
          <span className="inline-block rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            ⏳ Duration: {project.estimated_time}
          </span>
        </div>
        {project.will_learn && (
          <ul className="mx-auto mt-3 grid max-w-3xl grid-cols-1 gap-2 text-left text-sm text-gray-700 md:grid-cols-3">
            {project.will_learn.map((it, i) => (
              <li key={i} className="flex items-start gap-2">
                <span>✅</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Roadmap Section (brand navy background for contrast) */}
      <section className="py-8" style={{ background: "#122236" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-white">
          <h2 className="text-xl font-semibold">Your Roadmap</h2>
          <RoadmapViewToggle value={view} onChange={setView} labels={{ linear: "Journey", tree: "Map" }} />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-4 text-white">
          {view === "linear" ? (
            <RoadmapLinear
              data={roadmapData}
              showLabels
              showAvatar
              showProgressFill
              onModuleClick={(id) => {
                // if (!isEntitled) { /* open join sheet */ return }
                console.log("module", id)
              }}
              onTopicClick={(mid, tid) => {
                // if (!isEntitled) { /* open join sheet */ return }
                console.log("topic", mid, tid)
              }}
            />
          ) : (
            <RoadmapTree
              data={roadmapData}
              onModuleClick={(id) => {
                // if (!isEntitled) { /* open join sheet */ return }
                console.log("module", id)
              }}
              onTopicClick={(mid, tid) => {
                // if (!isEntitled) { /* open join sheet */ return }
                console.log("topic", mid, tid)
              }}
            />
          )}
        </div>
      </section>

      {/* (Optional) Keep your old modules grid below for now — remove when happy */}
      {/* 
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-2">
        {project.modules.map((mod) => (
          <div key={mod.id} className="rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition hover:shadow-md">
            <h2 className="mb-1 text-xl font-semibold text-blue-900">{mod.title}</h2>
            <p className="mb-4 text-gray-700">{mod.summary}</p>
            {mod.topics?.length ? (
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-800">
                {mod.topics.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            ) : null}
            {mod.video && (
              <a href={mod.video} target="_blank" rel="noopener noreferrer">
                <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">🎥 Watch Video</Button>
              </a>
            )}
          </div>
        ))}
      </section>
      */}
    </div>
  )
}






















// import { notFound } from "next/navigation"
// import { Button } from "@/components/ui/button"

// // Fake course data — you’ll connect it to a backend later
// const courses = [
//   {
//     id: "1",
//     title: "Intermediate Guide to LangChain for AI Engineers",
//     description: "Build production-grade LLM applications using LangChain with this 3-week intensive course.",
//     estimated_time: "3 weeks",
//     modules: [
//       {
//         title: "Module 1: Foundations of LangChain",
//         summary: "Core architecture, components, prompt templates.",
//         video: "https://www.youtube.com/watch?v=V7V7V7V7V7V"
//       },
//       {
//         title: "Module 2: Building and Managing Chains",
//         summary: "Sequential, parallel, and custom chains with best practices.",
//         video: "https://www.youtube.com/watch?v=YzYzYzYzYzY"
//       },
//       {
//         title: "Module 3: Retrieval-Augmented Generation (RAG)",
//         summary: "Use vector stores and knowledge retrieval in pipelines.",
//         video: "https://www.youtube.com/watch?v=QWERTYUIOP"
//       },
//       {
//         title: "Module 4: Agents + Tools",
//         summary: "Build tool-using agents for autonomous workflows.",
//         video: "https://www.youtube.com/watch?v=ZXCZXCZXCZC"
//       }
//     ]
//   }
// ]

// export default function ProjectPage({ params }: { params: { id: string } }) {
//   const project = courses.find(c => c.id === params.id)
//   if (!project) return notFound()

//   return (
//     <div className="min-h-screen bg-white p-6">
//       {/* Hero Section */}
//       <section className="max-w-5xl mx-auto text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">{project.title}</h1>
//         <p className="text-lg text-gray-700 mb-2">{project.description}</p>
//         <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
//           ⏳ Duration: {project.estimated_time}
//         </span>
//       </section>

//       {/* Modules Grid */}
//       <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//         {project.modules.map((mod, index) => (
//           <div
//             key={index}
//             className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
//           >
//             <h2 className="text-xl font-semibold text-blue-900 mb-2">{mod.title}</h2>
//             <p className="text-gray-700 mb-4">{mod.summary}</p>
//             <a href={mod.video} target="_blank" rel="noopener noreferrer">
//               <Button className="bg-blue-600 text-white hover:bg-blue-700">
//                 🎥 Watch Video
//               </Button>
//             </a>
//           </div>
//         ))}
//       </section>
//     </div>
//   )
// }