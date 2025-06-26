'use client';
import React, { useState } from 'react';

interface SkillsStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const commonSkills = [
  'Python', 'JavaScript', 'React', 'Node.js', 'Java', 'C++', 'Machine Learning',
  'Data Science', 'SQL', 'MongoDB', 'Git', 'Docker', 'AWS', 'HTML/CSS',
  'TypeScript', 'Flutter', 'Swift', 'Kotlin', 'PHP', 'Ruby'
];

const SkillsStep: React.FC<SkillsStepProps> = ({ formData, updateFormData }) => {
  const [selectedSkills, setSelectedSkills] = useState<{[key: string]: number}>(formData.skills || {});
  const [customSkill, setCustomSkill] = useState('');

  const addSkill = (skill: string) => {
    if (!selectedSkills[skill]) {
      const newSkills = { ...selectedSkills, [skill]: 3 };
      setSelectedSkills(newSkills);
      updateFormData({ skills: newSkills });
    }
  };

  const removeSkill = (skill: string) => {
    const newSkills = { ...selectedSkills };
    delete newSkills[skill];
    setSelectedSkills(newSkills);
    updateFormData({ skills: newSkills });
  };

  const updateSkillLevel = (skill: string, level: number) => {
    const newSkills = { ...selectedSkills, [skill]: level };
    setSelectedSkills(newSkills);
    updateFormData({ skills: newSkills });
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !selectedSkills[customSkill]) {
      addSkill(customSkill.trim());
      setCustomSkill('');
    }
  };

  const getSkillLevelText = (level: number) => {
    const levels = ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert'];
    return levels[level - 1] || 'Beginner';
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
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transform: 'scale(1)',
  });

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

  const sliderStyle = {
    width: '100%',
    height: '8px',
    borderRadius: '4px',
    background: '#e5e7eb',
    outline: 'none',
    cursor: 'pointer',
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
          Skills & Experience
        </h2>
        <p style={{ color: '#6b7280' }}>
          Select your skills and rate your proficiency level
        </p>
      </div>

      {/* Common Skills */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label style={{
          color: '#122336',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ fontSize: '16px' }}>💻</span>
          <span>Select Skills</span>
        </label>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          {commonSkills.map((skill) => (
            <div
              key={skill}
              style={badgeStyle(!!selectedSkills[skill])}
              onClick={() => selectedSkills[skill] ? removeSkill(skill) : addSkill(skill)}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1.05)';
                if (!selectedSkills[skill]) {
                  (e.target as HTMLElement).style.background = '#122336';
                  (e.target as HTMLElement).style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1)';
                if (!selectedSkills[skill]) {
                  (e.target as HTMLElement).style.background = 'transparent';
                  (e.target as HTMLElement).style.color = '#122336';
                }
              }}
            >
              {skill}
              {selectedSkills[skill] && <span>×</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Skill Input */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ 
          color: '#122336',
          fontWeight: '600' 
        }}>
          Add Custom Skill
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Enter a skill not listed above"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addCustomSkill()}
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLElement).style.borderColor = '#122336';
              (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(18, 35, 54, 0.1)';
            }}
            onBlur={(e) => {
              (e.target as HTMLElement).style.borderColor = '#e2e8f0';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          />
          <button
            onClick={addCustomSkill}
            style={{
              padding: '12px 16px',
              border: '2px solid #122336',
              borderRadius: '8px',
              background: 'transparent',
              color: '#122336',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '600',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#122336';
              (e.target as HTMLElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = 'transparent';
              (e.target as HTMLElement).style.color = '#122336';
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* Skill Ratings */}
      {Object.keys(selectedSkills).length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <label style={{
            color: '#122336',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ fontSize: '16px' }}>⭐</span>
            <span>Rate Your Skills (1 = Beginner, 5 = Expert)</span>
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {Object.entries(selectedSkills).map(([skill, level]) => (
              <div key={skill} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontWeight: '600', color: '#374151' }}>{skill}</span>
                  <span style={{
                    padding: '4px 12px',
                    border: '2px solid #122336',
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: '#122336',
                    background: 'rgba(18, 35, 54, 0.1)',
                  }}>
                    {getSkillLevelText(level)}
                  </span>
                </div>
                <div style={{ padding: '0 12px' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={level}
                    onChange={(e) => updateSkillLevel(skill, parseInt(e.target.value))}
                    style={{
                      ...sliderStyle,
                      background: `linear-gradient(to right, #122336 0%, #122336 ${(level-1)*25}%, #e5e7eb ${(level-1)*25}%, #e5e7eb 100%)`,
                    }}
                  />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#6b7280',
                    marginTop: '4px',
                  }}>
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsStep;
