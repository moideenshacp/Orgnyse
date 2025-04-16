import { FiArrowRight, FiCalendar, FiClock, FiMapPin } from "react-icons/fi"
import Button from "../../shared/components/Button"
import Logo from "../../assets/WhiteLogo.png";


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
interface HeaderProps {
    event:EventDetails
}
const Header:React.FC<HeaderProps> = ({event}) => {
  return (
    <div>
        <header className="bg-primary text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={Logo} alt="Logo" className="ml-10 mt-2" />

        </div>
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="uppercase tracking-wider text-sm mb-2">{event.subtitle}</p>
          <h1 className="text-4xl font-bold mb-8">{event.title}</h1>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center">
              <FiCalendar className="h-5 w-5 mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <FiClock className="h-5 w-5 mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="h-5 w-5 mr-2" />
              <span>{event.location}</span>
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
  )
}

export default Header