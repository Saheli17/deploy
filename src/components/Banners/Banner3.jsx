import React from "react";
import Bannerpng from "../../assets/banner-bg.jpg";
import {motion} from "framer-motion";
import { FadeLeft } from "../../utility/animation";
const bgStyle={
  backgroundImage:`url(${Bannerpng})`,
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
};
const Banner3 = () => {
  return (
    <>
      <section className="container mb-12">
        <div style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
          <div>

          </div>
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1 
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              className="text-3xl lg:text-6xl font-bold uppercase">
              GET FRESH FRUITS TODAY
              </motion.h1>
              <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}>
                 With fast delivery options and eco-friendly packaging, we ensure that your fruits arrive at your doorstep in perfect condition. Join our community of health-conscious consumers and enjoy the vibrant flavors and nutritional benefits of nature’s sweetest offerings!
                
              </motion.p>
              
              <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
               className="flex justify-center md:justify-start">
                <button className="primary-btn ">
                  <span>
                  
                  </span>Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner3;
