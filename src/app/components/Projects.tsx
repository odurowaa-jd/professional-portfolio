import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const projects = [
  {
    title: "Cycle Budget",
    subtitle: "Full-Stack Household Fiscal Infrastructure",
    description: "Designed as a technical response to household resource constraints. This infrastructure implements fiscal discipline by tracking real-time expenditure against algorithmic budget limits, ensuring financial optimization and strategic liquidity management for the family unit.",
    tech: ["PHP", "Relational DB", "Fiscal Logic"],
    link: "https://www.cycle-budget.xyz/",
    repo: "https://github.com/odurowaa-jd/cycle-budget.git",
    image: "/cycle-budget-preview.png",
    thesis: "Applied Economics & Resource Optimization"
  },
  {
    title: "Campus Optimizer",
    subtitle: "Institutional Resource Allocation",
    description: "Built to maximize utility within shared institutional environments. This system leverages Next.js to provide an intelligent framework for the efficient distribution of campus assets, reducing deadweight loss and improving stakeholder access through real-time data visualization.",
    tech: ["Next.js", "Vercel", "Resource Logic"],
    link: "https://campus-resource-optimizer-six.vercel.app/",
    repo: "https://github.com/odurowaa-jd/campus-resource-optimizer.git", 
    image: "/campus-preview.png",
    thesis: "Institutional Efficiency Systems"
  },
  {
    title: "Apex Analytics Suite",
    subtitle: "Full-Stack Data Modeling & Analytics",
    description: "An institutional-grade financial engine engineered for complex data modeling. Utilizing a robust PHP and SQL backend, the suite processes multi-dimensional datasets to deliver real-time fiscal insights, bridging the gap between raw data and strategic financial decision-making.",
    tech: ["PHP", "MySQL", "Data Modeling"],
    link: "http://apex-analytics.rf.gd/",
    repo: "https://github.com/odurowaa-jd/Apex_Analytics_Suite.git",
    image: "/apex-preview.png",
    thesis: "Financial Intelligence & System Architecture"
  },
  {
    title: "Aura Scholar",
    subtitle: "Strategic Academic Pipeline",
    description: "A specialized strategic planning tool built to manage the extensive data lifecycle of international university and scholarship applications. This tool optimizes the candidate's roadmap through a refined, user-centric React interface focused on systemic efficiency.",
    tech: ["Next.js", "React", "State Management"],
    link: "https://aura-scholar.vercel.app/",
    repo: "https://github.com/odurowaa-jd/aura-scholar.git",
    image: "/aura-preview.png",
    thesis: "Strategic Systems Thinking"
  }
];

export default function Projects() {
  return (
    <section id="case-studies" className="bg-navy-deep py-24 px-6 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center lg:text-left">
          <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">Selected <span className="text-gold-antique italic font-medium">Case Studies</span></h2>
          <div className="divider-faded mb-8" />
          <p className="font-sans text-slate-400 max-w-xl italic text-sm lg:text-base">"Translating theoretical economic models into functional digital infrastructure to solve complex resource challenges."</p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, index) => (
            <div key={index} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-b border-gold-antique/10 pb-20">
              
              {/* Description Content */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <p className="text-gold-antique text-[10px] uppercase tracking-[0.4em] font-bold mb-4">{project.thesis}</p>
                <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2">{project.title}</h3>
                <p className="text-gold-antique/60 font-sans text-xs italic mb-8 uppercase tracking-widest leading-relaxed">{project.subtitle}</p>
                <p className="text-slate-400 font-sans text-sm lg:text-base leading-relaxed mb-10">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1.5 border border-gold-antique/20 text-gold-antique text-[9px] uppercase tracking-[0.2em] font-medium">{t}</span>
                  ))}
                </div>
                
                <div className="flex gap-8">
                  <a href={project.link} target="_blank" className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold-antique transition-colors">Live Deployment <ExternalLink size={14} /></a>
                  <a href={project.repo} target="_blank" className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold-antique transition-colors">Repository <GithubIcon size={14} /></a>
                </div>
              </div>

              {}
              <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[750px] aspect-[16/10] group/img transition-transform duration-700 hover:scale-[1.03]">
                  
                  {}
                  <div className="absolute inset-0 bg-gold-antique/20 blur-[50px] lg:blur-[80px] rounded-full opacity-70"></div>

                  {}
                  <div className="absolute inset-0 border-[1px] border-gold-antique/40 translate-x-4 translate-y-4 -z-10 group-hover/img:translate-x-6 group-hover/img:translate-y-6 transition-all duration-700"></div>
                  
                  {}
                  <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-gold-antique/60"></div>
                  
                  {

                  }
                  {/* Find the Image section in Projects.tsx and replace it with this */}
<div className="relative w-full h-full overflow-hidden rounded-xl shadow-[0_0_40px_rgba(197,160,89,0.3)] border border-gold-antique/30 bg-navy-accent flex items-center justify-center">
  <Image 
    src={project.image} 
    alt={project.title} 
    fill 
    className="object-cover transition-transform duration-1000 group-hover/img:scale-105"
  />
  {/* Subtle Overlay */}
  <div className="absolute inset-0 bg-navy-deep/5 pointer-events-none"></div>
</div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
