import React from "react";

interface SidebarProps {
  activeStep: string;
  setActiveStep?: (step: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeStep, setActiveStep }) => {

  //Step in event creation
  const steps = [
    { id: "basic-info", label: "Basic Event Info" },
    { id: "image-description", label: "Image & Description" },
    { id: "tickets", label: "Tickets" },
  ];

  //For setting the active step that is currently going on
  const handleStepClick = (stepId: string) => {
    if (setActiveStep) {
      setActiveStep(stepId);
    }
  };

  return (
    <div className="w-56">
      <>
        <div className="p-4 rounded-t-2xl bg-gray-200 border-b border-white">
          <h2 className="font-medium">Event</h2>
        </div>
        <div className="p-0 bg-white rounded-b-2xl">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`p-4 bg-white border-b last:border-b-0 flex items-center justify-between ${
                activeStep === step.id
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              } ${setActiveStep ? "cursor-pointer hover:bg-gray-50" : ""}`}
              onClick={() => handleStepClick(step.id)}
            >
              <span className="text-sm">{step.label}</span>
              {activeStep === step.id && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Sidebar;
