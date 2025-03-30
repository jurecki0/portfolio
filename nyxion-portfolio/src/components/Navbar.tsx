import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[var(--color-mid-blue)] text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold"><Link href="/">NyxionTech</Link></h1>
      <ul className="flex gap-4">
        <li><Link href="/projects" className="hover:text-gray-400">Projects</Link></li>
        <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
        <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
