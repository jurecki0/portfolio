'use client'

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  // Handle answer selection and route redirection
  const handleAnswer = (answer: string) => {
    if (answer === 'Yes') {
      router.push('/console');
    } else if (answer === 'No') {
      router.push('/interface');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div 
        className="grid grid-cols-1 gap-6 p-6 max-w-lg w-full bg-[var(--color-mid-blue)] rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >        
        <h1 className="text-2xl text-white text-center mb-4">
          Welcome, are you a developer?
        </h1>

        <div className="flex flex-row justify-center gap-4">
          <button 
            className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => handleAnswer('Yes')}>
            Yes
          </button>

          <button 
            className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => handleAnswer('No')}>
            No
          </button>
        </div>
      </motion.div>
    </div>
  );
}