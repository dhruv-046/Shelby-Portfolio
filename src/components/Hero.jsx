import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[175px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div class="relative w-full h-2">
          <div class="absolute mt-1 ml-0 w-5 h-5 bg-gray-100 rounded-full transform -translate-y-1/2"></div>
          <div class="h-1.5 bg-gradient-to-r from-gray-100 to-gray-900"></div>
        </div>
        <div className="absolute">
          <div className="animate-pulse">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Dhruv</span>
          </h1>
          </div>
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a intern student!!  
            
          </p>
          
          
          </div>
          <div class="flex mt-0  w-full justify-start ">
          <img src="https://wallpapers.com/images/hd/tommy-shelby-4k-intimidate-28n7wfk1jeyscjx7.jpg" alt="3D Image" class="rounded-full shadow-lg shadow-indigo-500/40 transform hover:rotate-6 transition-transform duration-500 w-64 h-64 object-cover justify-center items-center" />
          </div>
      </div>
      
      

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
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

export default SectionWrapper(Hero, "hero");
