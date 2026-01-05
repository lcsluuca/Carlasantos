
export interface Photo {
  url: string;
  alt: string;
  category?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}
