"use client"

import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const langchainCourse = {
  id: "1",
  title: "Intermediate Guide to LangChain for AI Engineers",
  description: "Build production-ready LLM apps with LangChain in 3 weeks.",
  level: "Intermediate",
  estimated_time: "3 weeks",
  modules: 4,
  skills: ["LangChain", "LLMs", "Agents", "RAG"],
  members: {
    current: 18,
    total: 30
  },
  image: "https://images.unsplash.com/photo-1682687220945-7b9c9cc0b312?auto=format&fit=crop&w=800&q=80"
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-blue-50 p-6 text-black">
      <section className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Find Your Next Course</h1>
        <p className="text-lg text-blue-700">Discover hands-on projects tailored to AI skills</p>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card className="rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
          <div className="h-40 bg-gray-100">
            <img src={langchainCourse.image} alt="Course" className="w-full h-full object-cover" />
          </div>

          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-blue-900 text-lg">{langchainCourse.title}</CardTitle>
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-yellow-100 text-yellow-800">
                {langchainCourse.level}
              </span>
            </div>
            <CardDescription className="text-sm text-gray-700 mt-1">{langchainCourse.description}</CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2 mt-2">
              {langchainCourse.skills.slice(0, 3).map((skill, i) => (
                <span key={i} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>

            <div className="text-xs text-gray-500 mt-1">
              {/* Reserved for future "Free"/"Pro" label */}
            </div>

            <div className="flex justify-between text-sm text-gray-600 mt-4">
              <span>📦 {langchainCourse.modules} Modules</span>
              <span>⏳ {langchainCourse.estimated_time}</span>
              <span>👥 {langchainCourse.members.current}/{langchainCourse.members.total} Members</span>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold mb-1 text-gray-800">What you'll learn:</p>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                <li>{langchainCourse.skills[0]}</li>
                <li>{langchainCourse.skills[1]}</li>
              </ul>
            </div>

            <div className="mt-2 text-xs text-gray-500 italic">
              Prerequisites: Basic Python, LLMs, APIs, Prompting
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Link href={`/dashboard/projects/${langchainCourse.id}`}>
              <Button variant="outline" className="text-blue-900">View Details</Button>
            </Link>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 text-sm">
              Join →
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}