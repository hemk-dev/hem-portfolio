"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface ArchitectureDiagramProps {
  diagram: string;
  title?: string;
}

export default function ArchitectureDiagram({
  diagram,
  title,
}: ArchitectureDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (diagramRef.current && diagram) {
      mermaid.initialize({
        startOnLoad: true,
        theme: "default",
        securityLevel: "loose",
      });

      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      diagramRef.current.id = id;

      mermaid.render(id, diagram).then((result) => {
        if (diagramRef.current) {
          diagramRef.current.innerHTML = result.svg;
        }
      });
    }
  }, [diagram]);

  if (!diagram) return null;

  return (
    <div className="my-8">
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div
        ref={diagramRef}
        className="flex justify-center items-center bg-gray-50 rounded-lg p-6 overflow-x-auto"
      />
    </div>
  );
}
