import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { APPS_DATA } from "../data";
import { DynamicIcon } from "./DynamicIcon";
import { ArrowLeft, ArrowUpRight, CheckCircle, Smartphone, Play, Download, Star, Sun, Moon } from "lucide-react";


const appIcons: Record<string, string> = {
  "obra-facil": "obra_facil_icon_512.png",
  "bandflow": "bandflow-icon-512.png",
  "investmap": "icon-investmap-512.png",
  "fitmap": "icon-fitmap-512.png",
  "portfy": "icon-portfy-512.png",
  "dinlab": "icon-dinlab-512.png",
  "mercadofacil": "mercadofacil-icon-512.png"
};

interface AppDetailsProps {
  appId: string;
  onBack: () => void;
}

// Subcomponent to render beautiful direct-CSS mockups of mobile app screens
function MobileMockup({ appId, screenIndex }: { appId: string; screenIndex: number }) {
  // Theme color maps for mockups
  const themeMap: Record<string, { primary: string; text: string; bg: string; border: string; accent: string }> = {
    "obra-facil": {
      primary: "bg-orange-600",
      text: "text-orange-600",
      bg: "bg-orange-50/40",
      border: "border-orange-100",
      accent: "bg-orange-500"
    },
    "bandflow": {
      primary: "bg-indigo-600",
      text: "text-indigo-600",
      bg: "bg-indigo-50/40",
      border: "border-indigo-100",
      accent: "bg-indigo-500"
    },
    "investmap": {
      primary: "bg-emerald-600",
      text: "text-emerald-600",
      bg: "bg-emerald-50/40",
      border: "border-emerald-100",
      accent: "bg-emerald-500"
    },
    "fitmap": {
      primary: "bg-rose-600",
      text: "text-rose-600",
      bg: "bg-rose-50/40",
      border: "border-rose-100",
      accent: "bg-rose-500"
    },
    "portfy": {
      primary: "bg-sky-600",
      text: "text-sky-600",
      bg: "bg-sky-50/40",
      border: "border-sky-100",
      accent: "bg-sky-500"
    },
    "dinlab": {
      primary: "bg-teal-600",
      text: "text-teal-600",
      bg: "bg-teal-50/40",
      border: "border-teal-100",
      accent: "bg-teal-500"
    },
    "mercadofacil": {
      primary: "bg-amber-600",
      text: "text-amber-600",
      bg: "bg-amber-50/40",
      border: "border-amber-100",
      accent: "bg-amber-500"
    }
  };

  const theme = themeMap[appId] || themeMap["obra-facil"];

  // Return screens based on index & app
  const renderScreenContent = () => {
    switch (appId) {
      case "obra-facil":
        if (screenIndex === 0) {
          return (
            <div className="flex flex-col h-full text-left">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-neutral-400">PAINEL FINANCEIRO</span>
                <span className="text-[9px] bg-orange-100 text-orange-800 font-semibold px-1.5 py-0.5 rounded-sm">Fase 1</span>
              </div>
              <div className="text-lg font-bold text-neutral-900">R$ 48.250,00</div>
              <div className="text-[9px] text-neutral-400 mb-3">gasto de R$ 75.000,00 total</div>
              <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-orange-500 h-full w-[64%]" />
              </div>
              <div className="text-[10px] font-bold text-neutral-700 mb-2">Próximos Pagamentos</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-neutral-50 rounded-md border border-neutral-100">
                  <span className="text-[9px] font-medium text-neutral-800">Cimento & Areia</span>
                  <span className="text-[9px] font-bold text-neutral-900">R$ 2.400,00</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-neutral-50 rounded-md border border-neutral-100">
                  <span className="text-[9px] font-medium text-neutral-800">Mão de obra Gesso</span>
                  <span className="text-[9px] font-bold text-neutral-900">R$ 1.850,00</span>
                </div>
              </div>
            </div>
          );
        }
        if (screenIndex === 1) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-4 uppercase">Cronograma Geral</span>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center text-[8px] font-bold text-orange-600 mt-0.5">1</div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-800">Fundação e Pilares</div>
                    <div className="text-[9px] text-neutral-500">Concluído em 12 dias</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-[8px] font-bold text-white mt-0.5">2</div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-800">Paredes e Alvenaria</div>
                    <div className="text-[9px] text-neutral-500">Em andamento (85%)</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center text-[8px] font-bold text-neutral-400 mt-0.5">3</div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400">Instalação Hidráulica</div>
                    <div className="text-[9px] text-neutral-400">Pendente</div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        if (screenIndex === 2) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Diário de Obra</span>
              <div className="bg-orange-50 rounded-lg p-2.5 border border-orange-100 mb-3">
                <div className="text-[9px] text-orange-800 font-bold mb-1">Registro de Ontem - 15:40</div>
                <p className="text-[9px] text-orange-950 leading-relaxed">Paredes externas concluídas e início da passagem de fiação para tomadas da cozinha.</p>
              </div>
              <div className="text-[9px] font-bold text-neutral-700 mb-2">Fotos Anexadas</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square rounded-md bg-neutral-200 border border-neutral-300 flex items-center justify-center text-[8px] text-neutral-500">Foto RDO 1</div>
                <div className="aspect-square rounded-md bg-neutral-200 border border-neutral-300 flex items-center justify-center text-[8px] text-neutral-500">Foto RDO 2</div>
              </div>
            </div>
          );
        }
        return (
          <div className="flex flex-col h-full text-left">
            <span className="text-[10px] font-bold text-neutral-400 mb-4 uppercase">Calculadora</span>
            <div className="space-y-2.5">
              <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                <div className="text-[8px] text-neutral-400">Área total da parede</div>
                <div className="text-[11px] font-bold text-neutral-800">45.5 m²</div>
              </div>
              <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                <div className="text-[8px] text-neutral-400">Tamanho do revestimento</div>
                <div className="text-[11px] font-bold text-neutral-800">60x60 cm</div>
              </div>
              <div className="p-3 bg-orange-500 text-white rounded-lg text-center font-bold text-[10px] shadow-sm">
                Calcular Caixas
              </div>
              <div className="text-[9px] text-center text-neutral-500">Estimativa: 147 pisos (14 caixas)</div>
            </div>
          </div>
        );

      case "bandflow":
        if (screenIndex === 0) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[9px] font-bold text-indigo-500 uppercase tracking-wider mb-1">AGENDA DE SHOWS</span>
              <div className="text-sm font-bold text-neutral-900 mb-4">Teatro Municipal</div>
              <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-lg mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-bold text-indigo-800">29 de Setembro</div>
                  <div className="text-[8px] text-indigo-600">Sábado às 21h00</div>
                </div>
                <span className="text-[8px] bg-indigo-600 text-white font-bold px-1.5 py-0.5 rounded-xs">Confirmado</span>
              </div>
              <div className="text-[9px] font-bold text-neutral-700 mb-2">Requisitos de Equipamentos</div>
              <ul className="space-y-1 text-[8px] text-neutral-600 list-disc list-inside">
                <li>Amplificador de Baixo (300w)</li>
                <li>3 Pedestais de Microfone</li>
                <li>Monitor de Retorno Individual</li>
              </ul>
            </div>
          );
        }
        if (screenIndex === 1) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Setlist Especial</span>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between p-2 bg-neutral-50 rounded-md border border-neutral-100">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-mono text-neutral-400">01</span>
                    <span className="text-[10px] font-bold text-neutral-800">Geração Digital</span>
                  </div>
                  <span className="text-[9px] text-neutral-500">4:20</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-neutral-50 rounded-md border border-neutral-100">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-mono text-neutral-400">02</span>
                    <span className="text-[10px] font-bold text-neutral-800">Voz do Silêncio</span>
                  </div>
                  <span className="text-[9px] text-neutral-500">3:55</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-indigo-50 border border-indigo-100 rounded-md">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-mono text-indigo-500">03</span>
                    <span className="text-[10px] font-bold text-indigo-900">Eco da Noite</span>
                  </div>
                  <span className="text-[9px] text-indigo-600">5:12</span>
                </div>
              </div>
            </div>
          );
        }
        if (screenIndex === 2) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[9px] font-bold text-neutral-400 mb-1">PRODUTOR DE CIFRAS</span>
              <div className="text-[11px] font-bold text-indigo-700 mb-3">Eco da Noite (Tom: Am)</div>
              <div className="font-mono text-[9px] leading-relaxed space-y-2">
                <div>
                  <span className="bg-indigo-100 text-indigo-800 px-1 rounded-xs font-bold mr-1">Am</span>
                  <span className="bg-indigo-100 text-indigo-800 px-1 rounded-xs font-bold">F</span>
                  <p className="text-neutral-700 mt-1">Caminhando sobre as sombras sob a lua</p>
                </div>
                <div>
                  <span className="bg-indigo-100 text-indigo-800 px-1 rounded-xs font-bold mr-1">C</span>
                  <span className="bg-indigo-100 text-indigo-800 px-1 rounded-xs font-bold">G</span>
                  <p className="text-neutral-700 mt-1">Vejo os rastros que você deixou na rua</p>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="flex flex-col h-full text-left">
            <span className="text-[10px] font-bold text-neutral-400 mb-4 uppercase">Divisão de Caixa</span>
            <div className="bg-neutral-900 text-white rounded-lg p-3 text-center mb-3">
              <div className="text-[8px] text-neutral-400">SALDO TOTAL DA BANDA</div>
              <div className="text-lg font-bold">R$ 4.200,00</div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[9px] border-b border-neutral-100 pb-1">
                <span className="text-neutral-500">Cachê (22/09)</span>
                <span className="text-emerald-600 font-bold">+R$ 2.500</span>
              </div>
              <div className="flex justify-between text-[9px] border-b border-neutral-100 pb-1">
                <span className="text-neutral-500">Estúdio</span>
                <span className="text-rose-600 font-bold">-R$ 300</span>
              </div>
              <div className="flex justify-between text-[9px] pt-1 font-bold text-neutral-800">
                <span>Cota Integrante (x4)</span>
                <span>R$ 975,00</span>
              </div>
            </div>
          </div>
        );

      case "investmap":
        if (screenIndex === 0) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400">PATRIMÔNIO GLOBAL</span>
              <div className="text-lg font-bold text-neutral-900 mt-0.5">R$ 145.890,20</div>
              <div className="text-[9px] text-emerald-600 font-semibold mb-3 flex items-center gap-0.5">
                <span>+R$ 12.300,45 (8.4%)</span>
                <span className="text-[8px] text-neutral-400 font-normal">Este mês</span>
              </div>
              
              {/* Minimalist Chart Drawing */}
              <div className="h-20 flex items-end justify-between gap-1 border-b border-neutral-100 pb-1 mb-3">
                {[20, 30, 25, 45, 40, 65, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-emerald-100/50 rounded-t-xs h-full flex items-end">
                    <div className="w-full bg-emerald-500 rounded-t-xs" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
                <span>JAN</span>
                <span>MAR</span>
                <span>MAI</span>
                <span>JUL</span>
              </div>
            </div>
          );
        }
        if (screenIndex === 1) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Alocação Atual</span>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[9px] mb-0.5">
                    <span className="font-bold text-neutral-800">Ações (Nacional)</span>
                    <span className="font-mono font-semibold text-neutral-500">45%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[45%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] mb-0.5">
                    <span className="font-bold text-neutral-800">Fundos Imobiliários</span>
                    <span className="font-mono font-semibold text-neutral-500">25%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[25%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] mb-0.5">
                    <span className="font-bold text-neutral-800">Ações Internacionais</span>
                    <span className="font-mono font-semibold text-neutral-500">18%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[18%]" />
                  </div>
                </div>
              </div>
            </div>
          );
        }
        if (screenIndex === 2) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Proventos Recebidos</span>
              <div className="bg-emerald-50 text-emerald-950 p-2.5 rounded-lg border border-emerald-100 mb-4 text-center">
                <span className="text-[8px] block uppercase text-emerald-800 font-bold">ESTE MÊS</span>
                <span className="text-base font-bold">R$ 840,25</span>
              </div>
              <div className="text-[9px] font-bold text-neutral-700 mb-1.5">Últimos Lançamentos</div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[8px] border-b border-neutral-50 pb-1">
                  <span className="text-neutral-600 font-medium">PETR4 (Dividendos)</span>
                  <span className="text-emerald-600 font-bold">R$ 210,00</span>
                </div>
                <div className="flex justify-between text-[8px] border-b border-neutral-50 pb-1">
                  <span className="text-neutral-600 font-medium">MXRF11 (Rendimentos)</span>
                  <span className="text-emerald-600 font-bold">R$ 145,50</span>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="flex flex-col h-full text-left">
            <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Radar de Metas</span>
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-neutral-800">Liberdade Financeira</div>
                  <div className="text-[8px] text-neutral-500">R$ 250k de R$ 1M</div>
                </div>
                <span className="text-[9px] text-neutral-600 font-mono font-bold">25%</span>
              </div>
              <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[25%]" />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="text-[10px] font-bold text-neutral-800">Carro Novo</div>
                  <div className="text-[8px] text-neutral-500">R$ 48k de R$ 80k</div>
                </div>
                <span className="text-[9px] text-neutral-600 font-mono font-bold">60%</span>
              </div>
              <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[60%]" />
              </div>
            </div>
          </div>
        );

      case "fitmap":
        if (screenIndex === 0) {
          return (
            <div className="flex flex-col h-full text-center">
              <span className="text-[9px] font-bold text-rose-500 uppercase tracking-wider mb-2">Treino Ativo</span>
              <div className="text-2xl font-bold text-neutral-900 tracking-tight">00:34:12</div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-rose-50/50 p-2 rounded-lg border border-rose-100">
                  <div className="text-[8px] text-neutral-400 uppercase">Distância</div>
                  <div className="text-xs font-bold text-neutral-800">6.42 km</div>
                </div>
                <div className="bg-rose-50/50 p-2 rounded-lg border border-rose-100">
                  <div className="text-[8px] text-neutral-400 uppercase">Ritmo (Pace)</div>
                  <div className="text-xs font-bold text-neutral-800">5'18\" /km</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold">||</div>
                <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold">▶</div>
              </div>
            </div>
          );
        }
        if (screenIndex === 1) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Planejamento de Rota</span>
              <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-100 mb-3">
                <div className="text-[9px] font-bold text-rose-800">Parque da Cidade - Lagoa</div>
                <div className="text-[8px] text-neutral-500">Distância total estimativa: 8.5 km</div>
              </div>
              <div className="flex-1 bg-neutral-100 rounded-md flex items-center justify-center relative overflow-hidden">
                {/* Simulated map route drawing */}
                <svg className="w-full h-full stroke-rose-500 fill-none" viewBox="0 0 100 100">
                  <path d="M 10,80 Q 50,20 90,80 T 50,50" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="10" cy="80" r="5" fill="#171717" />
                  <circle cx="50" cy="50" r="5" fill="#f43f5e" />
                </svg>
                <span className="absolute bottom-2 right-2 text-[8px] bg-white border px-1.5 rounded-sm font-semibold">Rotas Populares</span>
              </div>
            </div>
          );
        }
        if (screenIndex === 2) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-2 uppercase">Histórico Semanal</span>
              <div className="text-[11px] font-bold text-neutral-800 mb-3">Total acumulado: 42.1 km</div>
              <div className="flex items-end justify-between gap-1.5 h-20 pt-2 border-b border-neutral-100">
                {[5, 12, 8, 15, 6, 0, 10].map((km, i) => (
                  <div key={i} className="flex-1 bg-rose-100 rounded-t-xs h-full flex items-end">
                    <div className="w-full bg-rose-500 rounded-t-xs" style={{ height: `${(km / 15) * 100}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[8px] text-neutral-400 font-mono mt-1">
                <span>S</span>
                <span>T</span>
                <span>Q</span>
                <span>Q</span>
                <span>S</span>
                <span>S</span>
                <span>D</span>
              </div>
            </div>
          );
        }
        return (
          <div className="flex flex-col h-full text-left">
            <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Sua Saúde</span>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-neutral-50 rounded-lg border border-neutral-100">
                <div>
                  <div className="text-[9px] font-bold text-neutral-800">Frequência Repouso</div>
                  <div className="text-[8px] text-neutral-400">Medido hoje 06:12</div>
                </div>
                <span className="text-xs font-bold text-neutral-900">58 BPM</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-neutral-50 rounded-lg border border-neutral-100">
                <div>
                  <div className="text-[9px] font-bold text-neutral-800">Calorias Ativas</div>
                  <div className="text-[8px] text-neutral-400">Meta diária 600 kcal</div>
                </div>
                <span className="text-xs font-bold text-neutral-900 text-rose-600">420 kcal</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-neutral-50 rounded-lg border border-neutral-100">
                <div>
                  <div className="text-[9px] font-bold text-neutral-800">Qualidade de Sono</div>
                  <div className="text-[8px] text-neutral-400">Duração: 7h 45m</div>
                </div>
                <span className="text-xs font-bold text-emerald-600">Excelente</span>
              </div>
            </div>
          </div>
        );

      case "portfy":
        if (screenIndex === 0) {
          return (
            <div className="flex flex-col h-full text-center">
              <span className="text-[9px] font-bold text-sky-600 uppercase tracking-widest mb-1">Visualização do Site</span>
              <div className="border border-neutral-200/50 rounded-lg p-3 bg-white shadow-xs text-left mt-2">
                <div className="text-[11px] font-bold text-neutral-900">Mariana Costa</div>
                <div className="text-[8px] text-neutral-500 mb-2">Designer de Interfaces</div>
                <p className="text-[8px] text-neutral-400 leading-relaxed mb-3">Estúdio focado em minimalismo digital e identidades visuais marcantes para startups globais.</p>
                <div className="inline-block text-[7px] bg-neutral-900 text-white font-bold px-1.5 py-0.5 rounded-sm">Ver Projetos</div>
              </div>
            </div>
          );
        }
        if (screenIndex === 1) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Meus Trabalhos</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="border rounded-md p-1.5 bg-neutral-50 border-neutral-100">
                  <div className="aspect-[4/3] bg-neutral-200 rounded-sm mb-1 text-[8px] text-neutral-400 flex items-center justify-center">Mockup 1</div>
                  <div className="text-[9px] font-bold text-neutral-800 truncate">SaaS Platform</div>
                </div>
                <div className="border rounded-md p-1.5 bg-neutral-50 border-neutral-100">
                  <div className="aspect-[4/3] bg-neutral-200 rounded-sm mb-1 text-[8px] text-neutral-400 flex items-center justify-center">Mockup 2</div>
                  <div className="text-[9px] font-bold text-neutral-800 truncate">Fintech Brand</div>
                </div>
              </div>
            </div>
          );
        }
        if (screenIndex === 2) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Métricas de Acesso</span>
              <div className="bg-sky-50 text-sky-950 p-2 rounded-lg border border-sky-100 mb-3">
                <div className="text-[8px] text-sky-800 font-bold uppercase">VISITAS RECENTES</div>
                <div className="text-sm font-bold">1,840 cliques</div>
              </div>
              <div className="text-[8px] font-bold text-neutral-500 mb-1">Principais Origens</div>
              <ul className="space-y-1 text-[8px] text-neutral-600">
                <li className="flex justify-between border-b pb-0.5"><span>LinkedIn</span> <span>64%</span></li>
                <li className="flex justify-between border-b pb-0.5"><span>Twitter/X</span> <span>22%</span></li>
                <li className="flex justify-between border-b pb-0.5"><span>Busca Google</span> <span>14%</span></li>
              </ul>
            </div>
          );
        }
        return (
          <div className="flex flex-col h-full text-left">
            <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Currículo PDF</span>
            <div className="border border-neutral-200 rounded-lg p-2.5 bg-neutral-50 space-y-2">
              <div className="border-b pb-1.5">
                <div className="text-[10px] font-bold text-neutral-800">Mariana Costa</div>
                <div className="text-[7px] text-neutral-400">designer@marianacosta.com</div>
              </div>
              <div>
                <div className="text-[8px] font-bold text-neutral-700">Experiência</div>
                <p className="text-[7px] text-neutral-500 font-medium">Senior UI Designer na PayTech (2022-Atual)</p>
                <p className="text-[7px] text-neutral-500 font-medium">Product Designer na InovaStudio (2019-2022)</p>
              </div>
            </div>
          </div>
        );

      case "dinlab":
        if (screenIndex === 0) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400">DISPONÍVEL ESTE MÊS</span>
              <div className="text-lg font-bold text-neutral-900 mt-0.5">R$ 5.480,25</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="bg-teal-50 rounded-lg p-2 border border-teal-100">
                  <span className="text-[7px] text-teal-800 uppercase block">Recebido</span>
                  <span className="text-[10px] font-bold text-teal-950">R$ 8.200,00</span>
                </div>
                <div className="bg-rose-50 rounded-lg p-2 border border-rose-100">
                  <span className="text-[7px] text-rose-800 uppercase block">Fatura</span>
                  <span className="text-[10px] font-bold text-rose-950">R$ 2.719,75</span>
                </div>
              </div>
            </div>
          );
        }
        if (screenIndex === 1) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Tetos Ativos</span>
              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex justify-between text-[9px] mb-0.5">
                    <span className="font-bold text-neutral-800">Alimentação e Delivery</span>
                    <span className="font-mono text-neutral-500">R$ 450/R$ 800</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal-500 h-full w-[56%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] mb-0.5">
                    <span className="font-bold text-neutral-800">Lazer e Viagens</span>
                    <span className="font-mono text-rose-600 font-bold">R$ 480/R$ 500</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-[96%]" />
                  </div>
                </div>
              </div>
            </div>
          );
        }
        if (screenIndex === 2) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Cofres Virtuais</span>
              <div className="space-y-2">
                <div className="p-2.5 bg-teal-50 border border-teal-100 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-bold text-teal-950">Intercâmbio 2026</div>
                    <div className="text-[8px] text-teal-700">Economizado: R$ 12.500,00</div>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-teal-800">82%</span>
                </div>
                <div className="p-2.5 bg-neutral-50 border border-neutral-150 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-bold text-neutral-800">Reserva de Emergência</div>
                    <div className="text-[8px] text-neutral-500">Economizado: R$ 5.000,00</div>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-neutral-600">50%</span>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="flex flex-col h-full text-left">
            <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Histórico de Gastos</span>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[9px] border-b pb-1.5">
                <div>
                  <span className="font-bold text-neutral-800 block">Supermercado Silva</span>
                  <span className="text-[8px] text-neutral-400">Hoje às 11:24 - Alimentação</span>
                </div>
                <span className="font-bold text-rose-600">-R$ 142,50</span>
              </div>
              <div className="flex justify-between items-center text-[9px] border-b pb-1.5">
                <div>
                  <span className="font-bold text-neutral-800 block">Uber Viagem</span>
                  <span className="text-[8px] text-neutral-400">Ontem às 22:15 - Transporte</span>
                </div>
                <span className="font-bold text-rose-600">-R$ 28,40</span>
              </div>
            </div>
          </div>
        );

      case "mercadofacil":
        if (screenIndex === 0) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Lista de Compras Ativa</span>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] text-neutral-700">
                  <input type="checkbox" defaultChecked className="rounded text-amber-500 focus:ring-amber-500" />
                  <span className="line-through text-neutral-400">Café em grãos 500g</span>
                </label>
                <label className="flex items-center gap-2 text-[10px] text-neutral-700">
                  <input type="checkbox" className="rounded text-amber-500 focus:ring-amber-500" />
                  <span>Leite desnatado (2 un)</span>
                </label>
                <label className="flex items-center gap-2 text-[10px] text-neutral-700">
                  <input type="checkbox" className="rounded text-amber-500 focus:ring-amber-500" />
                  <span>Sabão líquido para roupas</span>
                </label>
              </div>
            </div>
          );
        }
        if (screenIndex === 1) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Mapeamento de Corredor</span>
              <div className="space-y-2">
                <div className="p-2 bg-amber-50 border border-amber-100 rounded-lg">
                  <span className="text-[8px] font-bold text-amber-800 uppercase">Seção Laticínios (3 itens)</span>
                  <p className="text-[9px] text-neutral-600 mt-0.5">Queijo prato, Manteiga com sal, Iogurte natural</p>
                </div>
                <div className="p-2 bg-neutral-50 border border-neutral-100 rounded-lg">
                  <span className="text-[8px] font-bold text-neutral-600 uppercase">Seção Padaria (1 item)</span>
                  <p className="text-[9px] text-neutral-500 mt-0.5">Pão de forma integral</p>
                </div>
              </div>
            </div>
          );
        }
        if (screenIndex === 2) {
          return (
            <div className="flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-neutral-400 mb-3">BALANÇO ESTIMADO</span>
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-center mb-3">
                <div className="text-[8px] text-amber-800 font-bold uppercase">VALOR DO CARRINHO</div>
                <div className="text-sm font-bold text-amber-950">R$ 138,40</div>
              </div>
              <div className="text-[8px] text-neutral-500 leading-normal">
                Com base na média histórica dos preços que você registrou anteriormente nos mercados da região.
              </div>
            </div>
          );
        }
        return (
          <div className="flex flex-col h-full text-left">
            <span className="text-[10px] font-bold text-neutral-400 mb-3 uppercase">Grupo de Compras</span>
            <div className="text-[11px] font-bold text-neutral-800 mb-2">Compartilhado com (3)</div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold text-[8px] flex items-center justify-center">M</div>
                <span className="text-[9px] font-medium text-neutral-700">Marcelo (Dono)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-500 text-white font-bold text-[8px] flex items-center justify-center">A</div>
                <span className="text-[9px] font-medium text-neutral-700">Ana (Adicionou Café)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white font-bold text-[8px] flex items-center justify-center">J</div>
                <span className="text-[9px] font-medium text-neutral-700">Julia (Online agora)</span>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Simulação do app</div>;
    }
  };

  const getMockupTitle = () => {
    const screens: Record<string, string[]> = {
      "obra-facil": ["Custos", "Cronograma", "Relatórios", "Cálculos"],
      "bandflow": ["Shows", "Repertório", "Cifras", "Finanças"],
      "investmap": ["Rentabilidade", "Alocação", "Dividendos", "Metas"],
      "fitmap": ["Treino", "Rotas", "Evolução", "Saúde"],
      "portfy": ["Site", "Trabalhos", "Visitas", "Currículo"],
      "dinlab": ["Carteira", "Tetos", "Cofres", "Histórico"],
      "mercadofacil": ["Lista", "Corredores", "Orçamento", "Membros"]
    };
    return screens[appId]?.[screenIndex] || "Visualização";
  };

  return (
    <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-[9/19.5] rounded-[32px] border-4 sm:border-8 border-neutral-900 bg-neutral-950 p-2.5 sm:p-3 shadow-xl flex flex-col justify-between overflow-hidden">
      {/* Notch speaker */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-900 rounded-b-lg z-20 flex items-start justify-center">
        <div className="w-8 h-1 bg-neutral-800 rounded-full mt-1" />
      </div>

      {/* Screen Frame Content Area */}
      <div className="flex-1 w-full bg-white rounded-[20px] pt-5 px-3 pb-3 flex flex-col justify-between overflow-hidden relative border border-neutral-100">
        
        {/* Visual Simulated System Status Bar */}
        <div className="flex justify-between items-center text-[8px] font-bold text-neutral-400 absolute top-1 left-3 right-3 select-none pointer-events-none z-10">
          <span>09:41</span>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-3.5 h-2 border border-neutral-400 rounded-xs flex items-center p-px">
              <div className="w-full h-full bg-neutral-500 rounded-xs" />
            </div>
          </div>
        </div>

        {/* Dynamic mockup view */}
        <div className="flex-1 flex flex-col pt-3 h-full">
          {renderScreenContent()}
        </div>

        {/* App Mock Footer */}
        <div className="border-t border-neutral-100 pt-2 flex justify-between items-center text-[8px] font-bold text-neutral-400">
          <span className={theme.text}>{getMockupTitle()}</span>
          <span>Configurações</span>
        </div>
      </div>
    </div>
  );
}

// Mapa de quantos screenshots cada app tem
const screenshotsCount: Record<string, number> = {
  "obra-facil": 0,
  "bandflow": 10,
  "investmap": 8,
  "fitmap": 7,
  "portfy": 4,
  "dinlab": 11,
  "mercadofacil": 7,
};

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function HeroMockup({ appId }: { appId: string }) {
  const count = screenshotsCount[appId] || 0;
  const [src] = useState<string>(() => {
    const random = Math.floor(Math.random() * count) + 1;
    return `/screenshots/${appId}/${random}.jpg`;
  });

  return (
    <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-[9/19.5] rounded-[32px] border-4 sm:border-8 border-neutral-900 bg-neutral-950 overflow-hidden shadow-xl">
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-900 rounded-b-lg z-20 flex items-start justify-center">
        <div className="w-8 h-1 bg-neutral-800 rounded-full mt-1" />
      </div>
      <img src={src} alt="Screenshot do app" className="w-full h-full object-cover" />
    </div>
  );
}

function ScreenshotsGallery({ appId }: { appId: string }) {
  const count = screenshotsCount[appId] || 0;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const [screenshots] = useState<string[]>(() => {
    const all = Array.from({ length: count }, (_, i) => `/screenshots/${appId}/${i + 1}.jpg`);
    return shuffleArray(all);
  });

  if (count === 0) {
    return (
      <section className="py-20 bg-neutral-50 border-y border-neutral-150/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">GALERIA DO APP</div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-4">Screenshots em breve</h3>
          <p className="text-neutral-500 text-sm">Este app ainda está em desenvolvimento. As capturas de tela serão adicionadas em breve.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-neutral-50 border-y border-neutral-150/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">GALERIA DO APP</div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Conheça a interface do aplicativo
          </h3>
          <p className="text-neutral-500 text-xs sm:text-sm">
            Capturas reais do app. Clique em qualquer imagem para ampliar.
          </p>
        </div>

        {/* Carrossel horizontal com scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {screenshots.map((src, i) => (
            <div
              key={i}
              className="flex-none snap-center cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <div className="relative w-[160px] sm:w-[200px] aspect-[9/19.5] rounded-[28px] border-4 border-neutral-900 bg-neutral-950 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
                {/* Notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-neutral-900 rounded-b-lg z-10" />
                <img
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-xs text-neutral-400 mt-2 font-medium">{i + 1} / {count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold opacity-70 hover:opacity-100"
            onClick={() => setLightbox(null)}
          >✕</button>
          <button
            className="absolute left-4 text-white text-3xl font-bold opacity-70 hover:opacity-100 px-2"
            onClick={(e) => { e.stopPropagation(); setLightbox(Math.max(0, lightbox - 1)); }}
          >‹</button>
          <img
            src={screenshots[lightbox]}
            alt={`Screenshot ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white text-3xl font-bold opacity-70 hover:opacity-100 px-2"
            onClick={(e) => { e.stopPropagation(); setLightbox(Math.min(count - 1, lightbox + 1)); }}
          >›</button>
          <p className="absolute bottom-4 text-white/60 text-sm">{lightbox + 1} / {count}</p>
        </div>
      )}
    </section>
  );
}

export function AppDetails({ appId, onBack }: AppDetailsProps) {
  const app = APPS_DATA.find((a) => a.id === appId);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const isCurrentlyDark = root.classList.contains("dark");
    if (isCurrentlyDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    window.dispatchEvent(new Event("theme-change"));
  };

  if (!app) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
        <p className="text-neutral-500 mb-4">Aplicativo não encontrado.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-neutral-950 text-white rounded-md text-xs font-bold"
        >
          Voltar para Início
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      
      {/* Dynamic Header matching Landing Page */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Voltar button */}
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer focus:outline-hidden"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar</span>
          </button>

          {/* Logo Center */}
          <button
            onClick={onBack}
            className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity focus:outline-hidden"
          >
            <span className="font-sans font-bold text-base tracking-tight text-neutral-900">
              Nespoli<span className="text-neutral-500 font-light">Digital</span>
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-950" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-600 hover:text-neutral-950 rounded-lg transition-colors focus:outline-hidden cursor-pointer"
            aria-label="Alternar tema"
          >
            {isDark ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-neutral-50/50 border-b border-neutral-100">
          <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
            <div className="absolute top-[20%] left-[20%] w-60 h-60 rounded-full bg-neutral-200 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              {/* Launcher/Icon Area */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={`/icons/${appIcons[app.id] || "obra_facil_icon_512.png"}`}
                  alt={app.name}
                  style={{ width: "80px", height: "80px", borderRadius: "18px", objectFit: "cover", border: "1px solid #e5e5e5" }}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border ${app.tagColor.bg} ${app.tagColor.text} ${app.tagColor.border} mb-1.5`}>
                    {app.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Star size={12} className="text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-neutral-700">4.9</span>
                    <span className="text-[10px] text-neutral-400 font-medium">(1.4k avaliações)</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-neutral-900 leading-tight mb-4">
                {app.name}
              </h1>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-neutral-600 font-medium mb-8 max-w-2xl leading-relaxed">
                {app.tagline}
              </p>

              {/* Google Play Button */}
              <a
                href="#"
                className="google-play-button inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-950 text-white rounded-xl hover:bg-neutral-850 transition-all shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-neutral-950 focus:outline-hidden"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M5.25 3.125a.875.875 0 00-.814.549l9.317 9.317 9.318-9.317a.875.875 0 00-.814-.549h-17.007zm-1.06 1.777v14.196l7.098-7.098-7.098-7.098zm8.158 8.158l-7.098 7.098a.875.875 0 00.814.549h17.007a.875.875 0 00.814-.549l-11.537-7.098zM14.5 12.5l7.098 7.098V4.902L14.5 12.5z" />
                </svg>
                <div className="text-left leading-none">
                  <p className="text-[9px] text-neutral-400 uppercase tracking-widest font-semibold">Disponível no</p>
                  <p className="text-sm font-bold mt-1">Google Play</p>
                </div>
              </a>
            </div>

            {/* Right Phone Mockup com screenshot aleatório */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              {screenshotsCount[app.id] > 0 ? (
                <HeroMockup appId={app.id} />
              ) : (
                <MobileMockup appId={app.id} screenIndex={0} />
              )}
            </div>

          </div>
        </section>

        {/* Sobre o App / Descrição completa */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">
              SOBRE O APLICATIVO
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-8">
              Uma nova experiência projetada para resolver suas dores do início ao fim
            </h2>
            
            {/* Description Paragraphs block */}
            <div className="space-y-6 text-neutral-600 text-sm sm:text-base leading-relaxed">
              {app.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria de Screenshots com imagens reais */}
        <ScreenshotsGallery appId={app.id} />

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">
                Funcionalidades Principais
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
                Tudo o que você precisa em uma única plataforma integrada
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm">
                Nossos desenvolvedores planejaram recursos estratégicos para trazer máxima eficiência operacional, dispensando ferramentas secundárias.
              </p>
            </div>

            {/* 6 Features layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {app.features.map((feat, i) => (
                <div key={i} className="p-6 bg-white border border-neutral-200/60 rounded-2xl hover:border-neutral-900/15 transition-all duration-200">
                  <div className={`p-2.5 w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${app.tagColor.bg}`}>
                    <DynamicIcon name={feat.iconName} size={18} className={app.tagColor.icon} />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-neutral-900 mb-2">{feat.title}</h4>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            
            <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/25 blur-3xl" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight mb-4">
                Disponível gratuitamente no seu smartphone
              </h2>
              
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
                Baixe agora e comece a usufruir da melhor e mais limpa experiência digital do mercado. Atualizações de performance semanais gratuitas.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <a
                  href="#"
                  className="google-play-button inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-950 font-bold rounded-xl hover:bg-neutral-100 transition-all shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-white focus:outline-hidden"
                >
                  <svg className="w-5 h-5 fill-current text-neutral-950" viewBox="0 0 24 24">
                    <path d="M5.25 3.125a.875.875 0 00-.814.549l9.317 9.317 9.318-9.317a.875.875 0 00-.814-.549h-17.007zm-1.06 1.777v14.196l7.098-7.098-7.098-7.098zm8.158 8.158l-7.098 7.098a.875.875 0 00.814.549h17.007a.875.875 0 00.814-.549l-11.537-7.098zM14.5 12.5l7.098 7.098V4.902L14.5 12.5z" />
                  </svg>
                  <div className="text-left leading-none">
                    <p className="text-[9px] text-neutral-400 uppercase tracking-widest font-semibold">Baixar no</p>
                    <p className="text-sm font-bold mt-1">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer matching landing page */}
      <footer className="bg-white border-t border-neutral-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-1.5 text-sm font-sans text-neutral-500">
            <span className="font-bold text-neutral-900">Nespoli<span className="text-neutral-500 font-light">Digital</span></span>
            <span className="h-1 w-1 rounded-full bg-neutral-950" />
            <span>© 2026 Nespoli Digital. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <button onClick={onBack} className="hover:text-neutral-900 transition-colors">Voltar ao Início</button>
          </div>

        </div>
      </footer>
    </div>
  );
}
export default AppDetails;