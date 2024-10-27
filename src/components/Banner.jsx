import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import image from '../assets/image/jrnav.jpeg';
import image1 from '../assets/image/jrnav1.jpeg';
import image2 from '../assets/image/jrnav2.jpeg';
import image3 from '../assets/image/jrnav3.jpeg';
import image4 from '../assets/image/jrnav4.jpeg';
import image5 from '../assets/image/pj1.jpeg';
import image6 from '../assets/image/pj2.jpeg';
import image7 from '../assets/image/pj3.jpeg';
import image8 from '../assets/image/pj4.jpeg';
import image9 from '../assets/image/pj5.jpeg';
import image10 from '../assets/image/pj6.jpeg';
import image11 from '../assets/image/pj7.jpeg';
import image12 from '../assets/image/pj8.jpeg';
import image13 from '../assets/image/pj9.jpeg';
import image14 from '../assets/image/pj10.jpeg';
import image15 from '../assets/image/pj11.jpeg';

import image17 from '../assets/image/pj13.jpeg';
import image18 from '../assets/image/pj14.jpeg';


import '../assets/css/Banner.css'

const Banner = () => {
  const [scrollDirection, setScrollDirection] = useState(true);
  const [columns, setColumns] = useState(4); // Default for mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setColumns(7); // 7 columns for desktop
      } else {
        setColumns(4); // 4 columns for mobile
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollDirection((prevDirection) => !prevDirection);
    }, 1000); // Change direction every 1 second

    return () => clearInterval(interval);
  }, []);

  const scrollVariants = {
    up: { y: [-200, 0], transition: { duration: 200, ease: 'linear', repeat: Infinity } },
    down: { y: [0, -200], transition: { duration: 200, ease: 'linear', repeat: Infinity } },
  };

  return (
    
    <div className=" relative w-full h-[200px] sm:h-[300px] md:h-[100vh] bg-[#865439] flex items-center justify-center overflow-hidden">
      {/* Image carousel behind the text */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-7 gap-0 z-0">
        {/* Column 1 */}
        <div className="overflow-hidden">
          <motion.div
            className="flex flex-col gap-0"
            variants={scrollVariants}
            animate="down"
          >
            <img src={image10} alt="Scrolling image 1" className="w-full h-full object-cover" />
            <img src={image11} alt="Scrolling image 2" className="w-full h-full object-cover" />
            <img src={image13} alt="Scrolling image 3" className="w-full h-full object-cover" />
            <img src={image12} alt="Scrolling image 4" className="w-full h-full object-cover" />
            <img src={image2} alt="Scrolling image 5" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Column 2 */}
        <div className="overflow-hidden">
          <motion.div
            className="flex flex-col gap-0"
            variants={scrollVariants}
            animate="up"
          >
            <img src={image7} alt="Scrolling image 1" className="w-full h-full object-cover" />
            <img src={image15} alt="Scrolling image 2" className="w-full h-full object-cover" />
            <img src={image14} alt="Scrolling image 3" className="w-full h-full object-cover" />
            <img src={image14} alt="Scrolling image 4" className="w-full h-full object-cover" />
            <img src={image3} alt="Scrolling image 5" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Column 3 */}
        <div className="overflow-hidden">
          <motion.div
            className="flex flex-col gap-0"
            variants={scrollVariants}
            animate="down"
          >
            <img src={image12} alt="Scrolling image 1" className="w-full h-full object-cover" />
            <img src={image8} alt="Scrolling image 2" className="w-full h-full object-cover" />
            <img src={image15} alt="Scrolling image 3" className="w-full h-full object-cover" />
            <img src={image18} alt="Scrolling image 4" className="w-full h-full object-cover" />
            <img src={image1} alt="Scrolling image 5" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Column 4 */}
        <div className="overflow-hidden">
          <motion.div
            className="flex flex-col gap-0"
            variants={scrollVariants}
            animate="up"
          >
            <img src={image13} alt="Scrolling image 1" className="w-full h-full object-cover" />
            <img src={image6} alt="Scrolling image 2" className="w-full h-full object-cover" />
            <img src={image5} alt="Scrolling image 3" className="w-full h-full object-cover" />
            <img src={image17} alt="Scrolling image 4" className="w-full h-full object-cover" />
            <img src={image7} alt="Scrolling image 5" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Additional columns for desktop if needed */}
        {columns > 4 && (
          <>
            {/* Column 5 */}
            <div className="overflow-hidden">
              <motion.div
                className="flex flex-col gap-0"
                variants={scrollVariants}
                animate="down"
              >
                <img src={image14} alt="Scrolling image 1" className="w-full h-full object-cover" />
                <img src={image9} alt="Scrolling image 2" className="w-full h-full object-cover" />
                <img src={image10} alt="Scrolling image 3" className="w-full h-full object-cover" />
                <img src={image5} alt="Scrolling image 4" className="w-full h-full object-cover" />
                <img src={image3} alt="Scrolling image 5" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Column 6 */}
            <div className="overflow-hidden">
              <motion.div
                className="flex flex-col gap-0"
                variants={scrollVariants}
                animate="up"
              >
                <img src={image17} alt="Scrolling image 1" className="w-full h-full object-cover" />
                <img src={image11} alt="Scrolling image 2" className="w-full h-full object-cover" />
                <img src={image12} alt="Scrolling image 3" className="w-full h-full object-cover" />
                <img src={image13} alt="Scrolling image 4" className="w-full h-full object-cover" />
                <img src={image4} alt="Scrolling image 5" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Column 7 */}
            <div className="overflow-hidden">
              <motion.div
                className="flex flex-col gap-0"
                variants={scrollVariants}
                animate="down"
              >
                <img src={image9} alt="Scrolling image 1" className="w-full h-full object-cover" />
                <img src={image14} alt="Scrolling image 2" className="w-full h-full object-cover" />
                <img src={image15} alt="Scrolling image 3" className="w-full h-full object-cover" />
                <img src={image18} alt="Scrolling image 4" className="w-full h-full object-cover" />
                <img src={image} alt="Scrolling image 5" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Overlay with quote */}
      <div className=" relative z-10 w-full h-full flex items-center justify-center bg-[#000000] bg-opacity-80">
  <h1 className="text-transparent  text-center font-bold px-4 py-2 rounded-md text-sm sm:text-3xl md:text-5xl crazy-text">
    "Love is not finding someone to live with, it's finding someone you can't live without."
  </h1>
</div>

    </div>
  );
};

export default Banner;
