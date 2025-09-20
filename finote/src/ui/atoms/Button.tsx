import React from 'react';

export default function Button({ children, className = '', ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} className={`px-4 py-2 rounded-md bg-accent text-black ${className}`}>
      {children}
    </button>
  );
}
