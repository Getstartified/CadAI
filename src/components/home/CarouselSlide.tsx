import React from 'react';

interface CarouselSlideProps {
    image: string;
    alt: string;
    isActive: boolean;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ image, alt, isActive }) => {
    return (
        <div
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full bg-cad-gray rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-6">
                    <img
                        src={image}
                        alt={alt}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default CarouselSlide;
