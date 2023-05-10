import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    
    const getContext = (num) => {
        switch(num) {
            case 1: 
                return require.context('../img/panes/set_1', false, /\.(png|jpe?g|svg)$/);
            case 2: 
                return require.context('../img/panes/set_2', false, /\.(png|jpe?g|svg)$/);
            case 3: 
                return require.context('../img/panes/set_3', false, /\.(png|jpe?g|svg)$/);
        }

    }

    // const loadImages = () => {
    //   let imageGroups = {}
    //   const numGroups = 3;
    //   let req;
    //   for (let i = 1; i <= numGroups; i++) {
    //     req = getContext(i);
    //     const imagePaths = req.keys().map(req);
    //     const imageObjects = imagePaths.map((src, index) => ({
    //         src,
    //         alt: `Image ${index + 1}`,
    //     }));
    //     imageGroups[i] = imageObjects
    //   }
    // //   console.log(imageGroups)
    //   setImages(imageGroups);
    // };

    const loadImages = () => {
        const req = require.context('../img/panes', true, /\.(png|jpe?g|svg)$/);
        const imagePaths = req.keys().map(req);
        const imageObjects = imagePaths.map((src, index) => ({
          src,
          alt: `Image ${index + 1}`,
        }));

        setImages(imageObjects);
      };

    loadImages();
  }, []);

  return (
    <div className="container mx-auto px-4">
        <div className='flex justify-center p-6'>
            <h1 className="text-3xl font-bold mb-6"></h1>
        </div>
      
      <div className="grid grid-cols-3 gap-6 md:grid-cols-5 md:gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold mb-6">Image Gallery</h1>
//       {Object.keys(images).forEach(function(key, index) {
//         console.log(images[key], "index", index);
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {images[1].map((image, index) => (
//                 <div key={index} className="relative overflow-hidden rounded-lg">
//                     <img
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
//                     />
//                 </div>
//             ))}   
//         </div>
//             })}
//     </div>
//   );
};

export default ImageGallery;
