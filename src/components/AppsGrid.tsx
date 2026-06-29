import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { APPS_DATA } from "../data";
import { DynamicIcon } from "./DynamicIcon";
import { ArrowUpRight } from "lucide-react";


const appIcons: Record<string, string> = {
  "obra-facil": "obra_facil_icon_512.png",
  "bandflow": "bandflow-icon-512.png",
  "investmap": "icon-investmap-512.png",
  "fitmap": "icon-fitmap-512.png",
  "portfy": "icon-portfy-512.png",
  "dinlab": "icon-dinlab-512.png",
  "mercadofacil": "mercadofacil-icon-512.png"
};

export function AppsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  // Get unique categories for filters
  const categories = ["Todos", ...Array.from(new Set(APPS_DATA.map((app) => app.category)))];

  const filteredApps =
    selectedCategory === "Todos"
      ? APPS_DATA
      : APPS_DATA.filter((app) => app.category === selectedCategory);

  return (
    <section id="apps" className="py-24 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3"
          >
            Nossos Aplicativos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-neutral-900 mb-4"
          >
            Soluções digitais projetadas para resolver problemas reais
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-600 text-sm md:text-base leading-relaxed"
          >
            Conheça nossos aplicativos proprietários. Cada produto reflete nossa obsessão por código limpo, velocidade de carregamento e design centrado no usuário.
          </motion.p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer whitespace-nowrap focus:outline-hidden ${
                  isActive
                    ? "category-tab-active bg-neutral-950 text-white border-neutral-950 shadow-xs"
                    : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Apps Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredApps.map((app, index) => (
              <motion.article
                layout
                id={`app-${app.id}`}
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => {
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
                }}
                className="group relative bg-white border border-neutral-200/60 rounded-2xl p-6 hover:border-neutral-900/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Card Header: Icon and Link Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <img
                      src={`/icons/${appIcons[app.id] || "obra_facil_icon_512.png"}`}
                      alt={app.name}
                      style={{ width: "64px", height: "64px", borderRadius: "14px", objectFit: "cover" }}
                      referrerPolicy="no-referrer"
                    />
                    
                    <span className="text-neutral-300 group-hover:text-neutral-800 transition-colors duration-300">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  {/* Category Tag */}
                  <span
                    className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border ${app.tagColor.bg} ${app.tagColor.text} ${app.tagColor.border} mb-3`}
                  >
                    {app.category}
                  </span>

                  {/* App Name */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-neutral-950 transition-colors">
                    {app.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {app.description}
                  </p>
                </div>

                {/* Micro Action link styling */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors duration-200">
                  <span>Conhecer Aplicativo</span>
                  <span className="w-5 h-5 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
export default AppsGrid;
