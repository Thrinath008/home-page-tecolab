'use client';
import React, { useState } from 'react';

interface PreferencesStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const PreferencesStep: React.FC<PreferencesStepProps> = ({ formData, updateFormData }) => {
  const [data, setData] = useState({
    interests: formData.interests || [],
    careerGoals: formData.careerGoals || '',
    availability: formData.availability || '',
    bio: formData.bio || '',
    newsletter: formData.newsletter || false,
    notifications: formData.notifications || false,
  });

  const interestOptions = [
    'Web Development', 'Mobile Development', 'Machine Learning', 'Data Science',
    'Cloud Computing', 'Cybersecurity', 'Game Development', 'UI/UX Design',
    'DevOps', 'Blockchain', 'AI/ML', 'Robotics'
  ];

  const handleChange = (field: string, value: any) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    updateFormData(newData);
  };

  const toggleInterest = (interest: string) => {
    const newInterests = data.interests.includes(interest)
      ? data.interests.filter((i: string) => i !== interest)
      : [...data.interests, interest];
    handleChange('interests', newInterests);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#122336] mb-1">Preferences & Profile</h2>
        <p className="text-gray-500">Tell us about your interests and preferences</p>
      </div>

      {/* Interests */}
      <div className="flex flex-col gap-4">
        <label className="text-[#122336] font-semibold text-sm">
          🎯 Areas of Interest
        </label>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((interest) => {
            const isSelected = data.interests.includes(interest);
            return (
              <div
                key={interest}
                onClick={() => toggleInterest(interest)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#122336] text-white border-transparent scale-105'
                    : 'bg-transparent text-[#122336] border-[#122336] hover:bg-[#122336] hover:text-white'
                }`}
              >
                {interest}
              </div>
            );
          })}
        </div>
      </div>

      {/* Career Goals */}
      <div className="flex flex-col gap-2">
        <label className="text-[#122336] font-semibold text-sm">
          🎯 Career Goals
        </label>
        <select
          value={data.careerGoals}
          onChange={(e) => handleChange('careerGoals', e.target.value)}
          className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#122336] focus:border-[#122336] text-sm text-black"
        >
          <option value="">Select your career goal</option>
          <option value="fullstack">Full Stack Developer</option>
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="mobile">Mobile Developer</option>
          <option value="datascience">Data Scientist</option>
          <option value="ml">Machine Learning Engineer</option>
          <option value="devops">DevOps Engineer</option>
          <option value="security">Cybersecurity Specialist</option>
          <option value="product">Product Manager</option>
          <option value="entrepreneur">Entrepreneur</option>
        </select>
      </div>

      {/* Availability */}
      <div className="flex flex-col gap-2">
        <label className="text-[#122336] font-semibold text-sm">
          ⏰ Availability for Projects/Collaboration
        </label>
        <select
          value={data.availability}
          onChange={(e) => handleChange('availability', e.target.value)}
          className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#122336] focus:border-[#122336] text-sm text-black"
        >
          <option value="">Select your availability</option>
          <option value="fulltime">Full-time (40+ hours/week)</option>
          <option value="parttime">Part-time (20-30 hours/week)</option>
          <option value="casual">Casual (10-20 hours/week)</option>
          <option value="weekend">Weekends only</option>
          <option value="occasional">Occasional projects</option>
        </select>
      </div>

      {/* Bio */}
      <div className="flex flex-col gap-2">
        <label className="text-[#122336] font-semibold text-sm">
          📝 Brief Bio
        </label>
        <textarea
          value={data.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          placeholder="Tell us a bit about yourself, your background, and what you're passionate about..."
          className="w-full p-4 rounded-md border-2 border-gray-300 min-h-[120px] resize-y text-sm focus:outline-none focus:ring-2 focus:ring-[#122336] focus:border-[#122336] text-black"
        />
      </div>

      {/* Communication Preferences */}
      <div className="flex flex-col gap-4">
        <label className="text-[#122336] font-semibold text-sm">
          ⚙️ Communication Preferences
        </label>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={data.newsletter}
            onChange={(e) => handleChange('newsletter', e.target.checked)}
            className="w-4 h-4 accent-[#122336]"
          />
          <span className="text-gray-700 text-sm">
            Subscribe to our newsletter for updates and opportunities
          </span>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={data.notifications}
            onChange={(e) => handleChange('notifications', e.target.checked)}
            className="w-4 h-4 accent-[#122336]"
          />
          <span className="text-gray-700 text-sm">
            Receive notifications about project matches and community events
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreferencesStep;