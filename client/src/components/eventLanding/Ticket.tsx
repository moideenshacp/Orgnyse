import { FiArrowRight, FiPlus } from "react-icons/fi"
import Button from "../../shared/components/Button"
import React from "react";

interface TicketType {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }
interface TicketProps{
    tickets:TicketType[]
}
const Ticket:React.FC<TicketProps> = ({tickets}) => {
  return (
    <div>
        <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Select Your Ticket For A Unique Experience</h2>
        
        <div className="flex justify-center py-8">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
              <img 
                src={ticket.image} 
                alt={ticket.name} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4 bg-blue-600 text-white">
                <h3 className="font-bold text-lg mb-1">{ticket.name}</h3>
                <p className="text-sm text-blue-100 mb-4">{ticket.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">${ticket.price.toFixed(2)}</span>
                  <Button 
                    variant="primary"
                    className="bg-white text-primary hover:bg-blue-50"
                  >
                    <FiPlus className="h-4 w-4 mr-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button 
            variant="primary" 
            className="px-8"
          >
            BUY TICKET
            <FiArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Ticket