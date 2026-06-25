import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 160;
    canvas.height = window.innerHeight;

    const fontSize = 12;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);

    const chars = "01アイウエオカキクケコ</>{}[]#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef";

    let animId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(6, 13, 26, 0.07)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * fontSize;

        if (drops[i] < 3) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 10;
        } else {
          const alpha = Math.random() * 0.5 + 0.4;
          ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.shadowColor = "#38bdf8";
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
    <div className="fixed right-0 top-0 h-full pointer-events-none z-0" style={{ width: 160, opacity: 0.25 }}>
      <canvas ref={canvasRef} className="h-full" />
    </div>
  );
}
