import React from "react";

export default function Students() {
  const students = [
    { id: 1, name: "Aarav Sharma", class: "10A", attendance: "95%" },
    { id: 2, name: "Diya Mehra", class: "9B", attendance: "89%" },
    { id: 3, name: "Kabir Khan", class: "12C", attendance: "92%" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Class</th>
              <th className="py-2 px-4 border-b">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{student.id}</td>
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.class}</td>
                <td className="py-2 px-4 border-b">{student.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
