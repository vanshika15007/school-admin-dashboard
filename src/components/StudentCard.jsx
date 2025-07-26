import React from "react";

export default function StudentCard({ student, onViewDetails }) {
  return (
    <div className="bg-[var(--color-surface)] rounded-lg shadow-lg p-4 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 hover:shadow-xl transition-all duration-200 border border-[var(--color-border)] text-center sm:text-left">
      <img
        src={student.avatar || '/avatar-placeholder.png'}
        alt={student.name}
        className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-primary)] mx-auto sm:mx-0 mb-2 sm:mb-0"
      />
      <div className="flex-1">
        <div className="font-semibold text-lg text-[var(--color-text-dark)]">{student.name}</div>
        <div className="text-[var(--color-text-light)] text-sm">{student.email}</div>
        <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{student.status}</span>
      </div>
      <button onClick={() => onViewDetails(student, 'student')} className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-secondary)] transition shadow-md mt-3 sm:mt-0">View</button>
    </div>
  );
} 