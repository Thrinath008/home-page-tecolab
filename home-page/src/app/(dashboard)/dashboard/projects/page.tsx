"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// —— Brand + accent palettes ————————————————————————————————
const BRAND = {
  primary: "#122236",        // app background / primary
  surface: "#0d182b",        // page gradient end
  card:    "#162740",        // card surface
}

const ACCENTS: Record<
  "teal" | "green" | "purple" | "amber",
  { base: string; soft: string; fg: string }
> = {
  teal:   { base: "#00B5D8", soft: "rgba(0,181,216,0.12)", fg: "#06232a" },
  green:  { base: "#3BA55D", soft: "rgba(59,165,93,0.12)", fg: "#0a1d12" },
  purple: { base: "#7C3AED", soft: "rgba(124,58,237,0.12)", fg: "#160a2b" },
  amber:  { base: "#F59E0B", soft: "rgba(245,158,11,0.12)", fg: "#281a03" },
}

// —— Mock data (replace with your API) ————————————————
type Project = {
  id: string
  title: string
  description: string
  level: string
  estimated_time: string
  modules: number
  skills: string[]
  members: { current: number; total: number }
  image?: string
  variant: keyof typeof ACCENTS
}

const projects: Project[] = [
  {
    id: "1",
    title: "Intermediate Guide to LangChain for AI Engineers",
    description: "Build production-ready LLM apps with LangChain in 3 weeks.",
    level: "Intermediate",
    estimated_time: "3 weeks",
    modules: 4,
    skills: ["LangChain", "LLMs", "Agents", "RAG"],
    members: { current: 18, total: 30 },
    image:
      "https://www.haihai.ai/content/images/size/w1200/2023/05/Hello-World-with-LangChain-and-Python--2-.png",
    variant: "teal",
  },
  {
    id: "2",
    title: "Realtime Dashboard with WebSockets",
    description: "Stream metrics, cache aggressively, and visualize insights.",
    level: "Advanced",
    estimated_time: "2 weeks",
    modules: 5,
    skills: ["Next.js", "WS", "Redis", "Charts"],
    members: { current: 11, total: 25 },
    image:
      "https://www.haihai.ai/content/images/size/w1200/2023/05/Hello-World-with-LangChain-and-Python--2-.png",
    variant: "green",
  },
  {
    id: "3",
    title: "Vision Classifier (Transfer Learning)",
    description: "Train and deploy an image classifier with a FastAPI backend.",
    level: "Intermediate",
    estimated_time: "4 weeks",
    modules: 6,
    skills: ["PyTorch", "FastAPI", "S3", "Docker"],
    members: { current: 8, total: 20 },
    image:
      "https://www.haihai.ai/content/images/size/w1200/2023/05/Hello-World-with-LangChain-and-Python--2-.png",
    variant: "purple",
  },
  {
    id: "4",
    title: "ETL Pipeline with Lineage & Alerts",
    description: "End-to-end ingestion, validation, and alerting with Airflow.",
    level: "Beginner",
    estimated_time: "1 week",
    modules: 3,
    skills: ["SQL", "Airflow", "Pandas"],
    members: { current: 23, total: 40 },
    image:
      "https://www.haihai.ai/content/images/size/w1200/2023/05/Hello-World-with-LangChain-and-Python--2-.png",
    variant: "amber",
  },
]

// —— Page ————————————————————————————————————————————————
export default function ProjectsPage() {
  return (
    <div
      className="min-h-screen p-6"
      style={{
        background: `linear-gradient(180deg, ${BRAND.primary} 0%, ${BRAND.surface} 100%)`,
        color: "white",
      }}
    >
      <section className="mx-auto mb-8 max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold">Projects</h1>
        <p className="text-white/70">Discover hands-on builds tailored to AI skills</p>
      </section>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}

// —— Card component (uses your shadcn Card primitives) ————
function ProjectCard({ project }: { project: Project }) {
  const accent = ACCENTS[project.variant]

  return (
    <Card
      className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all"
      style={{
        background: BRAND.card,
        borderColor: accent.base,
        boxShadow: `0 0 0 1px ${accent.base} inset, 0 12px 35px rgba(0,0,0,0.35)`,
      }}
    >
      {/* Cover */}
      <div
        className="relative h-40 w-full"
        style={{
          background: `radial-gradient(120% 100% at 0% 0%, ${accent.soft} 0%, transparent 60%), linear-gradient(120deg, ${accent.base}22, transparent 60%)`,
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} cover`}
            fill
            className="object-cover opacity-90 mix-blend-lighten"
            sizes="(min-width: 1024px) 33vw, 100vw"
            priority={false}
          />
        ) : null}
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <span
            className="rounded px-2 py-0.5 text-xs font-semibold"
            style={{ background: accent.soft, border: `1px solid ${accent.base}` }}
          >
            {project.level}
          </span>
        </div>
        <CardDescription className="mt-1 text-sm text-white/70">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Skills */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{ background: accent.soft, border: `1px solid ${accent.base}55` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white/80">
          <span>📦 {project.modules} Modules</span>
          <span>⏳ {project.estimated_time}</span>
          <span>👥 {project.members.current}/{project.members.total} Members</span>
        </div>

        {/* Learn list (optional demo content) */}
        <div className="mt-4">
          <p className="mb-1 text-sm font-semibold text-white">What you'll learn:</p>
          <ul className="list-inside list-disc text-sm text-white/80">
            {project.skills.slice(0, 2).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="mt-2 text-xs italic text-white/60">
          Prerequisites: Basic Python, LLMs, APIs, Prompting
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex items-center justify-between">
        <Link href={`/dashboard/projects/${project.id}`}>
          <Button
            variant="outline"
            className={cn(
              "text-sm text-white",
              "border",
            )}
            style={{ borderColor: ACCENTS[project.variant].base }}
          >
            Details
          </Button>
        </Link>

        <Button
          className="text-sm font-medium"
          style={{
            background: accent.base,
            color: accent.fg,
            border: `1px solid ${accent.base}`,
          }}
        >
          Join →
        </Button>
      </CardFooter>
    </Card>
  )
}
