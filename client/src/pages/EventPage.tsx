import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventViewFooter from "../components/createEvent/EventViewFooter";
import Contact from "../components/eventLanding/Contact";
import Header from "../components/eventLanding/Header";
import Ticket from "../components/eventLanding/Ticket";
import About from "../components/eventLanding/About";
import ImageSection from "../components/eventLanding/ImageSection";

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

interface TicketType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetails | null>(null);
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    // For demo purposes, we're using mock data
    const fetchEventDetails = async () => {
      try {
        setLoading(true);

        // Mock data - replace with actual API call
        const mockEvent: EventDetails = {
          id: id || "1",
          title: "Recent Stories From Google Network",
          subtitle: "API ORGANIZATION TOGETHER",
          date: "24 MAY, 2023",
          time: "6:00 PM PST",
          location: "SAN FRANCISCO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vulputate magna, in finibus turpis. Phasellus non efficitur nibh, a vehicula massa. Praesent vel nulla et sapien dignissim tempus. Nunc pellentesque consectetur arcu euismod aliquet.",
          mainImage:
            "https://asset.cloudinary.com/dkgcelc6s/4179031b0705a3068f47ed7dd60ddac7",
          organizerName: "Orginyte",
        };

        const mockTickets: TicketType[] = [
          {
            id: "1",
            name: "Business Growth",
            description:
              "Access to all sessions, networking events, and exclusive content",
            price: 33.9,
            image: "/api/placeholder/200/150",
          },
        ];

        setEvent(mockEvent);
        setTickets(mockTickets);
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
      <Ticket tickets={tickets} />

      {/* Contact Section */}
      <Contact />

      <EventViewFooter />
    </div>
  );
};

export default EventPage;
