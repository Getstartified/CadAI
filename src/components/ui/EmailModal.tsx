import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import Button from './Button';

const EmailModal: React.FC = () => {
    const { isModalOpen, closeModal } = useModal();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    if (!isModalOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            closeModal();
            setSubmitted(false);
            setEmail('');
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={closeModal}
            />

            {/* Modal Content */}
            <div className="relative bg-cad-gray border border-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in-up z-[101]">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {!submitted ? (
                    <>
                        <h2 className="text-2xl font-bold mb-2 text-center text-white">Get Early Access</h2>
                        <p className="text-gray-400 mb-6 text-center">
                            Join the waitlist and be the first to experience the future of CAD.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cad-orange focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                                />
                            </div>
                            <div className="w-full flex justify-center">
                                <Button variant="primary" size="medium" onClick={() => { }} className="w-full">
                                    Join Waitlist
                                </Button>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">You're on the list!</h3>
                        <p className="text-gray-400">We'll be in touch soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmailModal;
