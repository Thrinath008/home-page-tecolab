"use client";

import React from "react";

const projects = [
  {
    title: "Build a Full-Stack E-commerce Store",
    description:
      "Learn to build a complete e-commerce platform with user authentication, product management, and payment integration.",
    level: "Beginner",
    levelColor: "bg-green-900/50 text-green-400",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHFc_KgL7X0kTeSA0E4xC3E7G5oVYbeC34zbRICm4c7BiS5oDgylgQIh9MFX6UBb2KdK8j8mfH1c2pM27Y61L3igVYaLCQTwPg7ewGEwZBIoD18RExBuzIPDjlN1Wfp5Kx2NH1KH6JsPcbRl-BmHOTn0XtcIshgzRM_5YRYcW0yNeaNf9C7IqhKuCFNAUXwEamgmJkrfZ4IlW6u15WK5sb_Fx56x41RN7_RF2Xezm97AGxvEpGbqS-6ZSmkaO9IE0sWQqJ6f-bGA",
    hours: "Approx. 40 hours",
  },
  {
    title: "Create a Data Analysis Dashboard",
    description:
      "Master data visualization techniques by creating an interactive dashboard to analyze and present complex datasets.",
    level: "Intermediate",
    levelColor: "bg-yellow-900/50 text-yellow-400",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjrAoyL6NEr9n4N5cpES9Z6UgNpijswEriJAhgcZadFsGB_t6CyIuvkz3vQyTHSMbDJM8oeehX63-QP-J0rtKU9J5IPklEGvGNYq1JEQeihmPekgSdaJUq6gUB9w-gFcsLfg74yc427gXFNK9fG6niP2nBQEVIiXw1iu51MUFhwHlijHCV1Q0zKFCAAkDF6eaoj7CxGPryleOpfIh-T52Xffi8MNZC-sykmsyuiwhFBBagqTY8YgwiLKRbCJj5ZYE8sZ1oFZ7Fgw",
    hours: "Approx. 25 hours",
  },
];

export default function LearningPage() {
  return (
    <div className="bg-[#0D1117] text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#30363d] px-10 py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            className="rounded-md bg-[#21262d] py-2 px-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button className="h-9 px-4 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:scale-105 transition-transform">
            Go Pro
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-10 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mt-2 text-lg text-gray-400">
            Build real-world projects to solidify your skills and showcase your talent.
          </p>

          {/* Filter buttons */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["All", "Beginner", "Intermediate", "Advanced", "Completed"].map(
              (f) => (
                <button
                  key={f}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                    f === "All"
                      ? "bg-indigo-600 text-white"
                      : "bg-[#21262d] text-gray-300 hover:bg-[#30363d]"
                  }`}
                >
                  {f}
                </button>
              )
            )}
          </div>

          {/* Projects grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="group flex flex-col overflow-hidden rounded-2xl bg-[#161b22] shadow-lg hover:shadow-2xl hover:shadow-indigo-600/20 transition-all"
              >
                <div className="relative h-48">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-gray-400">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${p.levelColor}`}
                    >
                      {p.level}
                    </span>
                    <span className="text-xs text-gray-500">{p.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}