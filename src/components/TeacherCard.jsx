import React from "react";

export default function TeacherCard({ teacher }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition">
      <img
        src={teacher.avatar || '/avatar-placeholder.png'}
        alt={teacher.name}
        className="w-12 h-12 rounded-full object-cover border"
      />
      <div className="flex-1">
        <div className="font-semibold text-lg">{teacher.name}</div>
        <div className="text-gray-500 text-sm">{teacher.email}</div>
        <div className="text-blue-500 text-xs mt-1">{teacher.subject}</div>
      </div>
      <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">View</button>
    </div>
  );
} 