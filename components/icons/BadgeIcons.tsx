
import React from 'react';

const BadgeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-8 w-8 text-yellow-500">
        {children}
    </div>
);

export const SyntaxSainikIcon: React.FC = () => (
  <BadgeWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-full w-full"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
  </BadgeWrapper>
);

export const LoopLakshmanIcon: React.FC = () => (
  <BadgeWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat h-full w-full"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
  </BadgeWrapper>
);

export const FunctionPanditIcon: React.FC = () => (
  <BadgeWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text h-full w-full"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h10v2a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4"/><path d="M19 17V5"/><path d="M12 17V5"/><path d="M7 17V5"/></svg>
  </BadgeWrapper>
);

export const ClassAcharyaIcon: React.FC = () => (
  <BadgeWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-full w-full"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
  </BadgeWrapper>
);

export const DebugDevtaIcon: React.FC = () => (
  <BadgeWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bug-off h-full w-full"><path d="M12 8c0-2.21 1.79-4 4-4"/><path d="m18.83 14.17.82.82"/><path d="m14.17 18.83.82.82"/><path d="M20 18h2"/><path d="M20 12h2"/><path d="m19.65 6.35-.82.82"/><path d="M18 4V2"/><path d="m14.82 4.35-.82.82"/><path d="M9 12a5 5 0 0 0 5 5"/><path d="M2 2l20 20"/><path d="M12 20a8 8 0 0 0 5.4-2.1L12 12.4A8 8 0 0 0 4 20Z"/><path d="M10.7 4.3A8 8 0 0 0 4 8v2a8 8 0 0 0 4 6.8V12c0-2.2 1.8-4 4-4Z"/></svg>
  </BadgeWrapper>
);
