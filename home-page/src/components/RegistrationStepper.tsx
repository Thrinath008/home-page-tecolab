'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Correct import
import PersonalInfoStep from './steps/PersonalInfoStep';
import SkillsStep from './steps/SkillsStep';
import PreferencesStep from './steps/PreferencesStep';

const steps = [
    { id: 1, title: 'Personal Information', component: PersonalInfoStep },
    { id: 2, title: 'Skills & Experience', component: SkillsStep },
    { id: 3, title: 'Preferences & Profile', component: PreferencesStep },
];

const RegistrationStepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    const router = useRouter(); // ✅ Hook initialization

    const updateFormData = (stepData: any) => {
        setFormData((prev) => ({ ...prev, ...stepData }));
    };

    const nextStep = () => {
        if (currentStep < steps.length) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const CurrentStepComponent = steps[currentStep - 1].component;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#122336] to-[#1a3a54] px-4 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#122336] via-[#2a4a64] to-[#3d5f7d] bg-clip-text animate-rainbow">
                        Join Our Community
                    </h1>
                    <p className="text-white text-base mt-2">
                        Complete your registration in {steps.length} simple steps
                    </p>

                    {/* Progress Bar with Steps */}
                    <div className="relative mt-8">
                        <div className="flex justify-between items-center mb-4 relative z-10">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className="flex flex-col items-center text-center relative"
                                >
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-transform duration-500 ${step.id <= currentStep
                                            ? 'scale-110 bg-[#122336] border-2 border-green-500 shadow-md'
                                            : 'bg-black/30 border-2 border-white/30'
                                        } text-white`}
                                    >
                                        {step.id}
                                    </div>
                                    <span
                                        className={`text-sm font-medium mt-2 transition-colors duration-300 ${step.id <= currentStep
                                            ? 'text-white'
                                            : 'text-white/70'
                                        }`}
                                    >
                                        {step.title}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Progress Line */}
                        <div className="absolute top-6 left-6 right-6 h-1 bg-white/30 rounded-full z-0">
                            <div
                                className="h-full bg-[#122336] rounded-full transition-all duration-700 ease-out"
                                style={{
                                    width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Step Content */}
                <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] rounded-xl shadow-2xl p-8 mb-8 border border-white/30 animate-fade-in">
                    <CurrentStepComponent
                        formData={formData}
                        updateFormData={updateFormData}
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`relative overflow-hidden px-6 py-3 rounded-full font-semibold group w-[280px] text-center transition-all duration-300 ${currentStep === 1
                            ? 'cursor-not-allowed opacity-50 bg-white/20 border border-white/30 text-white'
                            : 'bg-white/20 border border-white/30 text-white hover:bg-white/30'
                        }`}
                    >
                        ← Previous
                    </button>

                    <div className="flex gap-2">
                        {steps.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index + 1 <= currentStep
                                    ? 'bg-[#122336]'
                                    : 'bg-white/40'
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={
                            currentStep === steps.length
                                ? () => {
                                    console.log('Submit', formData);
                                    router.push('/dashboard'); // ✅ redirect
                                }
                                : nextStep
                        }
                        className="relative overflow-hidden px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold group w-[280px] text-center border border-white/30"
                    >
                        <span>
                            {currentStep === steps.length
                                ? 'Complete Registration'
                                : 'Next'}
                        </span>
                        {currentStep !== steps.length && <span>→</span>}
                    </button>
                </div>
            </div>

            {/* Animations */}
            <style>
                {`
                    @keyframes rainbow {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }
                    .animate-rainbow {
                        background-size: 400% 400%;
                        animation: rainbow 3s ease-in-out infinite;
                    }
                    @keyframes fade-in {
                        from {
                            opacity: 0;
                            transform: translateY(10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.3s ease-out;
                    }
                `}
            </style>
        </div>
    );
};

export default RegistrationStepper;