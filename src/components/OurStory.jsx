import React from 'react';
import '../assets/css/Banner.css'
const storyData = [
  {
    date: "January 1, 2020",
    title: "When We First Met",
    description: "The day our paths crossed, and everything changed.",
    image: "path/to/first_meeting_image.jpg"
  },
  {
    date: "April 14, 2020",
    title: "First Adventure Together",
    description: "Our first road trip where we shared countless laughs and made unforgettable memories.",
    image: "path/to/adventure_image.jpg"
  },
  {
    date: "February 14, 2021",
    title: "Valentine's Day Celebration",
    description: "A beautiful night filled with love, surprises, and promises for the future.",
    image: "path/to/valentines_day_image.jpg"
  },
  {
    date: "October 3, 2021",
    title: "Anniversary",
    description: "Celebrating our journey together and looking forward to many more amazing years.",
    image: "path/to/anniversary_image.jpg"
  }
];

const OurStory = () => {
  return (
    <div className="our-story-section bg-pink-50 py-10 px-4 md:px-16">
      <h2 className="text-4xl font-serif font-bold text-center text-[#743c1f] mb-8">Our Story</h2>
      <div className="timeline max-w-3xl mx-auto">
        {storyData.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} mb-8 flex flex-col md:flex-row`}>
            <div className="date bg-[#e63946] text-white rounded-full px-4 py-2 mb-2 text-center text-sm md:w-1/4">
              {event.date}
            </div>
            <div className="content bg-white rounded-lg p-6 shadow-lg md:w-3/4">
              <h3 className="text-2xl font-semibold text-[#743c1f] mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              {event.image && <img src={event.image} alt={event.title} className="w-full rounded-md shadow-md" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
