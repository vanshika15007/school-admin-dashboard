import React from "react";

export default function ClassCard({ classInfo, onViewDetails }) {
  return (
    <div className="bg-[var(--color-surface)] rounded-lg shadow-lg p-4 flex flex-col items-center sm:items-start hover:shadow-xl transition-all duration-200 border border-[var(--color-border)] text-center sm:text-left">
      <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">{classInfo.name}</h3>
      <p className="text-[var(--color-text-light)] text-sm">{classInfo.description}</p>
      <span className={`mt-2 inline-block px-2 py-1 rounded text-xs font-medium ${classInfo.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {classInfo.status}
      </span>
      <button onClick={() => onViewDetails(classInfo, 'class')} className="mt-4 bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-secondary)] transition shadow-md">View Details</button>
    </div>
  );
} 