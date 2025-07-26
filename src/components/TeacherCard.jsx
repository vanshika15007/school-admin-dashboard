import React from "react";

export default function TeacherCard({ teacher, onViewDetails }) {
  return (
    <div className="bg-[var(--color-surface)] rounded-lg shadow-lg p-4 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 hover:shadow-xl transition-all duration-200 border border-[var(--color-border)] text-center sm:text-left">
      <img
        src={teacher.avatar || '/avatar-placeholder.png'}
        alt={teacher.name}
        className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-primary)] mx-auto sm:mx-0 mb-2 sm:mb-0"
      />
      <div className="flex-1">
        <div className="font-semibold text-lg text-[var(--color-text-dark)]">{teacher.name}</div>
        <div className="text-[var(--color-text-light)] text-sm">{teacher.email}</div>
        <div className="text-[var(--color-primary)] text-xs mt-1 font-medium">{teacher.subject}</div>
      </div>
      <button onClick={() => onViewDetails(teacher, 'teacher')} className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-secondary)] transition shadow-md mt-3 sm:mt-0">View</button>
    </div>
  );
} 