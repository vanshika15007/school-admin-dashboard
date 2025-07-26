import React, { useState } from "react";

export default function Teachers() {
  const [teachers] = useState([
    {
      id: 1,
      name: "Ravi Kumar",
      subject: "Mathematics",
      classAssigned: "10A",
      experience: "5 yrs",
    },
    {
      id: 2,
      name: "Sneha Iyer",
      subject: "English",
      classAssigned: "9B",
      experience: "3 yrs",
    },
    {
      id: 3,
      name: "Amit Sinha",
      subject: "Science",
      classAssigned: "12C",
      experience: "8 yrs",
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teachers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Subject</th>
              <th className="py-2 px-4 border-b">Class Assigned</th>
              <th className="py-2 px-4 border-b">Experience</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{teacher.id}</td>
                <td className="py-2 px-4 border-b">{teacher.name}</td>
                <td className="py-2 px-4 border-b">{teacher.subject}</td>
                <td className="py-2 px-4 border-b">{teacher.classAssigned}</td>
                <td className="py-2 px-4 border-b">{teacher.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
