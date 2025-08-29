"use client";

import * as React from "react";

type Props = {
  value: "linear" | "tree";
  onChange: (view: "linear" | "tree") => void;
  labels?: { linear?: string; tree?: string };
  className?: string;
};

export default function RoadmapViewToggle({
  value,
  onChange,
  labels = { linear: "Journey", tree: "Map" },
  className,
}: Props) {
  return (
    <div
      className={
        "inline-flex overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur " +
        (className ?? "")
      }
      role="tablist"
      aria-label="Roadmap view"
    >
      {(["linear", "tree"] as const).map((k) => {
        const active = value === k;
        return (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(k)}
            className={
              "px-4 py-2 text-sm transition " +
              (active ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10")
            }
          >
            {k === "linear" ? labels.linear : labels.tree}
          </button>
        );
      })}
    </div>
  );
}
