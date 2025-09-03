
'use client';
import React, { useEffect, useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Inline SVG Icon Components
const EditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L5 12.828a2 2 0 010-2.828L13 3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7l-9 9v3h3l9-9" />
  </svg>
);
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="M22 6.5L12 13 2 6.5" />
  </svg>
);
const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="10" />
    <ellipse cx="12" cy="12" rx="4" ry="10" />
    <path d="M2 12h20" />
  </svg>
);
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.429 2.867 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.984 1.029-2.683-.104-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.204 2.397.1 2.65.64.699 1.028 1.591 1.028 2.683 0 3.842-2.338 4.688-4.566 4.938.359.309.678.918.678 1.852 0 1.336-.012 2.415-.012 2.745 0 .267.18.578.688.48C19.135 20.2 22 16.45 22 12.021 22 6.484 17.523 2 12 2z" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <path d="M16 8a6 6 0 016 6v4h-4v-4a2 2 0 00-4 0v4h-4v-8h4v2" />
    <circle cx="8" cy="8" r="1" />
  </svg>
);
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path d="M12 21s-6-5.686-6-10A6 6 0 1118 11c0 4.314-6 10-6 10z" />
    <circle cx="12" cy="11" r="2.5" />
  </svg>
);
const ZapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const AwardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" />
  </svg>
);
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path d="M5 3v4M3 5h4M19 11v2M18 12h2M7 21v-4M5 19h4M15 3v4M13 5h4M17 21v-4M15 19h4" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const MonitorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);
const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path d="M2 7a2 2 0 012-2h7v14H4a2 2 0 01-2-2V7zm18-2a2 2 0 012 2v10a2 2 0 01-2 2h-7V5h7z" />
  </svg>
);

// Demo user data for profile
const userData = {
  name: "Priya Sharma",
  title: "Full Stack Developer",
  location: "Bangalore, India",
  bio: "Driven developer with a passion for scalable web apps and collaborative open-source projects. Always learning, always building.",
  avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  email: "priya.sharma@example.com",
  website: "priyasharma.dev",
  github: "github.com/priyasharma",
  linkedin: "linkedin.com/in/priyasharma",
  tecoRank: 775,
  rankLevel: "Pro Developer",
  rankPercentile: 88,
  skills: [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Python", level: 70 },
    { name: "GraphQL", level: 60 },
    { name: "Docker", level: 65 },
    { name: "UI/UX Design", level: 60 },
  ],
  projects: [
    {
      id: 1,
      title: "CollabTask Manager",
      description: "A real-time team task manager with Kanban boards and chat.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      skills: ["React", "Node.js", "Socket.io"],
      status: "Completed",
      contribution: "Full Stack Development",
      performance: 89,
    },
    {
      id: 2,
      title: "Recipe AI Assistant",
      description: "A chatbot that suggests recipes using AI and user preferences.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      skills: ["Python", "TensorFlow", "React"],
      status: "In Progress",
      contribution: "AI Integration",
      performance: 93,
    },
    {
      id: 3,
      title: "Portfolio Generator",
      description: "CLI tool to generate developer portfolios from GitHub data.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      skills: ["Node.js", "TypeScript"],
      status: "Completed",
      contribution: "Backend & CLI",
      performance: 84,
    },
  ],
  achievements: [
    {
      title: "Hackathon Winner",
      description: "Won 1st place at CodeSprint 2023 for CollabTask Manager",
      icon: "star",
      date: "May 2023",
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to 10+ open source projects",
      icon: "code",
      date: "Jan 2023",
    },
    {
      title: "AI Innovator",
      description: "Developed a custom NLP model for Recipe AI Assistant",
      icon: "brain",
      date: "March 2023",
    },
  ],
  performanceMetrics: {
    codeQuality: 91,
    problemSolving: 95,
    teamwork: 88,
    communication: 86,
    projectManagement: 77,
    technicalSkills: 92,
  },
};

// Helper to get icon for achievement
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'star':
      return <StarIcon className="h-5 w-5" />;
    case 'brain':
      return <SparklesIcon className="h-5 w-5" />;
    case 'code':
      return <CodeIcon className="h-5 w-5" />;
    default:
      return <AwardIcon className="h-5 w-5" />;
  }
};

