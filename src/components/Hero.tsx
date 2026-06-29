import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";


const CAROUSEL_APPS = [
  { id: "obra-facil", name: "Obra Fácil", placeholderBg: "ea580c", text: "ffffff" },
  { id: "bandflow", name: "BandFlow", placeholderBg: "4f46e5", text: "ffffff" },
  { id: "investmap", name: "InvestMap", placeholderBg: "059669", text: "ffffff" },
  { id: "fitmap", name: "FitMap", placeholderBg: "e11d48", text: "ffffff" },
  { id: "portfy", name: "Portfy", placeholderBg: "0284c7", text: "ffffff" },
  { id: "dinlab", name: "DinLab", placeholderBg: "0d9488", text: "ffffff" },
  { id: "mercadofacil", name: "MercadoFácil", placeholderBg: "d97706", text: "ffffff" }
];

const appIcons: Record<string, string> = {
  "obra-facil": "obra_facil_icon_512.png",
  "bandflow": "bandflow-icon-512.png",
  "investmap": "icon-investmap-512.png",
  "fitmap": "icon-fitmap-512.png",
  "portfy": "icon-portfy-512.png",
  "dinlab": "icon-dinlab-512.png",
  "mercadofacil": "mercadofacil-icon-512.png"
};

export function Hero() {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % CAROUSEL_APPS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const getPositionClass = (diff: number) => {
    if (diff === 0) {
      // Center card (highlighted, scaled, fully visible)
      return "z-30 scale-110 opacity-100 translate-x-0 cursor-pointer shadow-2xl";
    }
    if (diff === 1) {
      // Right card (partially visible on desktop, hidden on mobile)
      return "z-20 scale-90 opacity-0 md:opacity-50 lg:opacity-60 translate-x-0 md:translate-x-[124px] lg:translate-x-[148px] pointer-events-none md:pointer-events-auto cursor-pointer";
    }
    if (diff === 6) {
      // Left card (partially visible on desktop, hidden on mobile)
      return "z-20 scale-90 opacity-0 md:opacity-50 lg:opacity-60 translate-x-0 md:translate-x-[-124px] lg:translate-x-[-148px] pointer-events-none md:pointer-events-auto cursor-pointer";
    }
    if (diff === 2) {
      // Entering from right
      return "z-10 scale-80 opacity-0 translate-x-0 md:translate-x-[248px] lg:translate-x-[296px] pointer-events-none";
    }
    if (diff === 5) {
      // Exiting to left
      return "z-10 scale-80 opacity-0 translate-x-0 md:translate-x-[-248px] lg:translate-x-[-296px] pointer-events-none";
    }
    // Hidden background cards
    return "z-0 scale-75 opacity-0 translate-x-0 pointer-events-none";
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-neutral-50/50 flex items-center"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-neutral-200/50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-neutral-300/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-white shadow-2xs text-neutral-800 text-xs font-semibold tracking-wide uppercase mb-6"
          >
            <Sparkles size={12} className="text-neutral-500 animate-pulse" />
            <span>Desenvolvimento Premium & Sob Medida</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6"
          >
            Desenvolvemos soluções digitais de alta performance.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg text-neutral-600 font-sans font-normal leading-relaxed mb-8 max-w-xl"
          >
            Na <span className="font-semibold text-neutral-900">Nespoli Digital</span>, unimos engenharia de software robusta, design minimalista e usabilidade impecável para transformar grandes ideias em aplicativos líderes de categoria.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              id="cta-apps"
              onClick={(e) => handleScrollTo(e, "apps")}
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-all cursor-pointer shadow-xs focus:ring-2 focus:ring-offset-2 focus:ring-neutral-950 focus:outline-hidden"
            >
              Ver nossos apps
            </button>
            <button
              id="cta-contact"
              onClick={(e) => handleScrollTo(e, "contato")}
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:text-neutral-950 transition-all cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-neutral-200 focus:outline-hidden group"
            >
              Contratar desenvolvimento
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Hero Right Visuals (Animated Smartphone Carousel) */}
        <div className="lg:col-span-5 relative w-full h-[420px] flex items-center justify-center overflow-visible select-none mt-12 lg:mt-0">
          <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            {CAROUSEL_APPS.map((app, index) => {
              const diff = (index - centerIndex + CAROUSEL_APPS.length) % CAROUSEL_APPS.length;
              return (
                <div
                  key={app.id}
                  onClick={() => {
                    if (diff === 0 || diff === 1 || diff === 6) {
                      const htmlMap: Record<string, string> = {
                        "obra-facil": "obra-facil.html",
                        "dinlab": "dinlab.html",
                        "investmap": "investmap.html",
                        "portfy": "portfy.html",
                        "fitmap": "fitmap.html",
                        "bandflow": "bandflow.html",
                        "mercadofacil": "mercado-facil.html"
                      };
                      const targetPage = htmlMap[app.id] || `${app.id}.html`;
                      window.location.href = targetPage;
                    }
                  }}
                  className={`absolute w-[136px] sm:w-[148px] md:w-[160px] aspect-[9/19.5] rounded-[24px] border-[5px] border-neutral-900 bg-neutral-950 p-1 flex flex-col justify-between overflow-hidden transition-all duration-600 ease-in-out ${getPositionClass(diff)}`}
                >
                  {/* Notch */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-11 h-3 bg-neutral-900 rounded-b-md z-20 flex items-start justify-center">
                    <div className="w-5 h-0.5 bg-neutral-800 rounded-full mt-0.5" />
                  </div>

                  {/* Screen */}
                  <div className="relative flex-1 w-full bg-neutral-100 rounded-[18px] overflow-hidden flex flex-col justify-between">
                    {/* System bar */}
                    <div className="absolute top-0.5 left-2.5 right-2.5 flex justify-between items-center text-[7px] font-bold text-white/90 mix-blend-difference z-20 pointer-events-none">
                      <span>09:41</span>
                      <div className="flex items-center gap-1">
                        <span>5G</span>
                        <div className="w-3.5 h-1.5 border border-white/95 rounded-xs flex items-center p-px">
                          <div className="w-full h-full bg-white/95 rounded-xs" />
                        </div>
                      </div>
                    </div>

                    {/* App brand background and centered real icon */}
                    <div 
                      className="w-full h-full flex flex-col items-center justify-center p-4"
                      style={{ backgroundColor: `#${app.placeholderBg}` }}
                    >
                      <img
                        src={`/icons/${appIcons[app.id] || "obra_facil_icon_512.png"}`}
                        alt={app.name}
                        style={{ width: "56px", height: "56px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
                        referrerPolicy="no-referrer"
                        className="select-none pointer-events-none mb-1 animate-fade-in"
                      />
                    </div>

                    {/* Hover/Center overlay banner */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pt-8 pb-3 px-3 text-center">
                      <span className="text-[10px] font-bold text-white tracking-wide uppercase">
                        {app.name}
                      </span>
                      <p className="text-[8px] text-neutral-300 mt-0.5 truncate px-1">
                        Toque para detalhes
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
