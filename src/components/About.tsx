import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="sup8.png"
              alt="Supriya Maji (Rio)"
              className=" h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            👋 Hi, I’m Supriya Maji, a Software Engineer specializing in the MERN stack. I'm a passionate tech enthusiast, always eager to explore and adapt to new and emerging technologies. 🚀            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              🔹 Currently, I'm working at CommerceIQ as an Application Engineer 1.<br />
              🔹 Previously, I was a Member of Technical Staff at Vymo, where I contributed to building scalable backend solutions.<br />
              🔹 Graduated with a Bachelor's in Engineering from NSHM Knowledge Campus, Durgapur and a Diploma from A.P.C. Ray Polytechnic, Jadavpur.<br />
              <br />
              💡 I enjoy solving complex problems, building robust applications, and participating in coding competitions and tech seminars.<br />
              📌 Always eager to learn new technologies and take on challenging projects!
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">2.9+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
