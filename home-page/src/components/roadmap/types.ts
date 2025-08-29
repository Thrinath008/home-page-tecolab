export type TopicStatus = "locked" | "available" | "in-progress" | "completed";
export type ModuleStatus = TopicStatus;

export type Topic = {
  id: string;
  title: string;
  status: TopicStatus;
};

export type Module = {
  id: string;
  title: string;
  summary?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  topics: Topic[];
  status: ModuleStatus;
  dependsOn?: string[];
};

export type CourseRoadmap = {
  courseId: string;
  title: string;
  estimatedTime?: string;
  modules: Module[];
  current: { moduleId: string; topicId?: string } | null;
  access?: { entitled: boolean };
};

export type RoadmapTokens = {
  primaryBg: string;
  surface: string;
  card: string;
  text: string;
  line: string;
  states: {
    available: string;
    inProgress: string;
    completed: string;
    locked: string;
  };
  difficulty: { Easy: string; Medium: string; Hard: string };
};

export const DEFAULT_TOKENS: RoadmapTokens = {
  primaryBg: "#122236",
  surface: "#0d182b",
  card: "#162740",
  text: "#ffffff",
  line: "rgba(255,255,255,0.18)",
  states: {
    available: "#00B5D8",
    inProgress: "#7C3AED",
    completed: "#3BA55D",
    locked: "#6B7280",
  },
  difficulty: {
    Easy: "#00B5D8",
    Medium: "#F59E0B",
    Hard: "#7C3AED",
  },
};
