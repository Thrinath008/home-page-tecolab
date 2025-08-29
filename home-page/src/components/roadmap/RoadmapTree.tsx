"use client";

import * as React from "react";
import type { CourseRoadmap, Module, Topic, RoadmapTokens } from "./types";
import { DEFAULT_TOKENS } from "./types";

export type RoadmapTreeProps = {
  data: CourseRoadmap;
  onModuleClick?: (moduleId: string) => void;
  onTopicClick?: (moduleId: string, topicId: string) => void;
  renderModuleNode?: (module: Module, state: NodeState) => React.ReactNode;
  renderTopicNode?: (topic: Topic, parent: Module, state: NodeState) => React.ReactNode;
  renderEdge?: (fromId: string, toId: string, state: NodeState) => React.ReactNode;
  theme?: Partial<RoadmapTokens>;
  collapsible?: boolean;
  layout?: "lr" | "tb";
  showAvatar?: boolean;
  fitView?: boolean;
  className?: string;
};

type NodeState = "locked" | "available" | "in-progress" | "completed";

export default function RoadmapTree({
  data,
  onModuleClick,
  onTopicClick,
  renderModuleNode,
  renderTopicNode,
  renderEdge,
  theme,
  collapsible = true,
  layout = "lr",
  showAvatar = true,
  className,
}: RoadmapTreeProps) {
  const tokens = { ...DEFAULT_TOKENS, ...(theme ?? {}) };
  const [open, setOpen] = React.useState<Record<string, boolean>>(
    Object.fromEntries(data.modules.map((m) => [m.id, true]))
  );

  const isCurrent = (mId: string, tId?: string) =>
    data.current &&
    data.current.moduleId === mId &&
    (tId ? data.current.topicId === tId : !data.current.topicId);

  return (
    <div
      className={
        "relative w-full overflow-x-auto rounded-2xl border border-white/10 bg-[color:var(--tree-bg)] p-6 " +
        (className ?? "")
      }
      style={{ ["--tree-bg" as any]: tokens.surface }}
      role="group"
      aria-label="Course roadmap (tree)"
    >
      <div className="grid grid-cols-[260px,1fr] gap-6">
        {/* LEFT: Modules list */}
        <div className="space-y-4">
          {data.modules.map((m) => {
            const state = m.status as NodeState;
            const color = colorForState(state, tokens);
            const opened = open[m.id];

            return (
              <div key={m.id} className="relative">
                <div className="flex items-center gap-2">
                  {/* Module button */}
                  <button
                    type="button"
                    onClick={() => onModuleClick?.(m.id)}
                    className="flex w-full items-center gap-3 rounded-xl border p-3 text-left transition hover:bg-white/5 focus-visible:outline-none"
                    style={{ borderColor: color, background: tokens.card }}
                    aria-label={`Module: ${m.title} (${m.status})`}
                  >
                    <div
                      className="h-5 w-5 flex-shrink-0 rounded-full border"
                      style={{ borderColor: color, boxShadow: `0 0 0 2px ${color} inset` }}
                    />
                    <div className="min-w-0">
                      <div className="truncate text-sm text-white">{m.title}</div>
                      {m.summary && <div className="truncate text-xs text-white/70">{m.summary}</div>}
                    </div>
                    {isCurrent(m.id) && showAvatar && (
                      <div className="ml-auto h-6 w-6 rounded-full border border-white/30 bg-white/90 text-[10px] font-semibold text-black shadow">
                        <div className="flex h-full items-center justify-center">You</div>
                      </div>
                    )}
                  </button>

                  {/* Collapse toggle (sibling, not nested) */}
                  {collapsible && (
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label={opened ? "Collapse topics" : "Expand topics"}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen((s) => ({ ...s, [m.id]: !s[m.id] }));
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpen((s) => ({ ...s, [m.id]: !s[m.id] }));
                        }
                      }}
                      className="select-none rounded-lg border border-white/10 px-2 py-1 text-xs text-white/70 hover:bg-white/10"
                      style={{ background: tokens.card }}
                    >
                      {opened ? "−" : "+"}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: Topics canvas */}
        <div className="relative">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
            {data.modules.map((m, mi) => {
              const yBase = moduleRowTop(mi);
              const opened = open[m.id];

              return (
                <React.Fragment key={`edges-${m.id}`}>
                  {opened &&
                    m.topics.map((t, ti) => {
                      const yTopic = yBase + topicRowOffset(ti);
                      const state = (t.status as NodeState) ?? "available";
                      const color = colorForState(state, tokens);

                      const x0 = 260; // right edge of module column
                      const y0 = yBase + 18;
                      const x1 = 320;
                      const y1 = yTopic + 14;
                      const d = `M ${x0},${y0} C ${x0 + 60},${y0} ${x1 - 60},${y1} ${x1},${y1}`;

                      return (
                        <path
                          key={`edge-${m.id}-${t.id}`}
                          d={d}
                          fill="none"
                          stroke={color}
                          strokeOpacity={0.5}
                          strokeWidth={2}
                          strokeDasharray={t.status === "locked" ? "4 6" : "0"}
                        />
                      );
                    })}
                </React.Fragment>
              );
            })}
          </svg>

          <div className="space-y-10">
            {data.modules.map((m, mi) => {
              const opened = open[m.id];
              return (
                <div key={`row-${m.id}`} style={{ paddingTop: 6 }}>
                  <div className="space-y-2">
                    {opened &&
                      m.topics.map((t, ti) => {
                        const state = t.status as NodeState;
                        const color = colorForState(state, tokens);
                        const current = isCurrent(m.id, t.id);

                        return (
                          <div key={t.id} className="ml-[320px] flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => onTopicClick?.(m.id, t.id)}
                              className="flex items-center gap-3 rounded-xl border p-3 pr-4 text-left transition hover:bg-white/5 focus-visible:outline-none"
                              style={{ borderColor: color, background: tokens.card }}
                              aria-label={`Topic: ${t.title} (${t.status})`}
                            >
                              <div
                                className="h-4 w-4 flex-shrink-0 rounded-full border"
                                style={{ borderColor: color, boxShadow: `0 0 0 2px ${color} inset` }}
                              />
                              <div className="min-w-0">
                                <div className="truncate text-sm text-white">{t.title}</div>
                              </div>
                              {current && (
                                <div className="ml-auto h-6 w-6 rounded-full border border-white/30 bg-white/90 text-[10px] font-semibold text-black shadow">
                                  <div className="flex h-full items-center justify-center">You</div>
                                </div>
                              )}
                            </button>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function moduleRowTop(index: number) {
  return index * 96; // row height
}
function topicRowOffset(ti: number) {
  return ti * 48; // topic spacing
}
function colorForState(state: NodeState, t: RoadmapTokens): string {
  switch (state) {
    case "completed": return t.states.completed;
    case "in-progress": return t.states.inProgress;
    case "locked": return t.states.locked;
    default: return t.states.available;
  }
}
