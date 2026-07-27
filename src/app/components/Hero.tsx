import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep px-6 py-20 lg:py-0 lg:px-24">
      <div className="absolute inset-0 gold-abstract-streak z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <p className="text-gold-antique font-sans uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-6 font-semibold">
            Economics • Finance • Technology
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.2] lg:leading-[1.15]">
            Building the <span className="text-gold-antique italic">digital infrastructure</span> for modern economic challenges.
          </h1>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-10 font-sans leading-relaxed">
            Architecting intelligent solutions that optimize resource management 
            and drive financial self-sufficiency in emerging markets.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="#case-studies" className="border border-gold-antique text-gold-antique px-8 lg:px-10 py-3 lg:py-4 rounded-sm font-sans uppercase tracking-widest text-[9px] lg:text-[10px] hover:bg-gold-antique hover:text-navy-deep transition-all duration-500">
              View Case Studies
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-[260px] h-[340px] md:w-[320px] md:h-[420px] lg:w-[420px] lg:h-[560px] group transition-transform duration-700 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gold-antique/20 blur-[40px] lg:blur-[60px] rounded-full opacity-60"></div>
            <div className="absolute inset-0 border-[0.5px] border-gold-antique/40 translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 -z-10"></div>
            <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-16 lg:w-20 h-16 lg:h-20 border-t border-r border-gold-antique/60"></div>
            <div className="relative w-full h-full overflow-hidden shadow-[0_0_30px_rgba(197,160,89,0.3)] border border-gold-antique/20">
              <Image src="/portrait.jpg" alt="Jessica Danquah" fill className="object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}