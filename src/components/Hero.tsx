import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Supriya Maji</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Application Engineer at CommerceIQ
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/supriyamaji" target="_blank" rel="noopener noreferrer" 
              className="p-2 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/supriyamaji/" target="_blank" rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:majisupriya198@gmail.com"
              className="p-2 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
            <div className="flex gap-6 mt-10">
            <a 
            href="resume_supriyo.pdf" 
            download 
            className=" bg-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors"
            >
            Download CV
            </a>
            </div>
        </motion.div>
        {/* <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
         
        </motion.div> */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <img 
            src="supriyaMaji.png" 
            alt="Supriya Maji"
            className="w-[400px] h-[400px] rounded-full object-cover border-4 border-blue-400 shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
  );
}