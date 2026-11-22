export interface ProfileData {
  name: string;
  handle: string;
  avatarUrl: string;
  initialsFallback: string;
  verified: boolean;
  role: string;
  bio: string;
  location: string;
  statusText: string;
  isAvailableForProjects: boolean;
  shareUrl: string;
}

export interface SocialLink {
  id: string;
  platform: 'telegram' | 'instagram' | 'linkedin' | 'github' | 'youtube' | 'twitter' | 'email';
  label: string;
  url: string;
  iconName: string;
  accentColor?: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  subtext?: string;
}

export interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon: string;
  category: string;
  featured: boolean;
  active: boolean;
  badge?: string;
  layout?: 'hero' | 'half' | 'normal';
  tags?: string[];
  gradientTheme?: 'crimson' | 'dark' | 'emerald' | 'amber' | 'blue';
  isCopyable?: boolean;
  copyValue?: string;
  hasContactChoice?: boolean;
  telegramUsername?: string;
  telegramUrl?: string;
  phoneNumber?: string;
  phoneTelUrl?: string;
}

export interface HubData {
  profile: ProfileData;
  stats: StatItem[];
  socials: SocialLink[];
  links: LinkItem[];
}
