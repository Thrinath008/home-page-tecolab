"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Build a modern e-commerce platform with React, Node.js, and MongoDB.",
    level: "Intermediate",
    duration: "8 weeks",
    teamSize: "4-6 members",
    skills: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    participants: 3,
    spots: 6,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "AI-Powered Task Manager",
    description: "Task manager using ML to prioritize tasks.",
    level: "Advanced",
    duration: "10 weeks",
    teamSize: "3-5 members",
    skills: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    participants: 2,
    spots: 5,
    image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?auto=format&fit=crop&w=930&q=80"
  }
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [levelFilter, setLevelFilter] = useState("")
  const [durationFilter, setDurationFilter] = useState("")

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesLevel = levelFilter === "" || project.level === levelFilter
    const matchesDuration = durationFilter === "" || project.duration === durationFilter

    return matchesSearch && matchesLevel && matchesDuration
  })

  const uniqueLevels = [...new Set(projectsData.map(p => p.level))]
  const uniqueDurations = [...new Set(projectsData.map(p => p.duration))]

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <section className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Find Your Next Project</h1>
        <p className="text-lg text-blue-700">Discover projects that match your skills and interests</p>
      </section>

      <section className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <span className="absolute left-3 top-3 text-gray-400 text-sm">🔍</span>
            <Input
              placeholder="Search projects..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
              <option value="">All Levels</option>
              {uniqueLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </Select>

            <Select value={durationFilter} onChange={(e) => setDurationFilter(e.target.value)}>
              <option value="">All Durations</option>
              {uniqueDurations.map(duration => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </Select>

            <Button variant="outline" className="flex gap-2">
              More Filters
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <Card key={project.id} className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl text-blue-900">{project.title}</CardTitle>
                <Badge
                  variant={
                    project.level === "Beginner" ? "success" :
                    project.level === "Intermediate" ? "warning" :
                    "danger"
                  }
                >
                  {project.level}
                </Badge>
              </div>
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <span>⏱</span>
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>👥</span>
                  <span>{project.participants}/{project.spots} Members</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/projects/${project.id}`}>
                <Button variant="outline" className="text-blue-900">View Details</Button>
              </Link>
              <Button className="bg-blue-600 text-white flex gap-1">
                Join →
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="max-w-7xl mx-auto text-center mt-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Don't see what you're looking for?</h2>
        <p className="text-gray-700 mb-6">Create your own project and invite others to join.</p>
        <Button className="bg-blue-700 text-white">
          🚀 Create a Project
        </Button>
      </section>
    </div>
  )
}