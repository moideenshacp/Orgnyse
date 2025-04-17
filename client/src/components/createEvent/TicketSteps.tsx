import React, { useState } from "react";
import EventData, { TicketType } from "../../interface/IeventData";
import CreateTicketModal from "./TicketCreateModal";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

interface TicketsStepProps {
  eventData: EventData;
  setEventData: React.Dispatch<React.SetStateAction<EventData>>;
  errors?: Record<string, string>;
  clearError: (field: string) => void;
}

const TicketsStep: React.FC<TicketsStepProps> = ({
  eventData,
  setEventData,
  errors={},
  clearError
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<TicketType | null>(null);

  const openAddTicketModal = () => {
    clearError("ticketTypes")
    setEditingTicket(null);
    setIsModalOpen(true);
  };

  const openEditTicketModal = (ticket: TicketType) => {
    setEditingTicket(ticket);
    setIsModalOpen(true);
  };

  const saveTicket = (ticketData: Partial<TicketType>) => {
    if (editingTicket) {
      // Edit existing ticket
      const updatedTicketTypes = eventData.ticketTypes?.map((ticket) =>
        ticket.id === editingTicket.id ? { ...ticket, ...ticketData } : ticket
      );

      setEventData({
        ...eventData,
        ticketTypes: updatedTicketTypes,
      });
    } else {
      // Add new ticket
      const newId = Math.floor(1000 + Math.random() * 9000);

      const newTicket = {
        id: newId,
        name: ticketData.name || "",
        price: ticketData.price || "",
        description: ticketData.description || "",
        maxSeats: ticketData.maxSeats || "",
        oneAttendeePerTicket: ticketData.oneAttendeePerTicket || true,
      };

      setEventData({
        ...eventData,
        ticketTypes: [...(eventData.ticketTypes || []), newTicket],
      });
    }
  };

  const removeTicketType = (id: string | number) => {
    setEventData({
      ...eventData,
      ticketTypes: eventData.ticketTypes?.filter((ticket) => ticket.id !== id),
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-blue-600">Tickets</h2>
        <Button onClick={openAddTicketModal} icon={<AiOutlinePlus />}>
          Add Ticket Type
        </Button>
      </div>

      <div className="mb-6">
        {eventData.ticketTypes && eventData.ticketTypes.length > 0 ? (
          <div className="bg-gray-50 rounded-md overflow-hidden">
            {eventData.ticketTypes.map((ticket) => (
              <div
                key={ticket.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <div className="grid grid-cols-12 items-center py-3 px-4">
                  <div className="col-span-5">
                    <Input
                      type="text"
                      value={ticket.name}
                      readOnly
                      className="bg-white"
                      wrapperClassName="w-full"
                      placeholder="Ticket Name"
                    />
                  </div>
                  <div className="col-span-2">
                    <Input
                      type="text"
                      value={`$${ticket.price}`}
                      readOnly
                      className="bg-white"
                      wrapperClassName="w-full"
                    />
                  </div>
                  <div className="col-span-3">
                    <Input
                      type="text"
                      value={
                        ticket.maxSeats && ticket.maxSeats !== "0"
                          ? ticket.maxSeats
                          : "No Limit"
                      }
                      readOnly
                      className="bg-white"
                      wrapperClassName="w-full"
                    />
                  </div>
                  <div className="col-span-2 flex justify-end space-x-2">
                    <Button
                      onClick={() => openEditTicketModal(ticket)}
                      variant="outline"
                      size="sm"
                      className="p-2"
                      icon={<FiEdit2 className="h-4 w-4" />}
                    />

                    <Button
                      onClick={() => removeTicketType(ticket.id)}
                      variant="outline"
                      size="sm"
                      className="p-2 text-red-500 hover:text-red-600"
                      icon={<FiTrash2 className="h-4 w-4" />}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-md">
            <p className="text-gray-500">
              No ticket types added yet. Click "Add Ticket Type" to get started.
            </p>
            {errors.ticketTypes && (
            <p className="text-red-500 text-sm mt-1">{errors.ticketTypes}</p>
          )}
          </div>
        )}
      </div>

      <CreateTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={saveTicket}
        initialData={editingTicket || {}}
      />
    </>
  );
};

export default TicketsStep;
