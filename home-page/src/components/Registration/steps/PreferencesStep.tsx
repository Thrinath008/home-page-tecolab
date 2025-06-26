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

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    outline: 'none',
    backgroundColor: 'white',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical' as const,
    fontFamily: 'inherit',
  };

  const labelStyle = {
    color: '#122336',
    fontWeight: '600',
    marginBottom: '8px',
    fontSize: '14px',
  };

  const badgeStyle = (isSelected: boolean) => ({
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: isSelected ? 'none' : '2px solid #122336',
    background: isSelected ? '#122336' : 'transparent',
    color: isSelected ? 'white' : '#122336',
    display: 'inline-block',
  });

  const checkboxStyle = {
    width: '16px',
    height: '16px',
    marginRight: '8px',
    cursor: 'pointer',
    accentColor: '#122336',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#122336',
          marginBottom: '8px' 
        }}>
          Preferences & Profile
        </h2>
        <p style={{ color: '#6b7280' }}>
          Tell us about your interests and preferences
        </p>
      </div>

      {/* Interests */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label style={labelStyle}>
          🎯 Areas of Interest
        </label>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          {interestOptions.map((interest) => (
            <div
              key={interest}
              style={badgeStyle(data.interests.includes(interest))}
              onClick={() => toggleInterest(interest)}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1.05)';
                if (!data.interests.includes(interest)) {
                  (e.target as HTMLElement).style.background = '#122336';
                  (e.target as HTMLElement).style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1)';
                if (!data.interests.includes(interest)) {
                  (e.target as HTMLElement).style.background = 'transparent';
                  (e.target as HTMLElement).style.color = '#122336';
                }
              }}
            >
              {interest}
            </div>
          ))}
        </div>
      </div>

      {/* Career Goals */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={labelStyle}>
          🎯 Career Goals
        </label>
        <select
          value={data.careerGoals}
          onChange={(e) => handleChange('careerGoals', e.target.value)}
          style={{...inputStyle, cursor: 'pointer'}}
          onFocus={(e) => {
            (e.target as HTMLElement).style.borderColor = '#122336';
            (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(18, 35, 54, 0.1)';
          }}
          onBlur={(e) => {
            (e.target as HTMLElement).style.borderColor = '#e2e8f0';
            (e.target as HTMLElement).style.boxShadow = 'none';
          }}
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={labelStyle}>
          ⏰ Availability for Projects/Collaboration
        </label>
        <select
          value={data.availability}
          onChange={(e) => handleChange('availability', e.target.value)}
          style={{...inputStyle, cursor: 'pointer'}}
          onFocus={(e) => {
            (e.target as HTMLElement).style.borderColor = '#122336';
            (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(18, 35, 54, 0.1)';
          }}
          onBlur={(e) => {
            (e.target as HTMLElement).style.borderColor = '#e2e8f0';
            (e.target as HTMLElement).style.boxShadow = 'none';
          }}
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={labelStyle}>
          📝 Brief Bio
        </label>
        <textarea
          placeholder="Tell us a bit about yourself, your background, and what you're passionate about..."
          value={data.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          style={textareaStyle}
          onFocus={(e) => {
            (e.target as HTMLElement).style.borderColor = '#122336';
            (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(18, 35, 54, 0.1)';
          }}
          onBlur={(e) => {
            (e.target as HTMLElement).style.borderColor = '#e2e8f0';
            (e.target as HTMLElement).style.boxShadow = 'none';
          }}
        />
      </div>

      {/* Preferences */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label style={labelStyle}>
          ⚙️ Communication Preferences
        </label>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={data.newsletter}
            onChange={(e) => handleChange('newsletter', e.target.checked)}
            style={checkboxStyle}
          />
          <span style={{ color: '#374151' }}>
            Subscribe to our newsletter for updates and opportunities
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={data.notifications}
            onChange={(e) => handleChange('notifications', e.target.checked)}
            style={checkboxStyle}
          />
          <span style={{ color: '#374151' }}>
            Receive notifications about project matches and community events
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreferencesStep;
