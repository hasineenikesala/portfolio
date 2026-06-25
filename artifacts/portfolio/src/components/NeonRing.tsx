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
          background: `conic-gradient(from 0deg, transparent 0deg, hsl(var(--primary)) 90deg, hsl(var(--secondary)) 180deg, transparent 360deg)`
        }}
      />
      <div className={cn("relative h-full w-full rounded-full bg-background z-10 flex items-center justify-center overflow-hidden", innerClassName)}>
        {children}
      </div>
      <div className="absolute inset-0 rounded-full box-glow-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
