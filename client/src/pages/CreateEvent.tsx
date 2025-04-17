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
import {
  basicInfoSchema,
  imageDescriptionSchema,
} from "../validations/eventValidation";
import { toast } from "react-toastify";
import { ZodIssue } from "zod";

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  const context = useContext(EventContext);

  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState<string>("basic-info");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  //For clearing the errors in respective fields
  const clearFieldError = (field: string) => {
    setFieldErrors((prev) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [field]: _, ...rest } = prev;
      return rest;
    });
  };

  if (!context) {
    throw new Error("EventContext must be used within an EventProvider");
  }

  //Taking the data and neccesary things from context
  const { eventData, resetEventData, setEventData } = context;

  //For handling the next-steps and publishng the event
  const handleNext = async () => {
    //step-1
    if (activeStep === "basic-info") {
      //Validating step-1
      const result = basicInfoSchema.safeParse(eventData);
      if (!result.success) {
        const errs: Record<string, string> = {};
        result.error.issues.forEach((issue: ZodIssue) => {
          const field = issue.path[0] as string;
          if (!(field in errs)) errs[field] = issue.message;
        });
        setFieldErrors(errs);
        return;
      }
      setFieldErrors({});
      setActiveStep("image-description");

      //setp-2
    } else if (activeStep === "image-description") {
      //Validating step-2
      const result = imageDescriptionSchema.safeParse(eventData);
      if (!eventData.coverImage) {
        setFieldErrors({ coverImage: "Please upload an image" });
        return;
      }
      if (!result.success) {
        const errs: Record<string, string> = {};
        result.error.issues.forEach((issue: ZodIssue) => {
          const field = issue.path[0] as string;
          if (!(field in errs)) errs[field] = issue.message;
        });
        setFieldErrors(errs);
        return;
      }
      setFieldErrors({});
      setActiveStep("tickets");
    } else {
      //Final step in event creation
      if (!eventData.ticketTypes || eventData.ticketTypes.length === 0) {
        setFieldErrors({
          ticketTypes: "Please add at least one ticket type before publishing.",
        });
        return;
      }
      setIsLoading(true);

      try {
        const res = await createEvent(eventData);
        if (res.status === 201) {
          resetEventData();
          navigate("/events");
          toast.success("Event created sucessfully..");
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
        toast.error("Something went wrong.");
      } finally {
        setIsLoading(false); // Stop loading
      }
    }
  };

  //For rendering each step dynamically
  const renderStepComponent = () => {
    switch (activeStep) {
      case "basic-info":
        return (
          <BasicInfoStep
            eventData={eventData}
            setEventData={setEventData}
            errors={fieldErrors}
            clearError={clearFieldError}
          />
        );
      case "image-description":
        return (
          <ImageDescriptionStep
            eventData={eventData}
            setEventData={setEventData}
            errors={fieldErrors}
            clearError={clearFieldError}
          />
        );
      case "tickets":
        return (
          <TicketsStep
            eventData={eventData}
            setEventData={setEventData}
            errors={fieldErrors}
            clearError={clearFieldError}
          />
        );
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
                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Publishing..."
                    : activeStep === "tickets"
                    ? "Publish Event"
                    : "Next"}
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
