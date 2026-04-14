"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderTop: "1px solid var(--color-border)" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "1.5rem",
              padding: "1.5rem 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "var(--color-ink)",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
                flex: 1,
              }}
            >
              {item.question}
            </span>
            <span
              style={{
                fontSize: "1.25rem",
                color: "var(--color-muted)",
                flexShrink: 0,
                marginTop: "0.125rem",
                transition: "transform 0.25s ease",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                display: "block",
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              +
            </span>
          </button>

          {open === i && (
            <div style={{ paddingBottom: "1.75rem" }}>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "var(--color-ink-secondary)",
                  margin: 0,
                  maxWidth: "none",
                }}
              >
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
      <div style={{ borderTop: "1px solid var(--color-border)" }} />
    </div>
  );
}
