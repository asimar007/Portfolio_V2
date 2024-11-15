import { RESEARCH_PAPER } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Paper = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl md:text-4xl"
      >
        Research Paper
      </motion.h2>
      <div className="flex flex-col items-center justify-center">
        <motion.h3
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-2xl font-bold text-white mb-4 text-center"
        >
          {RESEARCH_PAPER.title}
        </motion.h3>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          className="text-stone-300 text-base md:text-lg text-justify max-w-xl md:max-w-2xl mb-6"
        >
          {RESEARCH_PAPER.description}
        </motion.p>
        <motion.a
          href={RESEARCH_PAPER.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center text-blue-500 text-base md:text-lg hover:underline"
        >
          View
          <FaExternalLinkAlt className="ml-2" />
        </motion.a>
      </div>
    </div>
  );
};

export default Paper;
