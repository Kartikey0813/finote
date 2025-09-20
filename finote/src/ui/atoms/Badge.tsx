import React from 'react';

export default function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <span className={`px-2 py-1 rounded-full text-xs bg-panel-lite ${className}`}>{children}</span>;
}
