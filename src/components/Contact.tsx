import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "nespolidigital@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        {/* Main Central Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Graphic background dots or glow */}
          <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/25 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight mb-4">
            Pronto para construir o seu aplicativo?
          </h2>
          
          {/* Subtitle */}
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Fale conosco e entenda como podemos transformar sua visão em um produto de altíssima qualidade. Respondemos em até 24 horas úteis com uma análise inicial da sua ideia.
          </p>

          {/* Action buttons stack */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-8">
            {/* Primary mailto link */}
            <a
              href={`mailto:${emailAddress}?subject=Solicita%C3%A7%C3%A3o%20de%20Or%C3%A7amento%20-%20Nespoli%20Digital&body=Ol%C3%A1%20Equipe%20Nespoli%20Digital%2C%0A%0AGostaria%20de%20bater%20um%20papo%20sobre%20desenvolvimento%20de%20um%20projeto.%0A%0A%5BDescreva%20brevemente%20sua%20ideia%20aqui%5D`}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 font-bold rounded-xl hover:bg-neutral-100 transition-all shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-white focus:outline-hidden"
            >
              <Mail size={18} className="mr-2.5" />
              Entrar em contato
              <ExternalLink size={14} className="ml-2 opacity-60" />
            </a>

            {/* Email Address Display/Copy Button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-xl hover:bg-neutral-850 hover:text-white transition-all cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-neutral-800 focus:outline-hidden relative group"
            >
              <span className="font-mono text-sm tracking-tight mr-3">{emailAddress}</span>
              <span className="p-1 rounded bg-neutral-850 text-neutral-400 group-hover:text-white transition-colors">
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </span>

              {/* Copy Feedback Tooltip */}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: -30, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase bg-emerald-500 text-white rounded shadow-md pointer-events-none"
                  >
                    Copiado!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Core Values / Benefits Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-neutral-800 text-xs text-neutral-400">
            <div>
              <div className="font-bold text-white mb-1">Contato Direto</div>
              <span>Sem intermediários</span>
            </div>
            <div>
              <div className="font-bold text-white mb-1">Análise Grátis</div>
              <span>Até 24h úteis</span>
            </div>
            <div>
              <div className="font-bold text-white mb-1">Acordo NDA</div>
              <span>Total confidencialidade</span>
            </div>
            <div>
              <div className="font-bold text-white mb-1">Contrato Legal</div>
              <span>Garantia jurídica</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
export default Contact;
