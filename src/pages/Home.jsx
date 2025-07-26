import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    title: "Total Students",
    value: "1200",
    color: "bg-blue-100",
    text: "text-blue-800",
  },
  {
    title: "Total Teachers",
    value: "85",
    color: "bg-green-100",
    text: "text-green-800",
  },
  {
    title: "Attendance Rate",
    value: "92%",
    color: "bg-yellow-100",
    text: "text-yellow-800",
  },
  {
    title: "Fees Collected",
    value: "₹14.5L",
    color: "bg-purple-100",
    text: "text-purple-800",
  },
];

const attendanceData = [
  { month: "Jan", attendance: 91 },
  { month: "Feb", attendance: 89 },
  { month: "Mar", attendance: 92 },
  { month: "Apr", attendance: 90 },
  { month: "May", attendance: 94 },
  { month: "Jun", attendance: 93 },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Welcome to the Admin Dashboard
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item) => (
          <div
            key={item.title}
            className={`p-6 rounded-xl shadow-md ${item.color} ${item.text}`}
          >
            <h2 className="text-md font-semibold">{item.title}</h2>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">
          Attendance Trend
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#888" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="attendance"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
