import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import Button from '../ui/Button';
import CarouselSlide from './CarouselSlide';
import PlatformToggle from './PlatformToggle';

const FeatureCarousel: React.FC = () => {
    const [platform, setPlatform] = useState<'mac' | 'windows'>('mac');
    const { openModal } = useModal();

    const platformImages = {
        mac: {
            image: '/imgi_3_Demo1.png',
            alt: 'CadAI Mac Demo',
        },
        windows: {
            image: '/imgi_5_Demo2.png',
            alt: 'CadAI Windows Demo',
        }
    };

    return (
        <section className="relative pb-12 pt-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto flex flex-col items-center">

                {/* Top CTA Button */}
                <div className="mb-8 relative z-30">
                    <Button variant="primary" size="medium" onClick={openModal}>
                        Try it Now
                    </Button>
                </div>

                {/* Platform Image Display */}
                <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] mb-8">
                    <CarouselSlide
                        image={platformImages.mac.image}
                        alt={platformImages.mac.alt}
                        isActive={platform === 'mac'}
                    />
                    <CarouselSlide
                        image={platformImages.windows.image}
                        alt={platformImages.windows.alt}
                        isActive={platform === 'windows'}
                    />
                </div>

                {/* Platform Toggle */}
                <div className="mt-4">
                    <PlatformToggle
                        platform={platform}
                        onToggle={setPlatform}
                    />
                </div>
            </div>
        </section>
    );
};

export default FeatureCarousel;
