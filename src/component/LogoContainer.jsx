import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Logo from './Logo';

const LogosContainer = ({ logos, direction }) => {
    const containerRef = useRef(null);
    const { ref, inView } = useInView({ threshold: 0.5 }); // Observe 50% visibility

    useEffect(() => {
        if (inView) {
            containerRef.current.classList.add('animate');
        } else {
            containerRef.current.classList.remove('animate');
        }
    }, [inView]);

    return (
        <div ref={ref} className="flex overflow-x-hidden scroll-smooth pb-4">
            <div
                ref={containerRef}
                className={`flex animate-left flex-row ${direction === 'right' ? 'flex-row-reverse' : ''
                    }`}
            >
                {logos.map((logo) => (
                    <Logo key={logo.id} src={logo.src} alt={logo.alt} />
                ))}
            </div>
        </div>
    );
};

export default LogosContainer;
