import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../shared/components/Button";
import Sidebar from "../components/createEvent/Sidebar";
import Header from "../components/Layout/Header";
import BasicInfoStep from "../components/createEvent/BasicInfo";
import ImageDescriptionStep from "../components/createEvent/ImageDescriptionStep";
import TicketsStep from "../components/createEvent/TicketSteps";
import { createEvent } from "../api/eventApi";
import { EventContext } from "../context/EventContext";

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState<string>("basic-info");

  const context = useContext(EventContext);
  
  if (!context) {
    throw new Error("EventContext must be used within an EventProvider");
  }

  const { eventData,resetEventData, setEventData } = context;


  const handleNext =async () => {
    if (activeStep === "basic-info") {
      setActiveStep("image-description");
    } else if (activeStep === "image-description") {
      setActiveStep("tickets");
    } else {
      console.log("Event created", eventData);

      try {
        const res = await createEvent(eventData)
        console.log(res,"ejkfbejbfelrurferbruruufr");
        if(res.status === 201){
          resetEventData()
          navigate("/events");

        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
  };

  const renderStepComponent = () => {
    switch (activeStep) {
      case "basic-info":
        return <BasicInfoStep eventData={eventData} setEventData={setEventData} />;
      case "image-description":
        return <ImageDescriptionStep eventData={eventData} setEventData={setEventData} />;
      case "tickets":
        return <TicketsStep eventData={eventData} setEventData={setEventData} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white">
        <Header />
      </div>

      <div className="pt-16 flex-1">
        <div className="bg-contentbg shadow-sm p-6 pt-20 rounded-lg min-h-screen w-full">
          <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-12 h-full rounded-2xl">
            {/* Sidebar */}
            <Sidebar activeStep={activeStep} setActiveStep={setActiveStep} />

            {/* Step Content */}
            <div className="flex-1">
              <Link
                to="/events"
                className="text-blue-500 text-sm hover:underline mb-2 inline-block"
              >
                Save & back to events list
              </Link>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Create new event
              </h1>

              {renderStepComponent()}

              <div className="flex justify-end mt-12 px-4 lg:px-0">
                <Button variant="primary" onClick={handleNext}>
                  {activeStep === "tickets" ? "Publish Event" : "Next"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
