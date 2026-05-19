import React from "react";
import { motion } from "framer-motion";

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    arrowRight: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    github: (
      <>
        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 4.9.4.3.7 1 .7 2v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
      </>
    ),
    cpu: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M9 1v3" />
        <path d="M15 1v3" />
        <path d="M9 20v3" />
        <path d="M15 20v3" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
}

const systems = [
  {
    id: "SYS-01",
    title: "Clay Deposition Printing",
    text: "Grasshopper toolpaths, extrusion control, slump behavior, and rule-based robotic clay workflows.",
  },
  {
    id: "SYS-02",
    title: "Thermoplastic FGF + Blowforming",
    text: "Pellet extrusion, preform expansion, thermal behavior, and lightweight architectural systems.",
  },
  {
    id: "SYS-03",
    title: "Irregular Timber Milling",
    text: "Photogrammetry, scan-to-fabricate registration, robotic chainsaw roughing, and electrospindle finishing.",
  },
  {
    id: "SYS-04",
    title: "Rod-Bent Ceramic Armatures",
    text: "Robotic metal bending, springback testing, and ceramic facade support assemblies.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 text-xs font-bold tracking-widest">
              ST/3
            </div>

            <div>
              <p className="text-sm font-medium">
                Robotic Computational Fabrication
              </p>
              <p className="text-xs text-neutral-500">
                Living Manual v0.1
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm hover:bg-neutral-800">
            <Icon name="github" className="h-4 w-4" />
            GitHub
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neutral-700 blur-[140px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Open workflows for architectural robotics
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Robotic Computational Fabrication Manual
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
              A living teaching and research resource for Grasshopper,
              material systems, robotic fabrication workflows, failure
              documentation, and architectural-scale digital fabrication.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center rounded-xl bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-300">
                Start Learning
                <Icon name="arrowRight" className="ml-2 h-4 w-4" />
              </button>

              <button className="rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm hover:bg-neutral-800">
                View Systems
              </button>
            </div>
          </motion.div>

          {/* DIAGRAM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-neutral-700 bg-neutral-900/60 p-6 backdrop-blur"
          >
            <div className="mb-6 flex items-center justify-between border-b border-neutral-800 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  System Diagram
                </p>

                <p className="mt-1 text-sm text-neutral-300">
                  Toolpath → Robot → Material → Feedback
                </p>
              </div>

              <Icon name="cpu" className="h-5 w-5 text-neutral-400" />
            </div>

            <div className="space-y-3">
              {[
                "Geometry Input",
                "Toolpath Logic",
                "Robot Simulation",
                "Material Testing",
                "Failure Logging",
                "Research Metrics",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 text-xs text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="h-px flex-1 bg-neutral-800" />

                  <p className="text-sm text-neutral-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Fabrication Systems
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
            Documented as research infrastructure.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {systems.map((system) => (
            <div
              key={system.id}
              className="rounded-[2rem] border border-neutral-800 bg-neutral-900/40 p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs tracking-[0.15em] text-neutral-500">
                  {system.id}
                </span>
              </div>

              <h3 className="text-2xl font-medium tracking-tight">
                {system.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-400">
                {system.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section className="border-t border-neutral-800 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Research Agenda
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
            From tutorials to fundable methods.
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-neutral-400">
            The manual frames fabrication error, material behavior, and
            robotic constraints as design data. It supports teaching,
            research publication, and future proposals around
            material-responsive robotic fabrication.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 px-6 py-8 text-sm text-neutral-500">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
          <p>Robotic Computational Fabrication Manual · v0.1</p>

          <p>Grasshopper · Material Systems · Architectural Robotics</p>
        </div>
      </footer>
    </div>
  );
}