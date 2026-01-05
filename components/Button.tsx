
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { EXPERT_INFO } from '../constants';

interface ButtonProps {
  text: string;
  className?: string;
  showIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", showIcon = true }) => {
  return (
    <a
      href={EXPERT_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-btn-gradient text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-transform active:scale-95 premium-shadow text-center text-sm md:text-base ${className}`}
    >
      {showIcon && <MessageCircle className="w-5 h-5" />}
      {text}
    </a>
  );
};

export default Button;
