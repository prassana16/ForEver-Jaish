import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import image from '../assets/image/jrnav.jpeg';

const Banner = () => {
  const [scrollDirection, setScrollDirection] = useState(true);
  const [columns, setColumns] = useState(4); // Default for mobile

  useEffect(() => {
    const handleResize = () => {
      // Check the window width and set the column count accordingly
      if (window.innerWidth >= 768) { // Assuming 768px is the breakpoint for desktop
        setColumns(7); // 7 columns for desktop
      } else {
        setColumns(4); // 4 columns for mobile
      }
    };

    // Set the initial column count
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollDirection((prevDirection) => !prevDirection);
    }, 1000); // Change direction every 1 second

    return () => clearInterval(interval);
  }, []);

  const scrollVariants = {
    up: { y: [-150, 0], transition: { duration: 150, ease: 'linear', repeat: Infinity } },
    down: { y: [0, -150], transition: { duration: 150, ease: 'linear', repeat: Infinity } },
  };

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[500px] bg-[#865439] flex items-center justify-center overflow-hidden">
      {/* Image carousel behind the text */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-7 gap-0 z-0">
        {[...Array(columns)].map((_, colIndex) => (
          <div key={colIndex} className="overflow-hidden">
            <motion.div
              className="flex flex-col gap-0"
              variants={scrollVariants}
              animate={colIndex % 2 === 0 ? 'down' : 'up'} // Alternate direction for each column
            >
              {[...Array(4)].map((_, rowIndex) => (
                <img
                  key={rowIndex}
                  src={image}
                  alt={`Scrolling image ${colIndex}-${rowIndex}`}
                  className="w-full h-full object-cover" // Adjusted for responsive images
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Overlay with quote */}
      <div className="relative z-10 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#80e4e7] via-[#f5ae88] to-[#865439] text-center font-bold px-4 py-2 rounded-md text-sm sm:text-3xl md:text-5xl">
          "Love is not finding someone to live with, it's finding someone you can't live without."
        </h1>
      </div>
    </div>
  );
};

export default Banner;
