import React from 'react';
import { Card } from './Card';

export const PortfolioGrid = ({ projects = [] }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {projects.map((p, i) => (
        <Card key={i} title={p.title}>
          <div className="text-xs text-gray-600">{p.desc}</div>
        </Card>
      ))}
    </div>
  );
};
