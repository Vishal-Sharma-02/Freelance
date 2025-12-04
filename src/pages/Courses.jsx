import React from "react";

const Courses = () => {
  const courses = [
    {
      title: " Video Editing",
      description:
        "Learn HTML, CSS, JavaScript, and modern frameworks to build powerful websites.",
      icon: "💻",
    },
    {
      title: "Data Science",
      description:
        "Master Python, data analysis, visualization, and machine learning techniques.",
      icon: "📊",
    },
    {
      title: "Digital Marketing",
      description:
        "Grow brands using SEO, social media, ads, and online marketing strategies.",
      icon: "📣",
    },
    {
      title: "Graphic Design",
      description:
        "Design stunning visuals using tools like Photoshop, Illustrator, and Figma.",
      icon: "🎨",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 px-6 py-20 text-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Our Courses</h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Explore our expertly crafted courses designed to help you learn, grow,
          and excel.
        </p>
      </div>

      {/* COURSES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <div className="text-5xl mb-4">{course.icon}</div>
            <h2 className="text-2xl font-semibold mb-3">{course.title}</h2>
            <p className="text-gray-600 text-sm">{course.description}</p>
            <button className="mt-6 px-6 py-2 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-800 transition">
              Explore
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Courses;
