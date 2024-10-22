import React, { useState } from 'react';
import logo from '../assets/image/jrnav.jpeg'
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className='flex bg-[#865439] py-2 px-4 items-center justify-between  '>
        {/* Title */}
        <div className="flex gap-3 items-center">
          <img src={logo} alt="PJ" className="w-12 h-12 rounded-full " />
          <h1 className='text-2xl font-thin font-sans text-[#F3D5C0] hover:text-[#BBF1FA] cursor-pointer'>
            ForEver<span className='font-normal'>Jaish</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:mr-5">
          <ul className="flex items-center gap-6">
            <li className='text-xl font-sans text-[#F3D5C0] hover:text-[#BBF1FA] font-semibold cursor-pointer'>Face</li>
            <li className='text-xl font-sans text-[#F3D5C0] hover:text-[#BBF1FA] font-semibold cursor-pointer'>Heart</li>
            <li className='text-xl font-sans text-[#F3D5C0] hover:text-[#BBF1FA] font-semibold cursor-pointer' onClick={toggleModal}>
              Brain
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F3D5C0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-[#865439] shadow-lg z-50 p-4">
          <button onClick={toggleDrawer} className="text-[#F3D5C0] text-xl mb-4">
            Close
          </button>
          <ul className="space-y-4">
            <li className='text-xl font-sans text-[#F3D5C0] hover:text-[#BBF1FA] font-semibold cursor-pointer'>Face</li>
            <li className='text-xl font-sans text-[#F3D5C0] hover:text-[#BBF1FA] font-semibold cursor-pointer'>Heart</li>
            <li className='text-xl font-sans text-[#F3D5C0] hover:text-[#BBF1FA] font-semibold cursor-pointer' onClick={toggleModal}>
              Brain
            </li>
          </ul>
        </div>
      )}

      {/* Background overlay for mobile drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleDrawer}></div>
      )}

      {/* Modal for Brain */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#865439] text-[#F3D5C0] rounded-full border shadow-lg p-6 w-80">
            <h2 className="text-2xl mb-4 font-semibold text-center">Brain</h2>
            <ul className="space-y-4">
              <li className='text-lg text-center hover:text-[#BBF1FA] cursor-pointer'>Glimpses of Us</li>
              <li className='text-lg text-center hover:text-[#BBF1FA] cursor-pointer'>Timeline</li>
              <li className='text-lg text-center hover:text-[#BBF1FA] cursor-pointer'>Chatbox</li>
              <li className='text-lg text-center hover:text-[#BBF1FA] cursor-pointer'>Our faves</li>
            </ul>
            <button
              onClick={toggleModal}
              className="block mt-6 mx-auto px-6 py-2 bg-[#F3D5C0] text-[#865439] rounded-full hover:bg-[#BBF1FA] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
