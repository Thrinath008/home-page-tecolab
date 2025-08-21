import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

// Fake course data — you’ll connect it to a backend later
const courses = [
  {
    id: "1",
    title: "Intermediate Guide to LangChain for AI Engineers",
    description: "Build production-grade LLM applications using LangChain with this 3-week intensive course.",
    estimated_time: "3 weeks",
    modules: [
      {
        title: "Module 1: Foundations of LangChain",
        summary: "Core architecture, components, prompt templates.",
        video: "https://www.youtube.com/watch?v=V7V7V7V7V7V"
      },
      {
        title: "Module 2: Building and Managing Chains",
        summary: "Sequential, parallel, and custom chains with best practices.",
        video: "https://www.youtube.com/watch?v=YzYzYzYzYzY"
      },
      {
        title: "Module 3: Retrieval-Augmented Generation (RAG)",
        summary: "Use vector stores and knowledge retrieval in pipelines.",
        video: "https://www.youtube.com/watch?v=QWERTYUIOP"
      },
      {
        title: "Module 4: Agents + Tools",
        summary: "Build tool-using agents for autonomous workflows.",
        video: "https://www.youtube.com/watch?v=ZXCZXCZXCZC"
      }
    ]
  }
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = courses.find(c => c.id === params.id)
  if (!project) return notFound()

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">{project.title}</h1>
        <p className="text-lg text-gray-700 mb-2">{project.description}</p>
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
          ⏳ Duration: {project.estimated_time}
        </span>
      </section>

      {/* Modules Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.modules.map((mod, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-900 mb-2">{mod.title}</h2>
            <p className="text-gray-700 mb-4">{mod.summary}</p>
            <a href={mod.video} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                🎥 Watch Video
              </Button>
            </a>
          </div>
        ))}
      </section>
    </div>
  )
}