export default function ProfilePage() {
  // Uncomment for backend fetch:
  /*
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('User not logged in.');
      return;
    }
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:8000/users/me', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch user');
        const data = await response.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchUser();
  }, []);
  */

  // No error/loading states for demo
  const isCurrentUser = true;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-tecolab-navy py-14">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="h-32 w-32 rounded-full border-4 border-white"
            />
            {isCurrentUser && (
              <div className="absolute -bottom-2 -right-2">
                <Button size="sm" variant="outline" className="rounded-full h-8 w-8 p-0 bg-white text-tecolab-navy">
                  <EditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit profile picture</span>
                </Button>
              </div>
            )}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold">{userData.name}</h1>
            <p className="text-lg text-white/80">{userData.title}</p>
            <div className="flex justify-center md:justify-start items-center gap-2 text-white/70 mt-1">
              <MapPinIcon className="h-4 w-4" /> {userData.location}
            </div>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <a href={`mailto:${userData.email}`} className="flex items-center gap-1 text-white/80 hover:text-white">
                <MailIcon className="h-4 w-4" />
                <span>{userData.email}</span>
              </a>
              <a href={`https://${userData.website}`} className="flex items-center gap-1 text-white/80 hover:text-white">
                <GlobeIcon className="h-4 w-4" />
                <span>{userData.website}</span>
              </a>
              <a href={`https://${userData.github}`} className="flex items-center gap-1 text-white/80 hover:text-white">
                <GithubIcon className="h-4 w-4" />
                <span>{userData.github}</span>
              </a>
              <a href={`https://${userData.linkedin}`} className="flex items-center gap-1 text-white/80 hover:text-white">
                <LinkedinIcon className="h-4 w-4" />
                <span>{userData.linkedin}</span>
              </a>
            </div>
          </div>
          <div>
            <Button className="bg-white text-tecolab-navy hover:bg-white/90">
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Rank strip */}
      <div className="bg-gradient-to-r from-tecolab-navy to-tecolab-teal py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20">
              <ZapIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm">TecoRank™</div>
              <div className="font-bold text-xl">{userData.tecoRank}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20">
              <AwardIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm">Level</div>
              <div className="font-bold">{userData.rankLevel}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20">
              <StarIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm">Percentile</div>
              <div className="font-bold">Top {100 - userData.rankPercentile}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with tabs */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex mb-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">{userData.bio}</p>
                  </CardContent>
                </Card>
                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>Skills evaluated through projects and AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {userData.skills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span className="font-medium">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                {/* Recent Projects */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Recent Projects</CardTitle>
                      <Button variant="outline" className="text-tecolab-navy">View All</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {userData.projects.slice(0,2).map((project) => (
                        <div key={project.id} className="flex flex-col sm:flex-row gap-4 pb-6 border-b last:border-0 last:pb-0">
                          <div className="sm:w-1/4">
                            <div className="h-28 w-full rounded-lg overflow-hidden">
                              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                            </div>
                          </div>
                          <div className="sm:w-3/4">
                            <h3 className="text-lg font-semibold text-tecolab-navy">{project.title}</h3>
                            <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.skills.map((skill, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                              ))}
                            </div>
                            <div className="flex justify-between items-center mt-3">
                              <div className="flex items-center gap-2">
                                <Badge className={
                                  project.status === 'Completed'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }>
                                  {project.status}
                                </Badge>
                                <span className="text-sm text-gray-400">{project.contribution}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <span className="font-medium">Performance:</span>
                                <span className={`font-bold ${
                                  project.performance >= 90 ? 'text-green-400' :
                                  project.performance >= 75 ? 'text-tecolab-teal' : 'text-yellow-400'
                                }`}>
                                  {project.performance}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-8">
                {/* Achievements */}
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.achievements.map((ach, i) => (
                        <div key={i} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
                          <div className="h-10 w-10 rounded-full bg-tecolab-teal/10 flex items-center justify-center text-tecolab-teal">
                            {getIcon(ach.icon)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-tecolab-navy">{ach.title}</h3>
                            <p className="text-sm text-gray-400 mt-1">{ach.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{ach.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                {/* Performance Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                    <CardDescription>AI-evaluated performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(userData.performanceMetrics).map(([key, value]) => {
                        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        return (
                          <div key={key}>
                            <div className="flex justify-between text-sm mb-1">
                              <span>{formattedKey}</span>
                              <span className="font-medium">{value}%</span>
                            </div>
                            <Progress value={value} className="h-2" />
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
                {/* Learning Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Recommendations</CardTitle>
                    <CardDescription>Based on your projects and skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-3 pb-4 border-b">
                        <div className="h-10 w-10 rounded-full bg-tecolab-navy/10 flex items-center justify-center text-tecolab-navy">
                          <MonitorIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-tecolab-navy">TypeScript Mastery</h3>
                          <p className="text-sm text-gray-400 mt-1">Deepen your knowledge of static typing in JS apps</p>
                        </div>
                      </div>
                      <div className="flex gap-3 pb-4 border-b">
                        <div className="h-10 w-10 rounded-full bg-tecolab-navy/10 flex items-center justify-center text-tecolab-navy">
                          <CodeIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-tecolab-navy">Advanced Node.js Patterns</h3>
                          <p className="text-sm text-gray-400 mt-1">Explore event-driven and scalable backend design</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-tecolab-navy/10 flex items-center justify-center text-tecolab-navy">
                          <BookOpenIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-tecolab-navy">Effective Project Management</h3>
                          <p className="text-sm text-gray-400 mt-1">Boost your delivery with agile and Kanban methods</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="mt-6">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Project History</CardTitle>
                    <Button variant="outline" className="text-tecolab-navy">Find New Projects</Button>
                  </div>
                  <CardDescription>All projects you've participated in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {userData.projects.map((project) => (
                      <div key={project.id} className="flex flex-col md:flex-row gap-6 pb-8 border-b last:border-0 last:pb-0">
                        <div className="md:w-1/3">
                          <div className="h-40 w-full rounded-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <h3 className="text-xl font-semibold text-tecolab-navy">{project.title}</h3>
                          <p className="text-gray-400 mt-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.skills.map((skill, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                            ))}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Status</h4>
                              <Badge className={
                                project.status === 'Completed'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }>
                                {project.status}
                              </Badge>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Role</h4>
                              <p className="mt-1">{project.contribution}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Performance Rating</h4>
                              <div className="mt-1 flex items-center gap-2">
                                <span className={`font-bold text-lg ${
                                  project.performance >= 90 ? 'text-green-400' :
                                  project.performance >= 75 ? 'text-tecolab-teal' : 'text-yellow-400'
                                }`}>
                                  {project.performance}%
                                </span>
                                <div className="w-32">
                                  <Progress value={project.performance} className="h-2" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Skills Impact</h4>
                              <p className="mt-1 text-tecolab-teal">
                                +{Math.floor(project.performance / 10)} skill points
                              </p>
                            </div>
                          </div>
                          <div className="mt-6 flex gap-3">
                            <Button variant="outline" className="text-tecolab-navy">View Project</Button>
                            <Button variant="outline" className="text-tecolab-navy">View Evaluation</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Summary</CardTitle>
                    <CardDescription>AI-evaluated skills and performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Object.entries(userData.performanceMetrics).map(([key, value]) => {
                        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        let color = 'bg-gray-100 text-gray-800';
                        if (value >= 90) color = 'bg-green-100 text-green-800';
                        else if (value >= 80) color = 'bg-teal-100 text-teal-800';
                        else if (value >= 70) color = 'bg-blue-100 text-blue-800';
                        else if (value >= 60) color = 'bg-yellow-100 text-yellow-800';
                        return (
                          <div key={key} className={`p-4 rounded-lg ${color}`}>
                            <h3 className="font-semibold">{formattedKey}</h3>
                            <div className="flex items-end gap-2 mt-2">
                              <span className="text-2xl font-bold">{value}%</span>
                              <span className="text-sm">
                                {value >= 90 ? 'Excellent' :
                                  value >= 80 ? 'Very Good' :
                                    value >= 70 ? 'Good' :
                                      value >= 60 ? 'Average' : 'Needs Improvement'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">Performance Over Time</h3>
                      <div className="h-56 bg-gray-800 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Performance chart will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Skills Breakdown</CardTitle>
                    <CardDescription>Technical and soft skills analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-4">Technical Skills</h3>
                        <div className="space-y-4">
                          {userData.skills.slice(0, 5).map((skill, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-sm mb-1">
                                <span>{skill.name}</span>
                                <span className="font-medium">{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Soft Skills</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Communication</span>
                              <span className="font-medium">{userData.performanceMetrics.communication}%</span>
                            </div>
                            <Progress value={userData.performanceMetrics.communication} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Teamwork</span>
                              <span className="font-medium">{userData.performanceMetrics.teamwork}%</span>
                            </div>
                            <Progress value={userData.performanceMetrics.teamwork} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Problem Solving</span>
                              <span className="font-medium">{userData.performanceMetrics.problemSolving}%</span>
                            </div>
                            <Progress value={userData.performanceMetrics.problemSolving} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Project Management</span>
                              <span className="font-medium">{userData.performanceMetrics.projectManagement}%</span>
                            </div>
                            <Progress value={userData.performanceMetrics.projectManagement} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-8">
                {/* Rank Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle>TecoRank™ Analysis</CardTitle>
                    <CardDescription>Understanding your ranking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="h-28 w-28 rounded-full bg-tecolab-navy flex items-center justify-center text-white text-3xl font-bold">
                          {userData.tecoRank}
                        </div>
                        <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-tecolab-teal flex items-center justify-center text-white">
                          <AwardIcon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-tecolab-navy">{userData.rankLevel}</h3>
                      <p className="text-gray-400">Top {100 - userData.rankPercentile}% of all users</p>
                      <div className="w-full mt-6 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Ranking Factors</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex justify-between">
                              <span>Project Performance</span>
                              <span className="font-medium">+420</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Skill Growth</span>
                              <span className="font-medium">+180</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Teamwork</span>
                              <span className="font-medium">+95</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Consistency</span>
                              <span className="font-medium">+80</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1">Rank Progress</h4>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Current: {userData.tecoRank}</span>
                              <span>Next: 800</span>
                            </div>
                            <Progress value={(userData.tecoRank % 100) * 2} className="h-2" />
                            <p className="text-xs text-gray-500">
                              {50 - (userData.tecoRank % 100) * 0.5} points to next level
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Areas for Improvement */}
                <Card>
                  <CardHeader>
                    <CardTitle>Areas for Improvement</CardTitle>
                    <CardDescription>AI-recommended focus areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                        <h3 className="font-medium text-yellow-800">Project Management</h3>
                        <p className="text-sm text-yellow-700 mt-1">
                          Focus on improving planning and task tracking for larger projects.
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                        <h3 className="font-medium text-blue-800">GraphQL Skills</h3>
                        <p className="text-sm text-blue-700 mt-1">
                          Explore advanced GraphQL queries and API integration.
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                        <h3 className="font-medium text-purple-800">UI/UX Design</h3>
                        <p className="text-sm text-purple-700 mt-1">
                          Enhance your design workflow for more engaging interfaces.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Resources */}
                <Card>
                  <CardHeader>
                    <CardTitle>Resources and Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-tecolab-navy/10 flex items-center justify-center text-tecolab-navy">
                          <BookOpenIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-tecolab-navy">Kanban for Developers</h3>
                          <p className="text-xs text-gray-500 mt-1">Course • 4 hours</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-tecolab-navy/10 flex items-center justify-center text-tecolab-navy">
                          <CodeIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-tecolab-navy">Mastering GraphQL</h3>
                          <p className="text-xs text-gray-500 mt-1">Tutorial • 6 parts</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-tecolab-navy/10 flex items-center justify-center text-tecolab-navy">
                          <MonitorIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-tecolab-navy">UI/UX Fundamentals</h3>
                          <p className="text-xs text-gray-500 mt-1">Workshop • Interactive</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full btn-primary mt-4">
                      View Learning Path
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}