import React, { useState } from 'react';
import FillApplicationFormStep from './steps/FillApplicationFormStep';
import AttachRequiredDocumentsStep from './steps/AttachRequiredDocumentsStep';
import SubmitApplicationStep from './steps/SubmitApplicationStep';
import VerifySubmittedDocumentsStep from './steps/VerifySubmittedDocumentsStep';
import PerformBackgroundCheckStep from './steps/PerformBackgroundCheckStep';
import Approve/RejectApplicationStep from './steps/Approve/RejectApplicationStep';
import CreatePassportStep from './steps/CreatePassportStep';
import DispatchPassportStep from './steps/DispatchPassportStep';

const PassportApplicationFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState({});

  const allSteps = [
    {
      id: '1',
      label: 'Fill Application Form',
      type: 'manual',
      component: FillApplicationFormStep
    },
    {
      id: '2',
      label: 'Attach Required Documents',
      type: 'manual',
      component: AttachRequiredDocumentsStep
    },
    {
      id: '3',
      label: 'Submit Application',
      type: 'manual',
      component: SubmitApplicationStep
    },
    {
      id: '1',
      label: 'Verify Submitted Documents',
      type: 'manual',
      component: VerifySubmittedDocumentsStep
    },
    {
      id: '2',
      label: 'Perform Background Check',
      type: 'automation',
      component: PerformBackgroundCheckStep
    },
    {
      id: '3',
      label: 'Approve/Reject Application',
      type: 'manual',
      component: Approve/RejectApplicationStep
    },
    {
      id: '1',
      label: 'Create Passport',
      type: 'automation',
      component: CreatePassportStep
    },
    {
      id: '2',
      label: 'Dispatch Passport',
      type: 'automation',
      component: DispatchPassportStep
    }
  ];

  const handleStepComplete = (data) => {
    setStepData(prev => ({
      ...prev,
      [currentStep]: data
    }));
    
    if (currentStep < allSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All steps completed
      console.log('Case completed:', stepData);
      // TODO: Handle case completion
    }
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = allSteps[currentStep]?.component;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Passport Application
            </h1>
            <div className="text-sm text-gray-600">
              Step {currentStep + 1} of {allSteps.length}
            </div>
          </div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / allSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Current step */}
        {CurrentStepComponent && (
          <CurrentStepComponent
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        )}
      </div>
    </div>
  );
};

export default PassportApplicationFlow;