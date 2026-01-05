
import React from 'react';
import { ShieldCheck, UserCheck, Sparkles, Heart, ClipboardCheck, MessageCircle } from 'lucide-react';
import { Photo, Benefit, Step } from './types';

export const EXPERT_INFO = {
  name: "Carla Santos",
  profession: "Dentista | Ortodontia com propósito",
  description: "Atendimento adulto e infantil",
  cro: "CRO/RN 6254",
  address: "Rua Marechal Rondon, 3502, Candelária, Natal, RN - 59064-730",
  whatsappUrl: "https://api.whatsapp.com/message/A3SJJLSVLCLGB1?autoload=1&app_absent=0",
  instagramUrl: "https://www.instagram.com/p/DSTaEGdDiim/"
};

export const HERO_IMAGE = "https://i.imgur.com/krG72EB.jpeg";

export const BIO_PHOTOS: Photo[] = [
  { url: "https://i.imgur.com/IkcI5Pg.jpeg", alt: "Dra Carla em atendimento" },
  { url: "https://i.imgur.com/axI02Zf.jpeg", alt: "Dra Carla consultório" },
  { url: "https://i.imgur.com/G9oxTrS.jpeg", alt: "Bastidores Dra Carla" }
];

export const RESULTS_GALLERY: Photo[] = [
  { url: "https://i.imgur.com/DJ3eHhc.jpeg", alt: "Resultado de Ortodontia 1", category: "Ortodontia" },
  { url: "https://i.imgur.com/neiCdCy.jpeg", alt: "Resultado de Ortodontia 2", category: "Ortodontia" },
  { url: "https://i.imgur.com/7ZjIuAS.jpeg", alt: "Resultado de Ortodontia 3", category: "Ortodontia" },
  { url: "https://i.imgur.com/ol1fU7l.jpeg", alt: "Resultado Botox", category: "Botox" },
  { url: "https://i.imgur.com/3sml1PD.jpeg", alt: "Atendimento Infantil", category: "Crianças" },
  { url: "https://i.imgur.com/N1SbGzl.jpeg", alt: "Resultado Estético", category: "Estética" },
  { url: "https://i.imgur.com/T6KVKoB.jpeg", alt: "Resultado Sorriso", category: "Estética" }
];

export const TRUST_BENEFITS: Benefit[] = [
  {
    title: "Avaliação Honesta",
    description: "Sem tratamentos desnecessários. Foco total na sua real necessidade clínica.",
    icon: <ClipboardCheck className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Atendimento Comigo",
    description: "Você não será apenas 'mais um'. Eu acompanho cada etapa do seu sorriso.",
    icon: <UserCheck className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Clareza Total",
    description: "Explico cada detalhe do planejamento para que você se sinta seguro(a).",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Ortodontia com Propósito",
    description: "Não é só alinhar dentes, é transformar a sua autoestima e saúde.",
    icon: <Sparkles className="w-6 h-6 text-emerald-600" />
  }
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "WhatsApp",
    description: "Clique no botão e fale direto com minha equipe."
  },
  {
    number: "02",
    title: "Agendamento",
    description: "Escolhemos o melhor horário para sua visita."
  },
  {
    number: "03",
    title: "Avaliação",
    description: "Realizamos sua primeira consulta gratuita e sem compromisso."
  }
];
