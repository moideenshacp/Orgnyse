import React from "react";
import eventImg from "../../assets/Group 27053.png";


interface EventDetails {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    location: string;
    description: string;
    mainImage: string;
    organizerName: string;
  }
interface ImageSectionProps {
    event:EventDetails
}

const ImageSection:React.FC<ImageSectionProps> = ({event}) => {
  return (
    <div className="container mx-auto px-4 -mt-6">
        <div className="flex justify-center">
          <div className="relative h-64 md:h-96 w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
            <img
              src={eventImg}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
  )
}

export default ImageSection