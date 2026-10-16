'use client';

import { useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "Cycle Budget",
    subtitle: "Full-Stack Household Fiscal Infrastructure",
    thesis: "Utility Maximization & Resource Scarcity",
    tech: ["PHP", "SQL", "Relational Databases"],
    link: "https://www.cycle-budget.xyz/",
    repo: "https://github.com/odurowaa-jd/cycle-budget.git",
    image: "/cycle-budget-preview.png",
    intro: "A technical response to household resource constraints designed to optimize the allocation of finite monthly funds.",
    details: [
      { label: "The Problem", content: "Managing finite monthly resources in a multi-member household often leads to 'invisible' expenditure and reduced fiscal satisfaction." },
      { label: "Economic Aspect", content: "Applied the Principle of Managing Scarce Resources to maximize consumer utility, ensuring that limited resources are allocated to their most valued uses." },
      { label: "Financial Mechanism", content: "Implemented balancing and reconciliation protocols to ensure 100% fund accountability and real-time liquidity visibility." },
      { label: "Technological Resolution", content: "Built a relational PHP/SQL engine to transform raw family input into a generalized data model for household fiscal discipline." }
    ]
  },
  {
    title: "Student Portal",
    subtitle: "Full-Stack Academic Information System",
    thesis: "Institutional Data Governance",
    tech: ["PHP", "MySQL", "Information Systems"],
    link: "https://studentportal-capstone.infinityfreeapp.com/index.php",
    repo: "https://github.com/odurowaa-jd/Student-Portal.git",
    image: "/student-portal-preview.png",
    intro: "A centralized information system designed to eliminate information asymmetry in academic record-keeping.",
    details: [
      { label: "The Problem", content: "Decentralized academic records often lead to information asymmetry and high administrative costs for students and faculty." },
      { label: "Economic Aspect", content: "Focuses on reducing 'Transaction Costs' within an institution by providing a high-availability, centralized data repository." },
      { label: "Institutional Mechanism", content: "Implemented a robust data governance model to ensure the security, privacy, and integrity of student academic profiles." },
      { label: "Technological Resolution", content: "Engineered a PHP-driven portal with a relational MySQL backend to manage secure user permissions and dynamic data retrieval." }
    ]
  },
  {
    title: "Apex Analytics Suite",
    subtitle: "Lending Portfolio Visualization",
    thesis: "Fiscal Governance & Risk Analytics",
    tech: ["PHP", "MySQL", "Risk Management"],
    link: "https://apex-analytics.infinityfreeapp.com/",
    repo: "https://github.com/odurowaa-jd/Apex_Analytics_Suite.git",
    image: "/apex-preview.png",
    intro: "An institutional-grade financial engine drawing from professional banking experience to solve the 'visibility gap' in lending.",
    details: [
      { label: "The Problem", content: "Branch-level lending often lacks macro-visibility, making it difficult to track disbursements against defaults in real-time." },
      { label: "Financial Aspect", content: "Engineered for end-of-year reconciliation and credit exposure assessment to improve fiscal governance and branch-level transparency." },
      { label: "Technological Resolution", content: "A robust PHP/SQL suite providing multi-dimensional data visualization to help financial institutions see the 'bigger picture'." }
    ]
  },
  {
    title: "Campus Optimizer",
    subtitle: "Institutional Resource Allocation",
    thesis: "Institutional Efficiency Systems",
    tech: ["Next.js", "Vercel", "Resource Logic"],
    link: "https://campus-resource-optimizer-six.vercel.app/",
    repo: "https://github.com/odurowaa-jd/campus-resource-optimizer.git",
    image: "/campus-preview.png",
    intro: "An optimization tool focused on managing shared institutional assets and maximizing institutional utility.",
    details: [
      { label: "The Problem", content: "Information asymmetry on campus often leads to underutilized facilities and wasted institutional resources." },
      { label: "Economic Aspect", content: "Focuses on the organization and interpretation of raw data to align supply with demand and minimize 'deadweight loss' in shared environments." },
      { label: "Technological Resolution", content: "Leverages a Next.js framework to provide an intelligent interface for real-time asset tracking and systematic resource distribution." }
    ]
  },
  {
    title: "Aura Scholar",
    subtitle: "Strategic Academic Planner",
    thesis: "Information Organization & UX Strategy",
    tech: ["Next.js", "React", "Workflow Optimization"],
    link: "https://aura-scholar.vercel.app/",
    repo: "https://github.com/odurowaa-jd/aura-scholar.git",
    image: "/aura-preview.png",
    intro: "A specialized strategic planning tool designed to manage the high-data volume of international academic application cycles.",
    details: [
      { label: "The Problem", content: "High administrative overhead and cognitive fatigue during complex application cycles can lead to missed deadlines and documentation errors." },
      { label: "Theory & UX", content: "Utilizes Systems Thinking to optimize personal productivity, using 'Aesthetic UX' to reduce cognitive load and maintain user motivation." },
      { label: "Technological Resolution", content: "A centralized React-based pipeline that organizes schools, deadlines, and requirements into a functional, strategic roadmap." }
    ]
  },
  {
    title: "Equili",
    subtitle: "Institutional Audit & Asset Intelligence",
    thesis: "Operational Integrity & Audit Assurance",
    tech: ["PHP", "MySQL", "Reconciliation Logic"],
    link: "https://equili.infinityfreeapp.com/",
    repo: "https://github.com/odurowaa-jd/Equili_Dashboard",
    image: "/equili-preview.png",
    intro: "An inventory and reconciliation system drawing from banking operations experience to keep physical stock precisely aligned with digital records.",
    details: [
      { label: "The Problem", content: "In high-stakes environments, physical stock and digital records drift apart, creating audit discrepancies and unplanned stock-outs." },
      { label: "Audit Mechanism", content: "A reconciliation terminal with dual-input counts (boxes + units), automatic variance calculation, and an optional self-healing ledger that syncs records on audit authorization." },
      { label: "Analytical Aspect", content: "Calculates a 'Vault Turnover Rate' from weekly issuance against vault capacity, helping managers anticipate restock needs before assets reach critical levels." },
      { label: "Technological Resolution", content: "Engineered a modular PHP 8 and MySQL system with box-to-unit logic, prepared statements against SQL injection, and a CSV export engine for external reporting." }
    ]
  },
  {
    title: "Statera",
    subtitle: "Economic Intelligence Dashboard",
    thesis: "Macroeconomic Data & Predictive Analytics",
    tech: ["PHP", "MySQL", "Predictive Analytics"],
    link: "http://statera.infinityfreeapp.com/",
    repo: "https://github.com/odurowaa-jd/Statera_Economic_Intelligence",
    image: "/statera-preview.png",
    intro: "A longitudinal analytics platform that centralizes a decade of Ghana's inflation, currency, and GDP data and projects where the numbers are heading.",
    details: [
      { label: "The Problem", content: "Clean, monthly macroeconomic data for Ghana is scattered across sources, making it hard for researchers and students to study trends over time." },
      { label: "Economic Aspect", content: "Tracks inflation (CPI), USD/GBP/EUR exchange rates, and GDP growth from 2016 to 2026, with a factual narrative for each fiscal year, from the 2016 energy crisis to the 2022 inflation peak." },
      { label: "Predictive Mechanism", content: "Applies linear regression to project next-month inflation and exchange rates, with reasoning cards explaining each forecast and an insight engine that summarizes the selected year." },
      { label: "Technological Resolution", content: "Built a PHP/MySQL time-series backend with Chart.js visualizations and live exchange-rate API integration." }
    ]
  }
];

