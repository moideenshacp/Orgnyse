import React from "react";
import Button from "../../shared/components/Button";
import EventData from "../../interface/IeventData";


interface AboutProps {
    event:EventData
}
const About:React.FC<AboutProps> = ({event}) => {

  return (
    <div>
        <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">About the event</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6">
          {event.description}
        </p>
        <div className="text-center">
          <Button className="text-primary hover:text-blue-800">
            Read More
          </Button>
        </div>
      </section>
    </div>
  )
}

export default About