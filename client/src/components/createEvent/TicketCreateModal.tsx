import React, { useState } from "react";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import { TicketType } from "../../interface/IeventData";

interface CreateTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (ticketData: Partial<TicketType>) => void;
  initialData?: Partial<TicketType>;
}

const CreateTicketModal: React.FC<CreateTicketModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  console.log(initialData,"dwubdwbu");
  
  const [ticketData, setTicketData] = useState<Partial<TicketType>>({
    name: "",
    price: "",
    description: "",
    maxSeats: "",
    oneAttendeePerTicket: true,
    ...initialData,
  });

  console.log(ticketData,"dwednwdbu");
  
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const handleChange = (field: keyof TicketType, value: string | boolean) => {
    setTicketData({
      ...ticketData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    onSave(ticketData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-contentbg rounded-lg p-6 w-full max-w-3xl mx-4">
        <h2 className="text-2xl font-medium text-center mb-6">Create Ticket</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Ticket Type
              </label>
              <Input
                type="text"
                placeholder="Ticket Name"
                value={ticketData.name || ""}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Ticket Price
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  type="text"
                  placeholder="100"
                  value={ticketData.price || ""}
                  onChange={(e) => handleChange("price", e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Max seats/capacity
              </label>
              <Input
                type="text"
                placeholder="500"
                value={ticketData.maxSeats || ""}
                onChange={(e) => handleChange("maxSeats", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Attendance
              </label>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={ticketData.oneAttendeePerTicket ? "one" : "multiple"}
                  onChange={(e) =>
                    handleChange(
                      "oneAttendeePerTicket",
                      e.target.value === "one"
                    )
                  }
                >
                  <option value="one">One attendee per ticket</option>
                  <option value="multiple">
                    Multiple attendees per ticket
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              className="text-blue-500 text-sm font-medium"
              onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
            >
              Advanced options
            </button>
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Ticket Description
            </label>
            <textarea
              placeholder="Ticket Description"
              value={ticketData.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full h-40 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTicketModal;
