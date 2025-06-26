'use client';
import React, { useState } from 'react';
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

  const updateFormData = (stepData: any) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #122336 0%, #1a3a54 100%)',
      padding: '48px 16px',
    }}>
      <div style={{
        maxWidth: '1024px',
        margin: '0 auto',
      }}>
        {/* Stepper Header */}
        <div style={{ marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '8px',
            background: 'linear-gradient(45deg, #122336, #2a4a64, #3d5f7d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'rainbow 3s ease-in-out infinite',
            backgroundSize: '400% 400%',
          }}>
            Join Our Community
          </h1>
          <p style={{
            textAlign: 'center',
            color: 'white',
            marginBottom: '32px',
            fontSize: '16px',
          }}>
            Complete your registration in {steps.length} simple steps
          </p>
          
          {/* Progress Bar */}
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}>
              {steps.map((step, index) => (
                <div key={step.id} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 10,
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    transition: 'all 0.5s ease',
                    transform: step.id <= currentStep ? 'scale(1.1)' : 'scale(1)',
                    background: step.id <= currentStep 
                      ? '#122336' 
                      : 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    boxShadow: step.id <= currentStep 
                      ? '0 10px 15px -3px rgba(18, 35, 54, 0.5)' 
                      : 'none',
                    border: step.id <= currentStep ? '2px solid #4CAF50' : '2px solid rgba(255, 255, 255, 0.3)',
                  }}>
                    {step.id}
                  </div>
                  <span style={{
                    marginTop: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    color: step.id <= currentStep ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  }}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Progress Line */}
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              right: '24px',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '2px',
              zIndex: 0,
            }}>
              <div style={{
                height: '100%',
                background: '#122336',
                borderRadius: '2px',
                transition: 'all 0.7s ease-out',
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              }} />
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div style={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: '32px',
          marginBottom: '32px',
          transition: 'all 0.5s ease',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}>
          <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
            <CurrentStepComponent
              formData={formData}
              updateFormData={updateFormData}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
              opacity: currentStep === 1 ? 0.5 : 1,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (currentStep !== 1) {
                (e.target as HTMLElement).style.background = 'rgba(255, 255, 255, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentStep !== 1) {
                (e.target as HTMLElement).style.background = 'rgba(255, 255, 255, 0.2)';
              }
            }}
          >
            <span>←</span>
            <span>Previous</span>
          </button>

          <div style={{ display: 'flex', gap: '8px' }}>
            {steps.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  background: index + 1 <= currentStep 
                    ? '#122336' 
                    : 'rgba(255, 255, 255, 0.4)',
                }}
              />
            ))}
          </div>

          <button
            onClick={currentStep === steps.length ? () => console.log('Submit', formData) : nextStep}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: '#122336',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 15px -3px rgba(18, 35, 54, 0.4)',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#0d1a26';
              (e.target as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#122336';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            <span>{currentStep === steps.length ? 'Complete Registration' : 'Next'}</span>
            {currentStep !== steps.length && <span>→</span>}
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes rainbow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default RegistrationStepper;
