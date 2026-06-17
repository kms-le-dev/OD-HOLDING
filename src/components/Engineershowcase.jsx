/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Rocket,
  Sparkles,
  Orbit,
  Cpu,
  Atom,
  Star,
} from "lucide-react";
import profilImg from "../assets/profil.png";

const PHOTO_SRC = profilImg;

const LANGUAGES = [
  { label: "PHP", bg: "#777BB4", color: "#ffffff" },
  { label: "LARAVEL", bg: "#FF2D20", color: "#ffffff" },
  { label: "JAVASCRIPT", bg: "#F7DF1E", color: "#0f1b33" },
  { label: "REACT JS", bg: "#61DAFB", color: "#0f1b33" },
  { label: "REACT NATIVE", bg: "#0f1b33", color: "#61DAFB" },
  { label: "PYTHON", bg: "#3776AB", color: "#ffffff" },
  { label: "HTML", bg: "#E34F26", color: "#ffffff" },
  { label: "CSS", bg: "#1572B6", color: "#ffffff" },
  { label: "MYSQL", bg: "#4479A1", color: "#ffffff" },
  { label: "GIT", bg: "#F05032", color: "#ffffff" },
];
const GALAXY_ICONS = [Rocket, Sparkles, Orbit, Cpu, Atom, Star];

function ringPosition(index, total, radius) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return { left: `${x}%`, top: `${y}%` };
}

function OrbitRing({ icons, radius, spinClass = "", counterClass = "", badgeClass = "", trackClass = "" }) {
  return (
    <div className="orbit-fill">
      <div className={`orbit-track ${trackClass}`} />
      <div className={`orbit-spin ${spinClass}`}>
        {icons.map((Icon, i) => {
          const pos = ringPosition(i, icons.length, radius);
          return (
            <div key={i} className="orbit-icon-pos" style={pos}>
              <div className={`orbit-badge ${badgeClass} ${counterClass}`}>
                <Icon size={15} strokeWidth={2.4} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LangRing({ languages, radius }) {
  return (
    <div className="orbit-fill">
      <div className="orbit-track" />
      <div className="orbit-spin lang-spin">
        {languages.map((lang, i) => {
          const pos = ringPosition(i, languages.length, radius);
          return (
            <div key={i} className="orbit-icon-pos" style={pos}>
              <div
                className="lang-badge"
                style={{ background: lang.bg, color: lang.color }}
              >
                {lang.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TypedHeading() {
  const phrase = "Ingénieur Génie Logiciel";
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let delay = deleting ? 45 : 95;
    if (!deleting && text === phrase) delay = 2200;
    if (deleting && text === "") delay = 700;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < phrase.length) {
          setText(phrase.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(phrase.slice(0, text.length - 1));
        } else {
          setDeleting(false);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting]);

  return (
    <div className="typed-row">
      <span className="typed-text">{text}</span>
      <span className="typed-cursor">|</span>
    </div>
  );
}

const STARS = [
  { x: 18, y: 16 },
  { x: 78, y: 22 },
  { x: 62, y: 78 },
  { x: 14, y: 72 },
  { x: 86, y: 60 },
  { x: 46, y: 10 },
];

const GLYPHS = [
  { x: 14, y: 18, t: "</>" },
  { x: 80, y: 20, t: "{ }" },
  { x: 70, y: 78, t: "01" },
];

export default function EngineerShowcase() {
  return (
    <div className="es-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .es-root {
          --ink: #0f1b33;
          --muted: #5b6b86;
          --blue: #2563eb;
          --cyan: #06b6d4;
          --violet: #7c3aed;
          --indigo: #4f46e5;
          --pink: #f472b6;
          --paper: #ffffff;
          width: 100%;
          max-width: 100%;
          margin-top: -20%;
          min-height: 100%;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 16px 56px;
          box-sizing: border-box;
          font-family: 'Inter', system-ui, sans-serif;
          overflow-x: hidden;
        }

        .es-root * {
          box-sizing: border-box;
        }

        .stage {
          position: relative;
          width: 100%;
          max-width: 640px;
          aspect-ratio: 3 / 4;
        }

        .photo-wrap {
          position: absolute;
          inset: 0;
          overflow: visible;
          border-radius: 50px;
        //   box-shadow:
        //     0 40px 70px -30px rgba(15, 27, 51, 0.22),
        //     0 0 0 1px rgba(15, 27, 51, 0.05);
          background: #fff;
        }

        .photo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: kenburns 10s ease-in-out infinite;
          transform-origin: 50% 35%;
        }

        @keyframes kenburns {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.07); }
        }

        /* ---------- Orbit rings ---------- */

        /* Outer wrapper: this is the one that gets POSITIONED on the photo
           (over the globe, or over the empty hand). It owns left/top/width. */
        .orbit {
          position: absolute;
          aspect-ratio: 1 / 1;
          z-index: 5;
          pointer-events: none;
        }

        /* Inner wrapper rendered by OrbitRing / LangRing: it must completely
           fill the outer .orbit box (same size, same center) — this is the
           piece that was missing before, which made the rings collapse to a
           tiny block in the corner instead of circling the globe/hand. */
        .orbit-fill {
          position: absolute;
          inset: 0;
        }

        .orbit-left {
          left: 17%;
          top: 48%;
          width: 52%;
          transform: translate(-50%, -50%);
        }

        .orbit-right {
          left: 84%;
          top: 60%;
          width: 44%;
          transform: translate(-50%, -50%);
        }

        .orbit-track {
          position: absolute;
          inset: 6%;
          border-radius: 50%;
          border: 1.4px dashed rgba(37, 99, 235, 0.3);
        }

        .track-galaxy {
          border: 1.4px dashed rgba(124, 58, 237, 0.32);
        }

        .orbit-spin {
          position: absolute;
          inset: 0;
          animation: spin 17s linear infinite;
        }

        .spin-reverse-ring {
          animation: spinReverse 22s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .orbit-icon-pos {
          position: absolute;
          transform: translate(-50%, -50%);
        }

        .orbit-badge {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          box-shadow: 0 6px 14px -4px rgba(15, 27, 51, 0.28), 0 0 0 1px rgba(15,27,51,0.04);
          animation: spinReverse 17s linear infinite;
        }

        .badge-counter-galaxy {
          animation: spin 22s linear infinite;
        }

        .badge-code { color: var(--blue); }
        .badge-galaxy { color: var(--violet); }

        .lang-spin {
          animation: spin 30s linear infinite;
        }

        .lang-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          padding: 5px 10px;
          border-radius: 999px;
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: clamp(9px, 1.7vw, 11.5px);
          letter-spacing: 0.01em;
          box-shadow: 0 8px 16px -6px rgba(15, 27, 51, 0.32), 0 0 0 1px rgba(15,27,51,0.05);
          animation: spinReverse 30s linear infinite;
        }

        /* glow + stars for galaxy side */
        .galaxy-glow {
          position: absolute;
          inset: 14%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(124,58,237,0.32), rgba(79,70,229,0.12) 55%, transparent 75%);
          filter: blur(2px);
          animation: pulseGlow 4.2s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.55; transform: scale(0.92); }
          50% { opacity: 0.95; transform: scale(1.08); }
        }

        .star-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 6px 1.5px rgba(124, 58, 237, 0.85);
          animation: twinkle 2.4s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.6); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        .glyph-dot {
          position: absolute;
          font-family: 'Sora', monospace;
          font-size: 10px;
          font-weight: 700;
          color: rgba(37, 99, 235, 0.45);
          animation: twinkle 3s ease-in-out infinite;
          z-index: 2;
        }

        /* ---------- Typed heading ---------- */
        .typed-block {
          margin-top: 30px;
          text-align: center;
        }

        .typed-row {
          display: inline-flex;
          align-items: baseline;
          gap: 2px;
        }

        .typed-text {
          font-family: 'Sora', sans-serif;
          font-weight: 800;
          font-size: clamp(1.1rem, 6vw, 2.5rem);
          letter-spacing: -0.01em;
          background: linear-gradient(95deg, var(--blue) 10%, var(--violet) 60%, var(--pink) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          white-space: pre;
        }

        .typed-cursor {
          font-weight: 700;
          font-size: clamp(1.1rem, 6vw, 2.5rem);
          color: var(--violet);
          animation: blink 0.9s steps(1) infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .eyebrow {
          margin-top: 10px;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 600;
        }

        .underline {
          width: 64px;
          height: 3px;
          margin: 14px auto 0;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--blue), var(--violet));
        }

        @media (prefers-reduced-motion: reduce) {
          .photo-wrap img,
          .orbit-spin,
          .orbit-badge,
          .lang-spin,
          .lang-badge,
          .galaxy-glow,
          .star-dot,
          .glyph-dot,
          .typed-cursor {
            animation: none !important;
          }
        }

        @media (max-width: 480px) {
          .es-root {
            padding: 32px 10px 40px;
          }

          .orbit-left {
            left: 19%;
            top: 47%;
            width: 46%;
          }

          .orbit-right {
            left: 82%;
            top: 59%;
            width: 38%;
          }

          .orbit-badge {
            width: 24px;
            height: 24px;
          }

          .lang-badge {
            padding: 4px 8px;
            font-size: 8px;
          }

          .eyebrow {
            font-size: 0.68rem;
            letter-spacing: 0.12em;
          }
        }
      `}</style>

      <div className="stage">
        <div className="photo-wrap">
          <img src={PHOTO_SRC} alt="Ingénieur génie logiciel tenant un globe, illustrant le cycle de développement logiciel" />
        </div>

        <div className="orbit orbit-left">
          <LangRing languages={LANGUAGES} radius={46} />
        </div>

        <div className="orbit orbit-right">
          <div className="galaxy-glow" />
          {STARS.map((s, i) => (
            <div
              key={i}
              className="star-dot"
              style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: `${i * 0.35}s` }}
            />
          ))}
          {GLYPHS.map((g, i) => (
            <div
              key={i}
              className="glyph-dot"
              style={{ left: `${g.x}%`, top: `${g.y}%`, animationDelay: `${i * 0.5}s` }}
            >
              {g.t}
            </div>
          ))}
          <OrbitRing
            icons={GALAXY_ICONS}
            radius={44}
            trackClass="track-galaxy"
            badgeClass="badge-galaxy"
            spinClass="spin-reverse-ring"
            counterClass="badge-counter-galaxy"
          />
        </div>
      </div>

      <div className="typed-block">
        <TypedHeading />
        <div className="underline" />
        <div className="eyebrow">Du besoin au déploiement</div>
      </div>
    </div>
  );
}