'use client';
import React, { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('User not logged in.');
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:8000/users/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }

        const data = await response.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUser();
  }, []);

  if (error) return <div className="p-6 text-red-500">{error}</div>;

  if (!user) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
        <p><strong>Skills:</strong> {user.skills}</p>
        <p><strong>Goal:</strong> {user.goal}</p>
        <p><strong>Experience:</strong> {user.experience}</p>
        <p><strong>Wants to Learn:</strong> {user.wants_to_learn}</p>
      </div>
    </div>
  );
}