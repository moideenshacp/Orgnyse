import React from "react";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";
import Button from "../../shared/components/Button";
import EventData from "../../interface/IeventData";

interface TicketProps {
  event: EventData;
}

const Ticket: React.FC<TicketProps> = ({ event }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Select Your Ticket For A Unique Experience
      </h2>

      <div className="flex justify-center gap-8 py-8">
        {event?.ticketTypes?.map((ticket) => (
          <div
            key={ticket.id}
            className="w-[220px] rounded-xl overflow-hidden shadow-lg border border-blue-400"
          >
            <div className="relative">
              <img
                src={event.coverImage || ""}
                alt={ticket.name}
                className="w-full h-[120px] object-cover"
              />

            </div>
            <div className="bg-gradient-to-b from-[#1E88E5] to-[#1565C0] p-4 text-white">
              <h3 className="font-bold text-md mb-1">{ticket.name}</h3>
              <p className="text-xs text-blue-100 mb-4">
                {ticket.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-white font-bold text-sm">
                  ${ticket.price}
                </div>
                <div className="flex items-center space-x-1 bg-white rounded px-2 py-1">
                  <button className="text-black">
                    <FiMinus size={12} />
                  </button>
                  <span className="text-black text-sm">1</span>
                  <button className="text-black">
                    <FiPlus size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="primary" className="px-8">
          BUY TICKET
          <FiArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default Ticket;
