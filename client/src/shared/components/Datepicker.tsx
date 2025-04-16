import React, { useState } from 'react';
import Input from './Input';

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, placeholder = 'MM/DD/YYYY' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className="w-full"
          rightIcon={
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-400 cursor-pointer" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              onClick={() => setIsOpen(!isOpen)}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          }
        />
      </div>
      {/* DatePicker dropdown would be implemented here in a real implementation */}
    </div>
  );
};

export default DatePicker