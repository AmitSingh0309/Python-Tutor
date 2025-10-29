
export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export type Badge = 'Syntax Sainik' | 'Loop Lakshman' | 'Function Pandit' | 'Class Acharya' | 'Debug Devta';

export interface Progress {
  xp: number;
  badges: string[];
  streak: number;
}
