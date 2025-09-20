import React from 'react';

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tax & Compliance</h1>
      <div className="panel p-4">
        <div className="mb-3">General Settings</div>
        <div className="grid grid-cols-2 gap-4">
          <select className="px-3 py-2 bg-panel-lite rounded"> <option>Freelancer / Sole Proprietor</option> </select>
          <select className="px-3 py-2 bg-panel-lite rounded"> <option>Technology</option> </select>
        </div>
      </div>

      <div className="panel p-4 mt-4">
        <div className="flex justify-between items-center">
          <div>Compliance Tools</div>
          <button className="px-3 py-2 bg-accent rounded text-black">View Reports</button>
        </div>
      </div>
    </div>
  );
}
