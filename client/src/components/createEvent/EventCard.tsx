import React from "react";
import { FiEdit } from "react-icons/fi";
import Button from "../../shared/components/Button";
import { EventCardProps } from "../../interface/IeventCardProps";


const EventCard: React.FC<EventCardProps> = ({
  id,
  name,
  date,
  image,
  soldTickets,
  totalTickets,
  revenue,
  isActive,
}) => {
  const handleView = () => {
    window.open(`/events/${id}`, "_blank");
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    // You can implement your edit logic here
    // For example: navigate(`/events/edit/${id}`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    // You can implement your delete logic here
  };

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white w-full max-w-xs">
      {/* Event image */}
      <div className="h-32 w-full relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-sm">
          {date}
        </div>
        <div className="absolute top-2 right-2">
          <button 
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
            onClick={handleView}
          >
            View
          </button>
        </div>
        <div className="absolute top-2 right-14">
          <div className="relative group">
            <button className="bg-white text-gray-700 px-1 py-1 rounded">
              ⋮
            </button>
            <div className="hidden group-hover:block absolute right-0 mt-1 bg-white shadow-lg rounded-md w-32 z-10">
              <div 
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleEdit}
              >
                <FiEdit size={16} />
                <span>Edit</span>
              </div>
              <div 
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                onClick={handleDelete}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
                <span>Delete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event details */}
      <div className="p-4">
        <h3 className="font-medium text-lg">{name}</h3>
        
        <div className="flex justify-between mt-3">
          <div>
            <p className="text-gray-800 font-medium">{soldTickets}/{totalTickets}</p>
            <p className="text-xs text-gray-500">Total sold tickets</p>
          </div>
          <div>
            <p className="text-gray-800 font-medium">{formatCurrency(revenue)}</p>
            <p className="text-xs text-gray-500">Total revenue</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <span className={`px-2 py-1 rounded text-xs ${isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {isActive ? 'Active' : 'Inactive'}
          </span>
          
          <button 
            onClick={handleEdit} 
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <FiEdit size={16} />
          </button>
        </div>
        
        <div className="mt-3">
          <Button 
            variant="primary" 
            onClick={handleView}
            className="w-full"
          >
            View Event Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;