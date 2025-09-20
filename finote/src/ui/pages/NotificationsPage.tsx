import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotifications } from '../../services/api';
import { Notification } from '../../types/index';

export default function NotificationsPage() {
  const { data } = useQuery<Notification[]>({ queryKey: ['notifications'], queryFn: fetchNotifications });


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="space-y-3">
        {(data || []).map((n: any) => (
          <div key={n.id} className="panel p-4 flex items-start gap-4">
            <div className="w-10 h-10 bg-panel-lite rounded flex items-center justify-center">🔔</div>
            <div>
              <div className="font-medium">{n.title}</div>
              <div className="text-slate-400 text-sm">{n.text}</div>
              <div className="text-xs text-slate-500 mt-1">{n.ts}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
