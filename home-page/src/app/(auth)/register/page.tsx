'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Stepper, { Step } from '@/components/ui/stepper';

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        skills: '',
        goal: '',
        experience: '',
        wants_to_learn: '',
    });

    const [stepValidity, setStepValidity] = useState([false, false, false, false]);
    const [currentStep, setCurrentStep] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        // Validate each step's fields
        const stepChecks = [
            formData.first_name.trim() !== '' && formData.last_name.trim() !== '',
            formData.email.trim() !== '' && formData.password.trim() !== '',
            formData.skills.trim() !== '' && formData.goal.trim() !== '',
            formData.experience.trim() !== '' && formData.wants_to_learn.trim() !== '',
        ];
        setStepValidity(stepChecks);
    }, [formData]);

    const handleNext = () => {
        if (currentStep < 3 && stepValidity[currentStep]) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/users/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    created_at: new Date().toISOString(),
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.detail || 'Registration failed');
            }

            alert('User registered successfully!');
            router.push('/login'); // or /dashboard
        } catch (err: any) {
            alert(err.message || 'Something went wrong');
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 min-h-screen w-full p-12 text-white"
            >
                <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

                <div className="mx-auto w-full max-w-4xl rounded-2xl shadow-2xl bg-gray-900 p-10 my-8">
                    <Stepper
                        className="overflow-y-auto p-6 text-white"
                        currentStep={currentStep}
                        onStepChange={setCurrentStep}
                        controls={
                            <div className="flex justify-between mt-8">
                            <button
                                type="button"
                                onClick={handleBack}
                                disabled={currentStep === 0}
                                className={`px-8 py-4 rounded-full border border-white ${
                                    currentStep === 0
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-white hover:text-gray-900 transition-colors'
                                }`}
                            >
                                Back
                            </button>
                            {currentStep < 3 && (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    disabled={!stepValidity[currentStep]}
                                    className={`px-8 py-4 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors ${
                                        !stepValidity[currentStep]
                                            ? 'opacity-50 cursor-not-allowed'
                                            : ''
                                    }`}
                                >
                                    Next
                                </button>
                            )}
                            {currentStep === 3 && (
                                <button
                                    type="submit"
                                    disabled={!stepValidity[currentStep]}
                                    className={`px-8 py-4 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors w-full ${
                                        !stepValidity[currentStep]
                                            ? 'opacity-50 cursor-not-allowed'
                                            : ''
                                    }`}
                                >
                                    Register
                                </button>
                            )}
                            </div>
                        }
                    >
                        <Step active={currentStep === 0}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                onChange={handleChange}
                                value={formData.first_name}
                                required
                                className="bg-gray-800 text-white placeholder-gray-400 border border-gray-700 px-6 py-3 rounded-full"
                            />
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                onChange={handleChange}
                                value={formData.last_name}
                                required
                                className="bg-gray-800 text-white placeholder-gray-400 border border-gray-700 px-6 py-3 rounded-full"
                            />
                        </div>
                        </Step>

                        <Step active={currentStep === 1}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={formData.email}
                            required
                            className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 px-6 py-3 rounded-full"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={formData.password}
                            required
                            className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 px-6 py-3 rounded-full mt-6"
                        />
                        </Step>

                        <Step active={currentStep === 2}>
                        <input
                            type="text"
                            name="skills"
                            placeholder="Skills (e.g. Python, ML)"
                            onChange={handleChange}
                            value={formData.skills}
                            required
                            className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 px-6 py-3 rounded-full"
                        />

                        <input
                            type="text"
                            name="goal"
                            placeholder="Your Goal (e.g. Backend Dev)"
                            onChange={handleChange}
                            value={formData.goal}
                            required
                            className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 px-6 py-3 rounded-full mt-6"
                        />
                        </Step>

                        <Step active={currentStep === 3}>
                        <input
                            type="text"
                            name="experience"
                            placeholder="Experience (e.g. 1 year freelancing)"
                            onChange={handleChange}
                            value={formData.experience}
                            required
                            className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 px-6 py-3 rounded-full"
                        />

                        <textarea
                            name="wants_to_learn"
                            placeholder="What do you want to learn?"
                            onChange={handleChange}
                            value={formData.wants_to_learn}
                            required
                            className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 px-6 py-3 rounded-full mt-6"
                        ></textarea>
                        </Step>
                    </Stepper>
                </div>
            </form>
        </div>
    );
}