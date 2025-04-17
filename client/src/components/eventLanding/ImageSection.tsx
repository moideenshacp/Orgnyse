import React from "react";
import EventData from "../../interface/IeventData";


interface ImageSectionProps {
    event:EventData
}

const ImageSection:React.FC<ImageSectionProps> = ({event}) => {
  return (
    <div className="container mx-auto px-4 -mt-6">
        <div className="flex justify-center">
          <div className="relative h-64 md:h-96 w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
            <img
              src={event.coverImage || ""}
              alt={event.eventTitle}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
  )
}

export default ImageSection