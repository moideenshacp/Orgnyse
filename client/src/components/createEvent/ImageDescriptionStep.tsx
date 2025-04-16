import React from "react";
import EventData from "../../interface/IeventData";

interface ImageDescriptionStepProps {
  eventData: EventData;
  setEventData: React.Dispatch<React.SetStateAction<EventData>>;
}

export const ImageDescriptionStep: React.FC<ImageDescriptionStepProps> = ({ 
  eventData, 
  setEventData 
}) => {
  return (
    <>
      <h2 className="text-lg font-medium text-blue-600 mb-4">
        Image & Description
      </h2>
      
      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">
          Upload Cover Image
        </label>
        <div className="border-2 border-dashed border-gray-300 p-5 text-center rounded-md">
          <p className="text-gray-400 mb-2">Drop your file(s) here or</p>
          <button className="text-blue-500">Browse</button>
          <p className="text-gray-400 text-sm mt-2">Max. 3 MB accepted<br />Size: 2000x900px</p>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">
          Event Description
        </label>
        <textarea
          placeholder="Describe your event..."
          value={eventData.description}
          onChange={(e) => setEventData({...eventData, description: e.target.value})}
          className="w-full h-32 p-3 border border-gray-300 rounded-md"
        />
      </div>
    </>
  );
};

export default ImageDescriptionStep;