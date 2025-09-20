import React from 'react';

export default function ProfileSettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
      <div className="panel p-4">
        <div className="text-sm text-slate-400 mb-2">Personal Information</div>
        <input className="w-full px-3 py-2 bg-panel-lite rounded mb-3" placeholder="Full name" />
        <input className="w-full px-3 py-2 bg-panel-lite rounded mb-3" placeholder="Email" />
        <div className="mt-4">
          <button className="px-3 py-2 bg-accent rounded text-black">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
