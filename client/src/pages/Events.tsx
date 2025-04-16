import React, { useState } from "react";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";
import { CiCirclePlus } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/createEvent/EventCard";

// Mock data for demonstration
const mockEvents = [
  {
    id: "1",
    name: "Event Name",
    date: "27-09-2021",
    image: "/api/placeholder/400/240",
    soldTickets: 520,
    totalTickets: 1000,
    revenue: 12000,
    isActive: true
  },
  {
    id: "2",
    name: "Conference 2025",
    date: "15-05-2025",
    image: "/api/placeholder/400/240",
    soldTickets: 350,
    totalTickets: 500,
    revenue: 28000,
    isActive: true
  },
  {
    id: "3",
    name: "Music Festival",
    date: "10-07-2025",
    image: "/api/placeholder/400/240",
    soldTickets: 1200,
    totalTickets: 2000,
    revenue: 48000,
    isActive: false
  }
];

const Events: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleCreateEvent = () => {
    navigate('/events/create');
  };

  const filteredEvents = mockEvents.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mt-6 mb-6 px-5 gap-16">
        <h1 className="text-4xl font-bold whitespace-nowrap">
          Events List
        </h1>

        <div className="flex-1 px-6">
          <Input
            placeholder="Search events..."
            wrapperClassName="w-80"
            icon={<FiSearch />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Button
          variant="primary"
          onClick={handleCreateEvent}
          icon={<CiCirclePlus size={22} />}
        >
          Create new event
        </Button>
      </div>

      <div className="px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <EventCard 
              key={event.id}
              id={event.id}
              name={event.name}
              date={event.date}
              image={event.image}
              soldTickets={event.soldTickets}
              totalTickets={event.totalTickets}
              revenue={event.revenue}
              isActive={event.isActive}
            />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No events found. Create a new event to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;