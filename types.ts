
export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ClassSession {
  time: string;
  className: string;
  trainer: string;
  category: 'CrossFit' | 'Strength' | 'Yoga' | 'Cardio';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}
