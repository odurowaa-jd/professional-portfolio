export default function Timeline() {
  const milestones = [
    { week: "Week 1-4", title: "Foundations", desc: "Mastered semantic HTML and complex CSS systems to build the bedrock of digital infrastructure and responsive architecture." },
    { week: "Week 5-8", title: "Logical Architecture", desc: "Advanced study of JavaScript logic, focusing on data manipulation, asynchronous systems, and interactive UI logic." },
    { week: "Week 9-12", title: "Full-Stack Development", desc: "Mastered PHP and SQL to bridge the gap between frontend design and complex backend fiscal data management." },
    { week: "Week 13-16+", title: "Institutional Software", desc: "Specializing in Next.js and high-performance frameworks to solve global resource challenges and optimize academic roadmap data." }
  ];

  return (
    <section className="bg-navy-deep py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Faded Divider at the top of the section */}
        <div className="divider-faded mb-20 opacity-50" />

        <div className="mb-20 text-center lg:text-left">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-4">
            The <span className="text-gold-antique italic font-medium">Evolutionary</span> Trajectory
          </h2>
          <p className="text-slate-500 text-sm lg:text-base max-w-lg font-sans">Documenting the exponential rate of technical growth over 16+ weeks of intensive engineering.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {milestones.map((m, i) => (
            <div key={i} className="relative p-10 bg-navy-accent/20 border-l-2 border-gold-antique/40 hover:bg-navy-accent/40 transition-all duration-500 group">
              {/* Permanent Glow Point */}
              <div className="absolute -left-[7px] top-0 w-[12px] h-[12px] bg-gold-antique rounded-full shadow-[0_0_15px_rgba(197,160,89,1)] transition-transform group-hover:scale-125" />
              
              <p className="text-gold-antique text-[11px] font-bold uppercase tracking-[0.3em] mb-4">{m.week}</p>
              <h3 className="text-white font-serif text-xl mb-4 group-hover:text-gold-antique transition-colors">{m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}