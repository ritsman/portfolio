import React, { useState } from "react";

const items = [
  {
    id: 1,
    image:
      "https://kinclimg1.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIAR0097R08_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66185.png",
    hoverImage:
      "https://kinclimg9.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIAR0097R08_YAA18DIG6XXXXXXXX_ABCD00-BP-PICS-00000-1024-66185.png",
    label: "Rings",
  },
  {
    id: 2,
    image:
      "https://kinclimg8.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BISK0368P05_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-21017.png",
    hoverImage:
      "https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BISK0368P05_YAA18DIG6XXXXXXXX_ABCD00-PICS-00002-1024-21017.png",
    label: "Necklaces",
  },
  {
    id: 3,
    image:
      "https://kinclimg1.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIAV0829V10_YAA18PRWHXXXXXXXX_ABCD00-PICS-00000-1024-61715.png",
    hoverImage:
      "https://kinclimg6.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIAV0829V10_YAA18PRWHXXXXXXXX_ABCD00-PICS-00001-1024-61715.png",
    label: "Bracelets",
  },
  {
    id: 4,
    image:
      "https://kinclimg5.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIPO0741S20_RAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-53748.png",
    hoverImage:
      "https://kinclimg0.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIPO0741S20_RAA18DIG6XXXXXXXX_ABCD00-BP-PICS-00000-1024-53748.png",
    label: "Earrings",
  },
];

const ImageSlider = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative text-center"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={item.image}
              alt={item.label}
              className={`mx-auto mb-4 transition-opacity duration-500 ease-in-out cursor-pointer ${
                hoveredItem === item.id ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={item.hoverImage}
              alt={item.label}
              className={`absolute top-0 left-0  mx-auto mb-4 transition-opacity duration-500 ease-in-out cursor-pointer ${
                hoveredItem === item.id ? "opacity-100" : "opacity-0"
              }`}
            />
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
