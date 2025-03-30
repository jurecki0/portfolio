import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo or Company Name */}
        <div className="text-2xl font-bold mb-6 md:mb-0">
          <Link href="/" className="text-white hover:text-blue-500">
            Nyxion Software
          </Link>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
          <Link href="/" className="text-gray-400 hover:text-white transition duration-200">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition duration-200">
            About Us
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-white transition duration-200">
            Services
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition duration-200">
            Contact
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-white transition duration-200">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white transition duration-200">
            Privacy Policy
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <Link href="https://twitter.com/nyxionsoftware" target="_blank" className="text-gray-400 hover:text-blue-500 transition duration-200">
            Twitter
          </Link>
          <Link href="https://github.com/nyxionsoftware" target="_blank" className="text-gray-400 hover:text-blue-500 transition duration-200">
            GitHub
          </Link>
          <Link href="https://linkedin.com/company/nyxionsoftware" target="_blank" className="text-gray-400 hover:text-blue-500 transition duration-200">
            LinkedIn
          </Link>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <div className="container mx-auto text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} NyxionTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;