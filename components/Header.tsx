import React from 'react';
import type { Progress, Badge } from '../types';
import { SyntaxSainikIcon, LoopLakshmanIcon, FunctionPanditIcon, ClassAcharyaIcon, DebugDevtaIcon } from './icons/BadgeIcons';

interface HeaderProps {
  progress: Progress;
}

const badgeMap: { [key in Badge]: React.ReactNode } = {
  'Syntax Sainik': <SyntaxSainikIcon />,
  'Loop Lakshman': <LoopLakshmanIcon />,
  'Function Pandit': <FunctionPanditIcon />,
  'Class Acharya': <ClassAcharyaIcon />,
  'Debug Devta': <DebugDevtaIcon />,
};

export const Header: React.FC<HeaderProps> = ({ progress }) => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
      <div className="flex items-center space-x-3">
        <img src="https://img.icons8.com/color/48/000000/python--v1.png" alt="Python logo" />
        <h1 className="text-xl md:text-2xl font-bold text-green-800">Python Guruji</h1>
      </div>
      <div className="flex items-center space-x-4 md:space-x-6 text-sm">
        <div className="text-center">
          <div className="font-bold text-green-600">{progress.xp}</div>
          <div className="text-gray-500">XP</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-green-700">{progress.streak}</div>
          <div className="text-gray-500">Streak</div>
        </div>
        <div className="hidden sm:flex items-center space-x-1">
          {progress.badges.length > 0 ? progress.badges.map(badge => (
            <div key={badge} className="relative group">
              {badgeMap[badge as Badge]}
              <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {badge}
              </span>
            </div>
          )) : <div className="text-gray-400 text-xs">No Badges</div>}
        </div>
      </div>
    </header>
  );
};