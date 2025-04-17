import { FiArrowRight, FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import Button from "../../shared/components/Button";
import Logo from "../../assets/WhiteLogo.png";
import EventData from "../../interface/IeventData";
import dayjs from "dayjs";

interface HeaderProps {
  event: EventData;
}

const Header: React.FC<HeaderProps> = ({ event }) => {
  return (
    <div>
      <header className="bg-gradient-to-b from-[#1E88E5] to-[#1565C0] text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={Logo} alt="Logo" className="ml-10 mt-2 w-32" />
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="uppercase tracking-wider text-sm mb-2">Event</p>
          <h1 className="text-4xl font-bold mb-8">{event.eventTitle}</h1>

          <div className="flex justify-center space-x-8 mb-8 text-sm">
            <div className="flex items-center">
              <FiCalendar className="h-5 w-5 mr-2" />
              <span>
                {event.eventDate
                  ? dayjs(event.eventDate).format("DD MMM, YYYY")
                  : "N/A"}
              </span>
            </div>
            <div className="flex items-center">
              <FiClock className="h-5 w-5 mr-2" />
              <span>
                {event.startTime
                  ? dayjs(event.startTime).format("hh:mm A")
                  : "N/A"}
              </span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="h-5 w-5 mr-2" />
              <span>{event.venueName}</span>
            </div>
          </div>

          <Button
            variant="secondary"
            className="bg-white text-primary hover:bg-blue-50"
          >
            BUY TICKET
            <FiArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
