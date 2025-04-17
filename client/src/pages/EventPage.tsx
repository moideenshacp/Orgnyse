import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventViewFooter from "../components/eventLanding/EventViewFooter";
import Contact from "../components/eventLanding/Contact";
import Header from "../components/eventLanding/Header";
import Ticket from "../components/eventLanding/Ticket";
import About from "../components/eventLanding/About";
import ImageSection from "../components/eventLanding/ImageSection";
import EventData from "../interface/IeventData";
import { getEventById } from "../api/eventApi";

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        if (!id) return;
        const res = await getEventById(id);
        setEvent(res);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event details:", error);
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading event details...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Event not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <Header event={event} />

      {/* Main Image Section */}
      <ImageSection event={event} />

      {/* About Section */}
      <About event={event} />

      {/* Ticket Section */}
      <Ticket event={event} />

      {/* Contact Section */}
      <Contact />

      <EventViewFooter />
    </div>
  );
};

export default EventPage;
