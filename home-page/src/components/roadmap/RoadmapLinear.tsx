"use client";

import * as React from "react";
import type { CourseRoadmap, Module, Topic, RoadmapTokens } from "./types";
import { DEFAULT_TOKENS } from "./types";

type NodeState = "locked" | "available" | "in-progress" | "completed";

export type RoadmapLinearProps = {
  data: CourseRoadmap;
  onModuleClick?: (moduleId: string) => void;
  onTopicClick?: (moduleId: string, topicId: string) => void;
  renderModuleNode?: (module: Module, state: NodeState) => React.ReactNode;
  renderTopicNode?: (topic: Topic, parent: Module, state: NodeState) => React.ReactNode;
  renderTooltip?: (payload: { type: "module" | "topic"; item: Module | Topic }) => React.ReactNode;
  theme?: Partial<RoadmapTokens>;
  density?: "compact" | "comfortable" | "spacious";
  showLabels?: boolean;
  wrapOnSmallScreens?: boolean;
  showAvatar?: boolean;
  showProgressFill?: boolean;
  className?: string;
};

export default function RoadmapLinear({
  data,
  onModuleClick,
  onTopicClick,
  renderModuleNode,
  renderTopicNode,
  renderTooltip,
  theme,
  density = "comfortable",
  showLabels = true,
  wrapOnSmallScreens = false,
  showAvatar = true,
  showProgressFill = true,
  className,
}: RoadmapLinearProps) {
  const tokens = { ...DEFAULT_TOKENS, ...(theme ?? {}) };

  const sequence: Array<
    | { kind: "module"; module: Module }
    | { kind: "topic"; module: Module; topic: Topic }
  > = React.useMemo(() => {
    const out: Array<any> = [];
    data.modules.forEach((m) => {
      out.push({ kind: "module", module: m });
      m.topics.forEach((t) => out.push({ kind: "topic", module: m, topic: t }));
    });
    return out;
  }, [data.modules]);

  const currentIndex = React.useMemo(() => {
    if (!data.current) return -1;
    const { moduleId, topicId } = data.current;
    let idx = -1;
    for (let i = 0; i < sequence.length; i++) {
      const it = sequence[i];
      if (it.kind === "module" && it.module.id === moduleId && !topicId) { idx = i; break; }
      if (it.kind === "topic" && it.module.id === moduleId && it.topic.id === topicId) { idx = i; break; }
    }
    return idx;
  }, [sequence, data.current]);

  const gap = density === "compact" ? 48 : density === "spacious" ? 120 : 80;
  const nodeSize = 28;
  const milestoneSize = 50;
  const roadHeight = 4;

  const progressPct = React.useMemo(() => {
    if (!showProgressFill || currentIndex < 0 || sequence.length <= 1) return 0;
    return (currentIndex / (sequence.length - 1)) * 100;
  }, [showProgressFill, currentIndex, sequence.length]);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const focusIndexRef = React.useRef<number>(Math.max(0, currentIndex));
  const focusNode = (i: number) => {
    const el = containerRef.current?.querySelector<HTMLElement>(`[data-node-idx="${i}"]`);
    if (el) el.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusIndexRef.current = Math.min(sequence.length - 1, focusIndexRef.current + 1);
      focusNode(focusIndexRef.current);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusIndexRef.current = Math.max(0, focusIndexRef.current - 1);
      focusNode(focusIndexRef.current);
    }
  };

  const renderDefaultModule = (m: Module) => {
    const state = m.status as NodeState;
    const bg = colorForState(state, tokens);

    return (
      <div className="flex flex-col items-center" title={m.title}>
        <div
          className="flex items-center justify-center rounded-2xl border transition-transform hover:scale-105"
          style={{
            width: milestoneSize,
            height: milestoneSize,
            background: tokens.card,
            borderColor: bg,
            boxShadow:
              state === "completed"
                ? `0 0 10px ${bg}, 0 0 20px ${bg}`
                : `0 0 0 2px ${bg} inset`,
          }}
        >
          <span className="text-xl">📘</span>
        </div>

        {/* Title */}
        <div className="mt-2 w-40 text-center text-sm font-semibold text-blue-300">
          {m.title}
        </div>

        {/* Summary */}
        <div className="mt-1 w-40 text-center text-xs text-gray-400">
          {m.summary}
        </div>

        {/* Difficulty Badge */}
        {m.difficulty && (
          <span
            className="mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium"
            style={{
              backgroundColor: bg,
              color: state === "locked" ? "#888" : "#fff",
            }}
          >
            {m.difficulty}
          </span>
        )}
      </div>
    );
  };

  const renderDefaultTopic = (t: Topic) => {
    const state = t.status as NodeState;
    const bg = colorForState(state, tokens);

    const icon =
      state === "completed"
        ? "✅"
        : state === "in-progress"
        ? "🔄"
        : state === "locked"
        ? "🔒"
        : "🟢";

    return (
      <div className="flex flex-col items-center" title={t.title}>
        <div
          className="flex items-center justify-center rounded-full border transition-transform hover:scale-110"
          style={{
            width: nodeSize,
            height: nodeSize,
            background: tokens.card,
            borderColor: bg,
            boxShadow:
              state === "completed"
                ? `0 0 6px ${bg}`
                : `0 0 0 2px ${bg} inset`,
          }}
        >
          <span className="text-xs">{icon}</span>
        </div>

        {/* Topic Title */}
        <div className="mt-1 w-28 text-center text-[10px] text-gray-300">
          {t.title}
        </div>
      </div>
    );
  };

  return (
    <div
      className={
        "relative w-full overflow-x-auto rounded-2xl border border-white/10 bg-[color:var(--road-bg)] p-6 " +
        (className ?? "")
      }
      style={{ ["--road-bg" as any]: tokens.surface }}
      onKeyDown={onKeyDown}
      ref={containerRef}
      role="group"
      aria-label="Course roadmap"
    >
      <div className="relative mx-4">
        {/* Road line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: 22,
            height: roadHeight,
            background: tokens.line,
            borderRadius: 999,
          }}
          aria-hidden
        />
        {showProgressFill && (
          <div
            className="absolute left-0"
            style={{
              top: 22,
              height: roadHeight,
              width: `${progressPct}%`,
              background: "linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)",
              borderRadius: 999,
              boxShadow: "0 0 10px rgba(59,130,246,0.7)",
            }}
            aria-hidden
          />
        )}

        {/* Nodes */}
        <div
          className="relative flex"
          style={{
            gap: `${gap}px`,
            paddingLeft: 8,
            paddingRight: 8,
            alignItems: "center",
          }}
        >
          {sequence.map((item, idx) => {
            const isCurrent = idx === currentIndex;
            const label =
              item.kind === "module"
                ? `Module: ${item.module.title} (${item.module.status})`
                : `Topic: ${item.topic.title} (${item.topic.status})`;

            const handleClick = () => {
              if (item.kind === "module") onModuleClick?.(item.module.id);
              else onTopicClick?.(item.module.id, item.topic.id);
            };

            const state = (item.kind === "module"
              ? item.module.status
              : item.topic.status) as NodeState;

            const nodeEl =
              item.kind === "module"
                ? renderModuleNode?.(item.module, state) ??
                  renderDefaultModule(item.module)
                : renderTopicNode?.(item.topic, item.module, state) ??
                  renderDefaultTopic(item.topic);

            return (
              <div key={idx} className="relative">
                {showAvatar && isCurrent && (
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 animate-pulse"
                    aria-hidden
                  >
                    <div className="h-8 w-8 rounded-full border-2 border-blue-400 bg-blue-500 text-xs font-bold text-black shadow-lg">
                      <div className="flex h-full items-center justify-center">
                        You
                      </div>
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  data-node-idx={idx}
                  onClick={handleClick}
                  className="focus-visible:outline-none"
                  aria-label={label}
                >
                  {nodeEl}
                </button>
                {renderTooltip && (
                  <div className="sr-only" aria-live="polite" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function colorForState(state: NodeState, t: RoadmapTokens) {
  switch (state) {
    case "completed":
      return t.states.completed;
    case "in-progress":
      return t.states.inProgress;
    case "locked":
      return t.states.locked;
    default:
      return t.states.available;
  }
}