import { useState, useEffect } from 'react';
import ChevronSVG from './icons/ChevronSVG';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date | null;
}

function Calendar({ onDateSelect, selectedDate: externalSelectedDate }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(externalSelectedDate || new Date());

  useEffect(() => {
    if (externalSelectedDate) {
      setSelectedDate(externalSelectedDate);
    }
  }, [externalSelectedDate]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const calendarDays = [];
  
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isToday = (day: number | null) => {
    if (!day) return false;
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number | null) => {
    if (!day) return false;
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  const handleDateClick = (day: number | null) => {
    if (day) {
      const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      setSelectedDate(newDate);
      
      // Call parent callback if provided
      if (onDateSelect) {
        onDateSelect(newDate);
      }
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg p-2">
      {/* Month/Year Header with Navigation */}
      <div className="flex items-center justify-between mb-1">
        <button
          onClick={previousMonth}
          className="p-1 hover:bg-gray-100 rounded-full transition"
        >
          <div className="rotate-270">
            <ChevronSVG width="1.2em" height="1.2em" />
          </div>
        </button>
        
        <h2 className="text-lg font-bold text-moonstone">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        
        <button
          onClick={nextMonth}
          className="p-1 hover:bg-gray-100 rounded-full transition"
        >
          <div className="rotate-90">
            <ChevronSVG width="1.2em" height="1.2em" />
          </div>
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map(day => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-moonstone py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(day)}
            disabled={day === null}
            className={`
              aspect-square flex items-center justify-center rounded-lg text-sm
              ${day === null ? 'invisible' : ''}
              ${isToday(day) ? 'bg-vanilla text-moonstone font-bold' : ''}
              ${isSelected(day) && !isToday(day) ? 'bg-moonstone text-white font-semibold' : ''}
              ${!isToday(day) && !isSelected(day) ? 'hover:bg-gray-100 text-gray-700' : ''}
              ${day !== null ? 'cursor-pointer' : 'cursor-default'}
              transition-colors
            `}
          >
            {day}
          </button>
        ))}
      </div>
      
    </div>
  );
}

export default Calendar;