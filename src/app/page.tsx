
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-600">
            Hi, I am Raahima Irfan, a passionate developer with expertise in JavaScript, TypeScript, AI/ML, and web development. 
            Explore my work and projects to learn more about my journey and skills.
          </p>
        </div>

        {/* Feature Section */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-16">
          {/* Feature 1: Skills */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">My Skills</h2>
            <p className="text-gray-600">
              I specialize in full-stack web development, AI/ML, and data analysis. From building interactive UIs with React to creating AI models in Python, I am always learning and applying new technologies.
            </p>
          </div>

          {/* Feature 2: Projects */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">My Projects</h2>
            <p className="text-gray-600">
              I have worked on several exciting projects including a Password Strength Checker in Java, a Chatbot in Java, and various data-driven web applications. Each project reflects my commitment to clean, efficient, and maintainable code.
            </p>
          </div>

          {/* Feature 3: Experience */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Professional Experience</h2>
            <p className="text-gray-600">
              I have hands-on experience in data science and business intelligence, helping businesses harness the power of data to make informed decisions. My internship experiences have strengthened my ability to solve real-world problems.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <Link href="https://github.com/raahimaairfan" passHref>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Explore My Work on GitHub
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
