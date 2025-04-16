import { DatePicker, TimePicker } from "antd";
import EventData from "../../interface/IeventData";
import Input from "../../shared/components/Input";

interface BasicInfoStepProps {
  eventData: EventData;
  setEventData: React.Dispatch<React.SetStateAction<EventData>>;
}

const BasicInfoStep: React.FC<BasicInfoStepProps> = ({
  eventData,
  setEventData,
}) => {
  return (
    <>
      <h2 className="text-lg font-medium text-blue-600 mb-4">
        Basic Event Info
      </h2>

      {/* Event Title */}
      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">Event title</label>
        <Input
          type="text"
          placeholder="Event title"
          value={eventData.eventTitle}
          onChange={(e) =>
            setEventData({ ...eventData, eventTitle: e.target.value })
          }
          className="w-full"
        />
      </div>

      {/* Date and Time Section */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
          <div className="w-full sm:w-96">
            <label className="block text-sm text-gray-600 mb-1">Date</label>
            <DatePicker
              className="h-11 w-full"
              value={eventData.eventDate}
              onChange={(date) =>
                setEventData({ ...eventData, eventDate: date })
              }
              placeholder="MM/DD/YYYY"
            />
          </div>

          <div className="w-full sm:w-48">
            <label className="block text-sm text-gray-600 mb-1">
              Start Time
            </label>
            <TimePicker
              className="h-11 w-full"
              value={eventData.startTime}
              onChange={(time) =>
                setEventData({ ...eventData, startTime: time })
              }
            />
          </div>

          <div className="w-full sm:w-48">
            <label className="block text-sm text-gray-600 mb-1">End Time</label>
            <TimePicker
              className="h-11 w-full"
              value={eventData.endTime}
              onChange={(time) => setEventData({ ...eventData, endTime: time })}
            />
          </div>
        </div>
      </div>

      {/* Venue Information */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-5 mb-1">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Venue Name
            </label>
            <Input
              type="text"
              placeholder="Venue Name"
              value={eventData.venueName}
              onChange={(e) =>
                setEventData({ ...eventData, venueName: e.target.value })
              }
            />
          </div>

          <div className="flex-1 relative">
            <label className="block text-sm text-gray-600 mb-1">
              Venue Address
            </label>
            <Input
              type="text"
              placeholder="Venue Address... start typing"
              value={eventData.venueAddress}
              onChange={(e) =>
                setEventData({ ...eventData, venueAddress: e.target.value })
              }
            />
            <a href="#" className="text-blue-500 text-sm mt-1 block">
              Can't find your address? Enter manually
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfoStep;
