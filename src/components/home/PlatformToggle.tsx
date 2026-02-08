import React from 'react';

interface PlatformToggleProps {
    platform: 'mac' | 'windows';
    onToggle: (platform: 'mac' | 'windows') => void;
}

const PlatformToggle: React.FC<PlatformToggleProps> = ({ platform, onToggle }) => {
    return (
        <div className="flex bg-cad-gray rounded-lg p-1 border border-gray-800">
            <button
                onClick={() => onToggle('mac')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${platform === 'mac'
                        ? 'bg-cad-orange text-white shadow-glow-orange'
                        : 'text-gray-400 hover:text-white'
                    }`}
            >
                Mac
            </button>
            <button
                onClick={() => onToggle('windows')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${platform === 'windows'
                        ? 'bg-cad-orange text-white shadow-glow-orange'
                        : 'text-gray-400 hover:text-white'
                    }`}
            >
                Windows
            </button>
        </div>
    );
};

export default PlatformToggle;
