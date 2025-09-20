import React from 'react';

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full px-3 py-2 rounded-md bg-panel-lite border border-white/5" />;
}
