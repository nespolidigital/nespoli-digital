import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white border-t border-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left branding */}
        <div className="flex items-center gap-1.5 text-sm font-sans text-neutral-500">
          <span className="font-bold text-neutral-900">Nespoli<span className="text-neutral-500 font-light">Digital</span></span>
          <span className="h-1 w-1 rounded-full bg-neutral-950" />
          <span>© 2026 Nespoli Digital. Todos os direitos reservados.</span>
        </div>

        {/* Right navigation and Scroll Top */}
        <div className="flex items-center gap-6 text-xs text-neutral-400">
          <a href="#apps" className="hover:text-neutral-900 transition-colors">Apps</a>
          <a href="#servicos" className="hover:text-neutral-900 transition-colors">Serviços</a>
          <a href="#contato" className="hover:text-neutral-900 transition-colors">Contato</a>
          
          <button
            onClick={handleScrollTop}
            className="p-2 rounded-full border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-all cursor-pointer focus:outline-hidden"
            title="Voltar ao topo"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
