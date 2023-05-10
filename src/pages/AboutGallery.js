import { motion, AnimatePresence } from "framer-motion"
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

const AboutGallery = () => {
    const [images, setImages] = useState([]);
    const imageDetails = {
        width: 352,
        height: 625,
      };
    const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05 , 0.9]}

    useEffect(() => {
        
        const loadImages = () => {
            const req = require.context('../img/panes', true, /\.(jpg|png)$/);
            const imagePaths = req.keys().map(req);
            const imageObjects = imagePaths.map((src, index) => ({
            src,
            alt: `Image ${index + 1}`,
            }));

            setImages(imageObjects);
        };

        loadImages();
    }, []);

    return <>
    <AnimatePresence>
        <motion.div
            className='bg-lightRose flex flex-col justify-evenly relative font-display min-h-screen'
        >
            <div className="flex justify-center">
                <h1>hello world gallery</h1>
                {/* <Gallery>
                </Gallery> */}
            </div>

            <div className="container mx-auto">
                {/* <motion.div 
                    layoutId="shared-image"
                    className="container mx-auto max-h-[625px] flex justify-center overflow-hidden"
                >
                    <a className="object-cover">
                        <motion.img 
                            src={nature}
                            transition={transition}
                            animate={{
                                x: "-100%",
                                // transition: { delay: 0.2, ...transition },
                              }}
                        >
                        </motion.img>
                    </a>
                    
                </motion.div> */}
            
                {/* <div className="grid grid-cols-3 md:grid-cols-4">
                    {images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
                        />
                    </div>
                    ))}
                </div> */}
            </div>

            <div>
                <a>
                    <NavLink to="/about">Back</NavLink>
                </a>
            </div>
            {/* <div className="container mx-auto px-4 py-12">
                <MapComponent>
                </MapComponent>

            </div> */}
            
        </motion.div>
    </AnimatePresence>
    </>
  };
  
  export default AboutGallery;