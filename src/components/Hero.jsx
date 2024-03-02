import { motion } from "framer-motion";
import { styles } from "../styles";
import { desktop } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            By, <span className='text-[#915EFF]'>Sabhyaa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Check out my projects <br className='sm:block hidden' />
            along with my source code down below!!
          </p>
        </div>
      </div>

      <div
        className="absolute inset-0 flex justify-center items-center"
        style={{ zIndex: -1 }}
      >
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          animate="visible"
        >
          <div>
            <img
              src={desktop}
              srcSet={`${desktop} 9v00w, ${desktop} 1600w`} // Provide different image sources based on screen width
              sizes="(max-width: 500px) 1900vw, (max-width: 960px) 70vw, 150vw" // Define the sizes of the image for different screen sizes
              style={{ maxWidth: "100%", height: "auto" }}
              alt="Desktop"
            />
          </div>
        </motion.div>
      </div>

      <div className='absolute xs:bottom bottom-5 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[52px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero);
