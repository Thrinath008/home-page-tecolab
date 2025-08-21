'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-600">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-xl space-y-4"
            >
                <h2 className="text-2xl font-bold text-center text-black mb-4">Register</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                        className="border px-4 py-2 rounded text-black"
                    />
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                        className="border px-4 py-2 rounded text-black"
                    />
                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded text-black"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded text-black"
                />

                <input
                    type="text"
                    name="skills"
                    placeholder="Skills (e.g. Python, ML)"
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded text-black"
                />

                <input
                    type="text"
                    name="goal"
                    placeholder="Your Goal (e.g. Backend Dev)"
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded text-black"
                />

                <input
                    type="text"
                    name="experience"
                    placeholder="Experience (e.g. 1 year freelancing)"
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded text-black"
                />

                <textarea
                    name="wants_to_learn"
                    placeholder="What do you want to learn?"
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded text-black"
                ></textarea>

                <button
                    type="submit"
                    className="bg-blue-700 text-black px-6 py-3 rounded w-full hover:bg-blue-800 transition-all"
                >
                    Register
                </button>
            </form>
        </div>
    );
}