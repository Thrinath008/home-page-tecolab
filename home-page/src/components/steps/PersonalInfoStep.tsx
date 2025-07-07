'use client';
import React, { useState } from 'react';

interface PersonalInfoStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ formData, updateFormData }) => {
  const [data, setData] = useState({
    fullName: formData.fullName || '',
    email: formData.email || '',
    password: formData.password || '',
    university: formData.university || '',
    currentYear: formData.currentYear || '',
    degree: formData.degree || '',
    major: formData.major || '',
  });

  const handleChange = (field: string, value: string) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    updateFormData(newData);
  };

  const inputClasses =
    'w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-sm bg-white transition focus:outline-none focus:border-[#122336] focus:ring-4 focus:ring-[#122336]/10';

  const labelClasses = 'flex items-center gap-2 text-[#122336] font-semibold mb-2 text-sm';

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-[#122336] mb-2">Personal Information</h2>
        <p className="text-gray-500">Tell us about yourself and your academic background</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>
            <span>👤</span>
            <span>Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses}>
            <span>📧</span>
            <span>Email Address</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses}>
            <span>🔒</span>
            <span>Password</span>
          </label>
          <input
            type="password"
            placeholder="Create a strong password"
            value={data.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses}>
            <span>🎓</span>
            <span>University / College</span>
          </label>
          <input
            type="text"
            placeholder="Enter your institution name"
            value={data.university}
            onChange={(e) => handleChange('university', e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses}>
            <span>📅</span>
            <span>Current Year</span>
          </label>
          <select
            value={data.currentYear}
            onChange={(e) => handleChange('currentYear', e.target.value)}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="">Select your current year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="final">Final Year</option>
            <option value="postgrad">Post Graduate</option>
          </select>
        </div>

        <div>
          <label className={labelClasses}>
            <span>📚</span>
            <span>Degree</span>
          </label>
          <select
            value={data.degree}
            onChange={(e) => handleChange('degree', e.target.value)}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="">Select your degree</option>
            <option value="btech">B.Tech</option>
            <option value="bsc">BSc</option>
            <option value="bca">BCA</option>
            <option value="mca">MCA</option>
            <option value="mtech">M.Tech</option>
            <option value="msc">MSc</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className={labelClasses}>
            <span>⭐</span>
            <span>Major / Branch / Specialization</span>
          </label>
          <input
            type="text"
            placeholder="e.g., Computer Science, Electrical Engineering, Data Science"
            value={data.major}
            onChange={(e) => handleChange('major', e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;