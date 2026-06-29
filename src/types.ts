export interface AppFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface AppItem {
  id: string;
  name: string;
  description: string;
  category: string;
  tagColor: {
    bg: string;
    text: string;
    border: string;
    icon: string;
  };
  iconName: string; // Will map to a Lucide icon
  tagline: string;
  paragraphs: string[];
  features: AppFeature[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}
