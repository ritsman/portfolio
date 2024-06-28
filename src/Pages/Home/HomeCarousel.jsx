import React, { useState, useEffect } from "react";

const HomeCarousel = () => {
  const videos = [
    "https://cdn.pixabay.com/video/2020/11/07/54926-483011907_large.mp4",
    "https://cdn.pixabay.com/video/2020/04/09/35575-407595493_large.mp4",
    "https://cdn.pixabay.com/video/2020/03/30/34590-402333480_large.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[450px] overflow-hidden relative">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <video className="w-full h-full object-cover" loop autoPlay muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default HomeCarousel;
