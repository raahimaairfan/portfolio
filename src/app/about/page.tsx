export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
                    About Me
                </h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Hi, I am Raahima Irfan, a passionate software developer specializing in full-stack development, AI/ML, and data science. 
                    I create innovative solutions that help businesses grow, streamline processes, and stay ahead in the digital age.
                </p>

                {/* Mission Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        My Mission
                    </h2>
                    <p className="text-gray-600 mb-6">
                        My mission is to build high-quality, scalable software solutions that make a difference in peoples lives. 
                        I aim to constantly improve my skills, contribute to impactful projects, and stay at the forefront of technology trends.
                    </p>
                    <p className="text-gray-600">
                        Whether its through coding, developing AI models, or solving complex problems, my goal is always to deliver value 
                        and drive positive change in the world of technology.
                    </p>
                </div>

                {/* Skills & Expertise Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Skills & Expertise
                        </h2>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                                </svg>
                                Web Development (NextJS, Node.js)
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                                </svg>
                                Data Science & Machine Learning (Python, TensorFlow, Scikit-learn)
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                                </svg>
                                Frontend Development (HTML, CSS, JavaScript, Tailwind CSS)
                            </li>
                            
                        </ul>
                    </div>

                    {/* Technologies I Use */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Technologies I Use
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-blue-200 text-blue-600 px-4 py-2 rounded-lg">JavaScript</span>
                            <span className="bg-blue-200 text-blue-600 px-4 py-2 rounded-lg">TypeScript</span>
                            <span className="bg-blue-200 text-blue-600 px-4 py-2 rounded-lg">Node.js</span>
                            <span className="bg-blue-200 text-blue-600 px-4 py-2 rounded-lg">Python</span>
                            <span className="bg-blue-200 text-blue-600 px-4 py-2 rounded-lg">TensorFlow</span>
                            <span className="bg-blue-200 text-blue-600 px-4 py-2 rounded-lg">Tailwind CSS</span>
                            <span className="bg-blue-200 text-blue-600 px-4 py-2 rounded-lg">HTML</span>
                            <span className="bg-blue-200 text-blue-600 px-4 py-2 rounded-lg">CSS</span>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        My Core Values
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                            </svg>
                            Innovation – Continuously evolving to create modern solutions.
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                            </svg>
                            Integrity – Transparent and ethical in all work and relationships.
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                            </svg>
                            Collaboration – Working together to achieve the best outcomes.
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                            </svg>
                            Excellence – Delivering high-quality results that exceed expectations.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