const pad = (n: number) => String(n).padStart(2, '0');

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goTo = (i: number) => setCurrent((i + total) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      goTo(dx < 0 ? current + 1 : current - 1);
    }
  };

  return (
    <section id="case-studies" className="bg-navy-deep pt-24 pb-12 px-6 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 text-center lg:text-left">
          <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
            Selected <span className="text-gold-antique italic font-medium">Case Studies</span>
          </h2>
          <div className="divider-faded mb-8" />
          <p className="font-sans text-slate-400 max-w-xl italic text-sm lg:text-base">
            &quot;Systematically translating theoretical economic models into functional digital infrastructure.&quot;
          </p>
        </div>

        {/* Slideshow: all slides share one grid cell so the section height stays stable between slides */}
        <div
          className="grid"
          role="region"
          aria-roledescription="carousel"
          aria-label="Selected case studies"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, index) => {
            const active = index === current;
            return (
              <div
                key={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}`}
                aria-hidden={!active}
                className={`col-start-1 row-start-1 transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center pb-16">
                  {/* Left Column: Vertical centering now applied via 'items-center' above */}
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <p className="text-gold-antique text-[10px] uppercase tracking-[0.4em] font-bold mb-4">
                      {project.thesis}
                    </p>
                    
                    <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gold-antique/60 font-sans text-[10px] italic mb-6 uppercase tracking-widest leading-relaxed">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-300 font-sans text-sm lg:text-base leading-relaxed mb-8 border-l border-gold-antique/30 pl-6 italic">
                      {project.intro}
                    </p>

                    <div className="space-y-6 mb-10">
                      {project.details.map((item, i) => (
                        <div key={i} className="flex gap-4 group/item">
                          <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gold-antique shadow-[0_0_10px_rgba(197,160,89,0.8)] group-hover/item:scale-150 transition-transform duration-500" />
                          <div>
                            <span className="text-gold-antique text-[10px] uppercase tracking-[0.2em] font-bold block mb-1">
                              {item.label}
                            </span>
                            <p className="text-slate-400 font-sans text-xs lg:text-sm leading-relaxed max-w-md">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 border border-gold-antique/20 text-gold-antique text-[9px] uppercase tracking-[0.2em] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-8">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" tabIndex={active ? 0 : -1} className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold-antique transition-colors">
                        Live Deployment <ExternalLink size={14} />
                      </a>
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" tabIndex={active ? 0 : -1} className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold-antique transition-colors">
                        Repository <GithubIcon size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Centered Image Visual */}
                  <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-full aspect-[16/11] group/img transition-transform duration-700 hover:scale-[1.02]">
                      
                      <div className="absolute inset-0 bg-gold-antique/20 blur-[60px] rounded-full opacity-50"></div>
                      <div className="absolute inset-0 border border-gold-antique/30 translate-x-4 translate-y-4 -z-10 group-hover/img:translate-x-6 group-hover/img:translate-y-6 transition-all duration-700 rounded-2xl"></div>
                      <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-gold-antique/60 rounded-tr-2xl"></div>
                      
                      <div className="relative w-full h-full overflow-hidden rounded-2xl border border-gold-antique/20 shadow-2xl bg-gradient-to-br from-navy-accent to-navy-deep p-2 lg:p-3 flex items-center justify-center">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover transition-transform duration-1000 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-navy-deep/5 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slideshow controls */}
        <div className="mt-4 pt-8 border-t border-gold-antique/10 flex items-center justify-between gap-6">
          <span className="font-sans text-gold-antique text-[10px] tracking-[0.4em] font-bold tabular-nums">
            {pad(current + 1)} <span className="text-slate-500">/ {pad(total)}</span>
          </span>

          <div className="flex items-center gap-3" role="tablist" aria-label="Choose a project">
            {projects.map((project, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === current}
                aria-label={`Show ${project.title}`}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === current
                    ? 'w-8 bg-gold-antique shadow-[0_0_10px_rgba(197,160,89,0.8)]'
                    : 'w-1.5 bg-gold-antique/30 hover:bg-gold-antique/60'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              aria-label="Previous project"
              className="w-11 h-11 flex items-center justify-center border border-gold-antique/30 text-gold-antique hover:border-gold-antique hover:bg-gold-antique/10 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              aria-label="Next project"
              className="w-11 h-11 flex items-center justify-center border border-gold-antique/30 text-gold-antique hover:border-gold-antique hover:bg-gold-antique/10 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
