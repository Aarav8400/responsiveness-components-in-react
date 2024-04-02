import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ src, alt }) => {
    return (
        <motion.img
            whileInView={{ x: '100%', transition: { duration: 15 } }} // Animate from left
            whileHover={{ scale: 1.1 }} // Optional hover effect
            className="w-12 h-12 mr-2 object-cover rounded-lg"
            src={src}
            alt={alt}
        />
    );
};

export default Logo;
