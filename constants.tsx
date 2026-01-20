
import { Trainer, MembershipPlan, ClassSession, BlogPost } from './types';

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Alex "The Beast" Rivera',
    specialty: 'CrossFit Head Coach',
    bio: '10+ years of professional coaching. Specialized in Olympic weightlifting and functional movements.',
    imageUrl: 'https://picsum.photos/seed/trainer1/600/800'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    specialty: 'Mobility & Yoga Expert',
    bio: 'Dedicated to helping athletes improve range of motion and mental resilience through mindful movement.',
    imageUrl: 'https://picsum.photos/seed/trainer2/600/800'
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    specialty: 'Strength & Conditioning',
    bio: 'Former pro-athlete focusing on explosive power, speed, and injury prevention.',
    imageUrl: 'https://picsum.photos/seed/trainer3/600/800'
  }
];

export const PLANS: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Standard Box',
    price: '$99',
    features: ['3 Classes per week', 'Open Gym access', 'Locker room access', 'Initial fitness assessment']
  },
  {
    id: 'pro',
    name: 'Elite Performance',
    price: '$149',
    features: ['Unlimited Classes', 'Personalized Training App', 'Nutrition workshops', 'Guest passes (2/month)'],
    isPopular: true
  },
  {
    id: 'all-access',
    name: 'The Iron Box',
    price: '$199',
    features: ['All Unlimited benefits', '1 Personal Training session', '24/7 Access', 'Free supplementation starter kit']
  }
];

export const SCHEDULE: Record<string, ClassSession[]> = {
  Monday: [
    { time: '06:00 AM', className: 'Morning Grind', trainer: 'Alex Rivera', category: 'CrossFit' },
    { time: '10:00 AM', className: 'Power Yoga', trainer: 'Sarah Jenkins', category: 'Yoga' },
    { time: '05:30 PM', className: 'Heavy Metals', trainer: 'Marcus Thorne', category: 'Strength' },
    { time: '07:00 PM', className: 'Metcon 45', trainer: 'Alex Rivera', category: 'Cardio' }
  ],
  Tuesday: [
    { time: '07:00 AM', className: 'Endurance', trainer: 'Marcus Thorne', category: 'Cardio' },
    { time: '12:00 PM', className: 'Lunch Express', trainer: 'Alex Rivera', category: 'CrossFit' },
    { time: '06:00 PM', className: 'WOD Focus', trainer: 'Alex Rivera', category: 'CrossFit' }
  ],
  Wednesday: [
    { time: '06:00 AM', className: 'Morning Grind', trainer: 'Alex Rivera', category: 'CrossFit' },
    { time: '05:30 PM', className: 'Flow & Restore', trainer: 'Sarah Jenkins', category: 'Yoga' },
    { time: '07:00 PM', className: 'Iron Foundation', trainer: 'Marcus Thorne', category: 'Strength' }
  ]
};

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Science of Recovery',
    excerpt: 'Why rest days are just as important as your training sessions for muscle growth and performance.',
    date: 'Oct 24, 2023',
    imageUrl: 'https://picsum.photos/seed/blog1/800/500'
  },
  {
    id: 'b2',
    title: 'Mastering the Snatch',
    excerpt: 'Breakdown of the most complex Olympic lift. Tips to improve your technique and hit PRs.',
    date: 'Nov 2, 2023',
    imageUrl: 'https://picsum.photos/seed/blog2/800/500'
  },
  {
    id: 'b3',
    title: 'Functional Nutrition',
    excerpt: 'Fueling your body for high-intensity training. What to eat before and after your WOD.',
    date: 'Nov 12, 2023',
    imageUrl: 'https://picsum.photos/seed/blog3/800/500'
  }
];
