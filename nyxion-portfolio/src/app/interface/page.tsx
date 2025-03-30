'use client';

const Interface = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
          <h1 className="text-5xl font-semibold leading-tight mb-6">Welcome to the Interface</h1>
          <p className="text-lg">This is the space where non-coders interact with the system in an intuitive, simple way.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Experience the Future</h2>
          <p className="text-xl mb-8">
            Our platform is designed for everyone—whether you’re a beginner or an expert, you can navigate and enjoy our features with ease.
          </p>
          <div className="flex justify-center space-x-8 mb-16">
            <div className="w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Simple to Use</h3>
              <p className="text-lg">
                Everything you need is just a few clicks away. No technical expertise required.
              </p>
            </div>
            <div className="w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Seamless Experience</h3>
              <p className="text-lg">
                Our platform adapts to your needs and helps you achieve your goals smoothly.
              </p>
            </div>
            <div className="w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Stay Informed</h3>
              <p className="text-lg">
                Get the latest updates, tips, and tutorials delivered directly to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/your-image-2.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
          <h2 className="text-4xl font-semibold leading-tight mb-6">A World of Possibilities</h2>
          <p className="text-xl">
            Discover all the ways our platform can transform your workflow. No limits, just possibilities.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Interface;
