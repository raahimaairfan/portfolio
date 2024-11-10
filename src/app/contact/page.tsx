// src/app/contact.tsx
export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Contact Me</h1>
            <p className="text-lg text-gray-600">
              I’d love to hear from you! Whether you have a question or simply want to connect, feel free to reach out below.
            </p>
          </div>
  
          {/* Main Content Section */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {/* Contact Form */}
            <form className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>
  
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                />
              </div>
  
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Write your message here"
                  rows={6}
                ></textarea>
              </div>
  
              <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
  
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions or just want to say hello, feel free to reach out! I’m always open to new opportunities and collaborations.
              </p>
  
              <div className="text-gray-800 mb-4">
                <p><strong>Email:</strong> raahima1918@gmail.com</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Location:</strong> City, Country</p>
              </div>
  
              <div className="mt-4 text-center">
                <p className="text-gray-600">I look forward to hearing from you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  