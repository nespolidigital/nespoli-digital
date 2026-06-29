import { motion } from "motion/react";
import { SERVICES_DATA, PROCESS_STEPS } from "../data";
import { DynamicIcon } from "./DynamicIcon";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-neutral-50/50">
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
            Nossos Serviços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-neutral-900 mb-4"
          >
            Desenvolvimento sob medida para impulsionar seu produto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-600 text-sm md:text-base leading-relaxed"
          >
            Da concepção estratégica à publicação final, desenvolvemos soluções tecnológicas robustas que escalam com o crescimento do seu negócio.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              id={`service-${service.id}`}
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-neutral-200/60 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DynamicIcon name={service.iconName} size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-neutral-950 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Minimal bullet checklist */}
              <ul className="space-y-2 border-t border-neutral-100 pt-6">
                <li className="flex items-center gap-2 text-xs text-neutral-600">
                  <CheckCircle2 size={14} className="text-neutral-900" />
                  <span>Código de excelência técnica</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-neutral-600">
                  <CheckCircle2 size={14} className="text-neutral-900" />
                  <span>Interfaces 100% responsivas</span>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section Header */}
        <div className="border-t border-neutral-200/60 pt-20 mb-16">
          <div className="text-center max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3"
            >
              Como Trabalhamos
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-neutral-900 mb-4"
            >
              Processo de desenvolvimento claro e ágil
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-500 text-xs sm:text-sm"
            >
              Seguimos uma metodologia estruturada em quatro etapas claras para garantir que seu projeto seja entregue no prazo, com qualidade inquestionável.
            </motion.p>
          </div>
        </div>

        {/* Horizontals Process Steps Timeline */}
        <div className="relative">
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1.5px] bg-neutral-200 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                id={`step-${step.number}`}
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-neutral-100 lg:border-0 shadow-xs lg:shadow-none"
              >
                {/* Step Number Badge */}
                <div className="w-11 h-11 rounded-full bg-neutral-900 border-4 border-white lg:border-neutral-50 text-white flex items-center justify-center font-bold text-sm tracking-tight mb-5 shadow-xs transition-transform hover:scale-110 duration-200">
                  {step.number}
                </div>

                {/* Step Content */}
                <h4 className="text-base font-bold text-neutral-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Arrow Connector for Medium screen grids */}
                {index < 3 && (
                  <div className="hidden md:block lg:hidden absolute top-[30px] -right-4 text-neutral-300">
                    <ArrowRight size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
export default Services;
