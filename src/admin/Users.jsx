import React, { useState } from "react";

const AdminPage = () => {
  const [active, setActive] = useState("users");

  // Dummy users data
  const users = [
    { id: 1, name: "Vishal", email: "vishal@gmail.com", subscribed: true },
    { id: 2, name: "Rahul", email: "rahul@gmail.com", subscribed: false },
  ];

  return (
    <div className="flex h-screen">
      {/* LEFT SIDE */}
      <div className="w-1/4 bg-gray-900 text-white p-6">
        <h2 className="text-xl mb-6">Admin Panel</h2>

        <div
          onClick={() => setActive("users")}
          className="p-3 mb-4 bg-gray-700 cursor-pointer rounded hover:bg-gray-600"
        >
          Users
        </div>

        <div
          onClick={() => setActive("courses")}
          className="p-3 bg-gray-700 cursor-pointer rounded hover:bg-gray-600"
        >
          Courses
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-3/4 p-6 bg-gray-100">
        {/* USERS SECTION */}
        {active === "users" && (
          <div>
            <h2 className="text-2xl mb-4">All Users</h2>

            <table className="w-full bg-white shadow rounded">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Subscription</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.subscribed ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* COURSES SECTION */}
        {active === "courses" && (
          <div>
            <h2 className="text-2xl mb-4">Courses</h2>

            <div className="flex gap-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Add Courses
              </button>

              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Edit Courses
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
