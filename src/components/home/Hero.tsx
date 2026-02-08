import React from 'react';
import GradientIcon from '../ui/GradientIcon';

const Hero: React.FC = () => {
    return (
        <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-0">
            <div className="max-w-3xl mx-auto text-center">
                {/* Gradient Icon */}
                <div className="flex justify-center mb-6 animate-fade-in">
                    <GradientIcon size="medium" />
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
                    The next generation of{' '}
                    <span className="text-cad-orange">CAD software</span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-4 animate-fade-in-up animation-delay-200">
                    Built from the ground up to be fast, stable, and actually enjoyable to use
                    with smarter tools to handle the tedious work.
                </p>
            </div>
        </section>
    );
};

export default Hero;
