import React from "react";

export default function StudentCard({ student }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition">
      <img
        src={student.avatar || '/avatar-placeholder.png'}
        alt={student.name}
        className="w-12 h-12 rounded-full object-cover border"
      />
      <div className="flex-1">
        <div className="font-semibold text-lg">{student.name}</div>
        <div className="text-gray-500 text-sm">{student.email}</div>
        <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{student.status}</span>
      </div>
      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">View</button>
    </div>
  );
} 