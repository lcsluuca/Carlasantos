
import React from 'react';
import { EXPERT_INFO, HERO_IMAGE, BIO_PHOTOS, RESULTS_GALLERY, TRUST_BENEFITS, STEPS } from './constants';
import Button from './components/Button';
import Gallery from './components/Gallery';
import { Instagram, MapPin, ChevronRight, CheckCircle2, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. HERO SECTION (LADO A LADO) */}
      <section className="bg-white pt-16 md:pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Coluna de Texto */}
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 font-semibold tracking-wider text-[10px] uppercase rounded-full border border-emerald-100">
                {EXPERT_INFO.cro}
              </span>
              <h1 className="text-4xl lg:text-6xl text-slate-900 leading-[1.15] font-serif">
                Eu sou <span className="text-emerald-700 italic">{EXPERT_INFO.name}</span>, <br className="hidden lg:block"/>
                <span className="text-slate-500 font-normal">sua dentista em Natal.</span>
              </h1>
              <p className="text-slate-600 text-lg lg:text-xl max-w-md leading-relaxed">
                Ortodontia com propósito: um sorriso alinhado com quem você realmente é. 
                Atendimento exclusivo, humano e sem pressa.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <Button text="Agendar primeira consulta gratuita" className="w-full md:w-auto px-10 shadow-emerald-200 shadow-xl" />
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Resposta rápida pelo WhatsApp • Sem compromisso</span>
              </div>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="order-1 md:order-2 relative group">
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-emerald-50 rounded-full -z-10 blur-3xl opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-slate-100 rounded-[3rem] -z-10 hidden md:block"></div>
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl premium-shadow ring-8 ring-white">
              <img 
                src={HERO_IMAGE} 
                alt={EXPERT_INFO.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-6 right-6 md:-right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="pr-4">
                <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">Confiança</p>
                <p className="text-sm font-bold text-slate-800 italic">Ortodontia Humanizada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>
            <img 
              src={BIO_PHOTOS[0].url} 
              alt="Dra Carla Santos em atendimento" 
              className="rounded-[2rem] shadow-xl w-full h-[500px] object-cover ring-1 ring-slate-200"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-slate-800 leading-tight">Autoridade técnica com olhar humano.</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Dra. Carla Santos une precisão clínica e empatia. Aqui, cada plano de tratamento é desenhado para respeitar o tempo e os desejos do paciente.
              </p>
            </div>
            <ul className="grid gap-4">
              {[
                "Atendimento especializado adulto e infantil",
                "Especialista em Ortodontia Estética",
                "Foco no bem-estar e saúde integral",
                "Acompanhamento direto e personalizado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <span className="font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <Gallery 
        photos={RESULTS_GALLERY} 
        title="Resultados que Transformam" 
        subtitle="O sorriso ideal é aquele que te faz sentir seguro(a) para ser você mesmo(a)."
      />

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-4 italic">Por que escolher o meu cuidado?</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Excelência técnica e humanização em cada etapa da sua jornada.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_BENEFITS.map((benefit, i) => (
            <div key={i} className="group p-8 rounded-3xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-200">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-emerald-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif leading-tight italic">O sorriso dos seus sonhos está a uma conversa de distância.</h2>
          <div className="flex flex-col items-center gap-6">
            <Button text="Falar no WhatsApp agora" className="px-12" />
            <p className="text-emerald-200/50 text-xs uppercase tracking-[0.2em] font-medium">Resposta em poucos minutos</p>
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800">Sua primeira experiência</h2>
            <p className="text-slate-500">Transparência total desde o primeiro contato.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-50"></div>
            {STEPS.map((step, i) => (
              <div key={i} className="text-center relative z-10 group">
                <div className="w-20 h-20 bg-white text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-2xl font-bold shadow-lg border border-slate-50 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (BASTIDORES) */}
      <section className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-serif text-slate-800 italic">Acolhimento e Excelência</h2>
              <p className="text-slate-500 mt-2">Um espaço pensado para o seu conforto.</p>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
            {BIO_PHOTOS.slice(1).map((photo, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center">
                <div className="bg-white p-3 rounded-[2rem] shadow-sm border border-slate-100 group">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img 
                      src={photo.url} 
                      alt={photo.alt} 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-1">Bastidores</p>
                    <p className="text-slate-700 font-medium">{i === 0 ? "Ambiente Moderno" : "Cuidado em cada Detalhe"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight italic">
              Não adie o sorriso que você merece ter hoje.
            </h2>
            <div className="space-y-6">
              <Button text="Quero marcar minha consulta gratuita" className="mx-auto md:w-auto px-12 py-5 text-lg" />
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Avaliação Gratuita e Completa</span>
                </div>
                <p className="text-slate-500 text-sm">Respondo rapidamente pelo WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
            <div>
              <h3 className="text-2xl font-serif text-slate-800 italic mb-2">{EXPERT_INFO.name}</h3>
              <p className="text-slate-500 text-sm font-medium">{EXPERT_INFO.profession}</p>
              <p className="text-emerald-600 font-bold text-xs mt-1 uppercase tracking-tighter">{EXPERT_INFO.cro}</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-emerald-600 mb-2" />
              <p className="text-slate-500 text-sm max-w-[200px] text-center leading-relaxed">
                {EXPERT_INFO.address}
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end gap-4">
              <a href={EXPERT_INFO.instagramUrl} target="_blank" rel="noopener" className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-full text-slate-600 hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={EXPERT_INFO.whatsappUrl} target="_blank" rel="noopener" className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-full text-slate-600 hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
            <p>&copy; {new Date().getFullYear()} Dra. Carla Santos • Ortodontia com Propósito</p>
            <p className="flex items-center gap-1">Desenvolvido com <span className="text-red-300">❤</span> para pacientes reais</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
