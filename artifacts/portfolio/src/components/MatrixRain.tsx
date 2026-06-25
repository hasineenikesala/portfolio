import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = 180;
      canvas.height = window.innerHeight;
    };
    resize();

    const fontSize = 13;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ</>{}[]()#$%^&*";

    let animId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(8, 15, 30, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * fontSize;

        // Lead character glows bright
        if (drops[i] * fontSize < canvas.height * 0.1) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#00df9a";
          ctx.shadowBlur = 8;
        } else {
          const alpha = Math.random() * 0.5 + 0.5;
          ctx.fillStyle = `rgba(0, 223, 154, ${alpha})`;
          ctx.shadowColor = "#00df9a";
          ctx.shadowBlur = 4;
        }

        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, i * fontSize, y);
        ctx.shadowBlur = 0;

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="fixed right-0 top-0 h-full w-[180px] pointer-events-none z-0 opacity-30">
      <canvas ref={canvasRef} className="h-full" />
    </div>
  );
}
