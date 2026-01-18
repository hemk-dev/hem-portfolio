"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const CanvasRevealEffectNoSSR = dynamic(
  () => import("./canvas-reveal-effect").then((mod) => ({ default: mod.CanvasRevealEffect })),
  {
    ssr: false,
    loading: () => <div className={cn("absolute inset-0 bg-transparent")} />,
  }
);

export const CanvasRevealEffect = CanvasRevealEffectNoSSR;
