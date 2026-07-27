import { TrendingUp, BarChart3, Code2 } from 'lucide-react';

const pillars = [
  {
    title: "Economic Optimization",
    icon: <TrendingUp className="w-8 h-8 stroke-[1.25]" />,
    description: "Applying systems thinking to resource allocation. I focus on maximizing utility and efficiency within institutional and national frameworks.",
    tag: "Strategy"
  },
  {
    title: "Financial Intelligence",
    icon: <BarChart3 className="w-8 h-8 stroke-[1.25]" />,
    description: "Developing robust data-driven dashboards using PHP and SQL to provide real-time fiscal clarity and managed liquidity tracking.",
    tag: "Analytics"
  },
  {
    title: "Technical Architecture",
    icon: <Code2 className="w-8 h-8 stroke-[1.25]" />,
    description: "Building scalable, high-performance web applications with Next.js, ensuring that complex logic is met with seamless user experiences.",
    tag: "Execution"
  }
];

export default function Pillars() {
  return (
    <section className="bg-navy-deep py-24 px-6 lg:px-24 relative overflow-hidden">
      
      {/* 1. Intensified Divider Line - Higher opacity for mobile visibility */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-antique/60 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
            The Strategic <span className="text-gold-antique italic font-medium">Intersection</span>
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl leading-relaxed text-sm lg:text-base">
            My work is defined by the convergence of economic theory and modern engineering. 
            I build tools that don't just function—they optimize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group relative bg-navy-accent/40 border border-gold-antique/25 p-8 lg:p-10 transition-all duration-700 hover:border-gold-antique/60 lg:hover:-translate-y-2"
            >
              {/* Permanent soft glow in corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-antique/10 blur-[40px] rounded-full pointer-events-none" />

              <div className="text-gold-antique mb-8 transition-transform duration-700 lg:group-hover:scale-105">
                {pillar.icon}
              </div>

              <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-gold-antique/80 mb-4 font-bold">
                {pillar.tag}
              </span>

              <h3 className="font-serif text-xl text-white mb-4">
                {pillar.title}
              </h3>

              <p className="font-sans text-slate-400 text-sm leading-relaxed mb-8">
                {pillar.description}
              </p>

              {/* 2. Intensified Accent Line - More visible by default, full on hover */}
              <div className="relative h-[1.5px] w-full bg-gold-antique/10 overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-16 lg:w-12 bg-gold-antique/80 transition-all duration-700 lg:group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}