import React, { useEffect, useState } from "react";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";
import { CiCirclePlus } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/createEvent/EventCard";
import { getAllEvents } from "../api/eventApi";
import { EventCardData } from "../interface/IeventCardProps";
import EventData from "../interface/IeventData";

const Events: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState<EventCardData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const data: EventData[] = await getAllEvents();
console.log(data,"hey dtaatt");

      const transformedData: EventCardData[] = data.map((event) => ({
        
        ...event,
        coverImage: event.coverImage ?? undefined,
        eventDate: event.eventDate|| "",
        startTime: event.startTime|| "",
        endTime: event.endTime|| "",
      }));

      setEvents(transformedData);
    } catch (err) {
      console.error("Failed to load events", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("buu");
    
    fetchEvents();
  }, []);

  const handleCreateEvent = () => {
    navigate("/events/create");
  };

  const filteredEvents = events.filter((event) =>
    event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mt-6 mb-6 px-5 gap-16">
        <h1 className="text-4xl font-bold whitespace-nowrap">Events List</h1>

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
        {loading ? (
          <div className="text-center py-16 text-gray-500">
            Loading events...
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No events found. Create a new event to get started.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
