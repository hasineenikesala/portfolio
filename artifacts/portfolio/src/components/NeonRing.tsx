import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeonRingProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export function NeonRing({ children, className, innerClassName }: NeonRingProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-full p-[3px] flex-shrink-0 group", className)}>
      <div
        className="absolute -inset-[50%] animate-spin-glow"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, #38bdf8 60deg, #60d9ff 120deg, transparent 200deg, #38bdf8 280deg, transparent 360deg)`
        }}
      />
      <div className={cn("relative h-full w-full rounded-full bg-background z-10 flex items-center justify-center overflow-hidden", innerClassName)}>
        {children}
      </div>
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: "0 0 25px rgba(56,189,248,0.6), 0 0 50px rgba(56,189,248,0.2)" }}
      />
    </div>
  );
}
