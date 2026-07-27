export default function Footer() {
  return (
    <footer className="bg-navy-deep py-20 px-6 lg:px-24 border-t border-gold-antique/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl text-white mb-2 tracking-tight">Jessica Danquah</h2>
          <p className="font-sans text-gold-antique/60 text-[10px] uppercase tracking-[0.5em] font-bold">
            Economic Engineer • Developer
          </p>
        </div>

        <div className="flex gap-10">
          <a href="https://www.linkedin.com/in/jessica-danquah-804915262" target="_blank" className="text-slate-400 hover:text-gold-antique transition-colors text-[10px] uppercase tracking-widest font-bold">LinkedIn</a>
          <a href="https://github.com/odurowaa-jd" target="_blank" className="text-slate-400 hover:text-gold-antique transition-colors text-[10px] uppercase tracking-widest font-bold">GitHub</a>
          <a href="mailto:odurowaadanquah@gmail.com" className="text-slate-400 hover:text-gold-antique transition-colors text-[10px] uppercase tracking-widest font-bold">Email</a>
        </div>

        <p className="text-slate-600 text-[10px] font-sans tracking-widest uppercase">
          © 2025 • Designed for Global Impact
        </p>

      </div>
    </footer>
  );
}