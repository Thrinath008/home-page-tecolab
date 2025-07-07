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
  const [selectedSkills, setSelectedSkills] = useState<{ [key: string]: number }>(formData.skills || {});
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

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-[#122336] mb-2">Skills & Experience</h2>
        <p className="text-gray-500">Select your skills and rate your proficiency level</p>
      </div>

      {/* Common Skills */}
      <div className="flex flex-col gap-4">
        <label className="text-[#122336] font-semibold flex items-center gap-2 text-base">
          💻 <span>Select Skills</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {commonSkills.map((skill) => {
            const isSelected = !!selectedSkills[skill];
            return (
              <button
                key={skill}
                onClick={() => isSelected ? removeSkill(skill) : addSkill(skill)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-transform 
                  ${isSelected ? 'bg-[#122336] text-white' : 'border-2 border-[#122336] text-[#122336] hover:bg-[#122336] hover:text-white'} 
                  transform hover:scale-105`}
              >
                {skill}
                {isSelected && <span>×</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Skill Input */}
      <div className="flex flex-col gap-2">
        <label className="text-[#122336] font-semibold">Add Custom Skill</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={customSkill}
            placeholder="Enter a skill not listed above"
            onChange={(e) => setCustomSkill(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addCustomSkill()}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <button
            onClick={addCustomSkill}
            className="px-4 py-2 border-2 border-[#122336] rounded-lg text-[#122336] font-semibold hover:bg-[#122336] hover:text-white transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Skill Ratings */}
      {Object.keys(selectedSkills).length > 0 && (
        <div className="flex flex-col gap-6">
          <label className="text-[#122336] font-semibold flex items-center gap-2">
            ⭐ <span>Rate Your Skills (1 = Beginner, 5 = Expert)</span>
          </label>
          {Object.entries(selectedSkills).map(([skill, level]) => (
            <div key={skill} className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">{skill}</span>
                <span className="px-3 py-1 text-xs font-medium border-2 border-[#122336] rounded-full bg-[#122336]/10 text-[#122336]">
                  {getSkillLevelText(level)}
                </span>
              </div>
              <div className="px-2">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={level}
                  onChange={(e) => updateSkillLevel(skill, parseInt(e.target.value))}
                  className="w-full h-2 rounded bg-gray-200 appearance-none accent-[#122336]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsStep;