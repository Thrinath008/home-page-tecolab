"use client";
import React, { useEffect, useState } from "react";

interface CalendarEvent {
  type: "meeting" | "deadline" | "project" | "note";
  title: string;
  date: number;
  endDate?: number;
}

interface CalendarProps {
  eventsByDate: Record<number, string[]>;
}

export default function Calendar() {
  const totalCells = 35; // 7x5 grid
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [noteInput, setNoteInput] = useState<string>("");

  const todayDate = new Date();

  const [currentMonth, setCurrentMonth] = useState<number>(todayDate.getMonth());
  const [currentYear, setCurrentYear] = useState<number>(todayDate.getFullYear());

  useEffect(() => {
    const storedEvents = localStorage.getItem("calendar-events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calendar-events", JSON.stringify(events));
  }, [events]);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const today = currentYear === todayDate.getFullYear() && currentMonth === todayDate.getMonth() ? todayDate.getDate() : -1;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDayClick = (dayNum: number) => {
    if (dayNum > 0 && dayNum <= daysInMonth) {
      setSelectedDate(dayNum);
      setNoteInput("");
    }
  };

  const handleSaveNote = () => {
    if (selectedDate && noteInput.trim() !== "") {
      const newEvent: CalendarEvent = {
        type: "note",
        title: noteInput.trim(),
        date: selectedDate,
      };
      setEvents((prev) => [...prev, newEvent]);
      setNoteInput("");
    }
  };

  // Prepare eventsByDate mapping for badges
  const eventsByDate: Record<number, CalendarEvent[]> = {};
  for (const ev of events) {
    for (let d = ev.date; d <= (ev.endDate ?? ev.date); d++) {
      if (!eventsByDate[d]) eventsByDate[d] = [];
      eventsByDate[d].push(ev);
    }
  }

  // Map event types to badge colors
  const eventTypeColors: Record<string, string> = {
    meeting: "bg-green-500",
    deadline: "bg-red-500",
    project: "bg-yellow-500",
    note: "bg-blue-500",
  };

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  return (
    <div className="bg-[#161b22] rounded-2xl shadow-lg p-6 col-span-1 md:col-span-2 aspect-square flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={goToPrevMonth}
          className="text-indigo-400 hover:text-indigo-600 transition-colors px-2 py-1 rounded"
          aria-label="Previous Month"
        >
          Prev
        </button>
        <div className="text-white font-semibold text-lg select-none">
          {monthNames[currentMonth]} {currentYear}
        </div>
        <button
          onClick={goToNextMonth}
          className="text-indigo-400 hover:text-indigo-600 transition-colors px-2 py-1 rounded"
          aria-label="Next Month"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-gray-400 select-none mb-2">
        {weekDays.map((wd) => (
          <div key={wd} className="font-semibold">
            {wd}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 flex-grow overflow-auto">
        {Array.from({ length: totalCells }).map((_, i) => {
          const dayNum = i - firstDayIndex + 1;
          const isValidDay = dayNum > 0 && dayNum <= daysInMonth;
          const isToday = dayNum === today;

          const dayEvents = eventsByDate[dayNum] || [];
          const hasProject = dayEvents.some((ev) => ev.type === "project");

          return (
            <div
              key={i}
              onClick={() => handleDayClick(dayNum)}
              className={`aspect-square rounded-lg flex flex-col items-center justify-start p-2 cursor-pointer transition-colors select-none group relative ${
                isToday
                  ? "bg-indigo-500 text-white"
                  : hasProject
                  ? "bg-[#3a3a5e] text-gray-300 hover:bg-[#4a4a7e]"
                  : "bg-[#1A1A2E] text-gray-300 hover:bg-[#2a2d43]"
              } ${selectedDate === dayNum ? "ring-2 ring-indigo-400" : ""}`}
            >
              <div className="text-sm font-semibold">
                {isValidDay ? dayNum : ""}
              </div>
              {dayEvents.some(ev => ev.type === "note") && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                  {dayEvents.find(ev => ev.type === "note")?.title}
                </div>
              )}
              <div className="flex space-x-1 mt-1 flex-wrap justify-center">
                {dayEvents.map((ev, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full ${eventTypeColors[ev.type]}`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {selectedDate && (
        <div className="mt-4 bg-[#1A1A2E] rounded-lg p-4 text-white">
          {eventsByDate[selectedDate] && eventsByDate[selectedDate].length > 0 && (
            <div className="mb-4">
              <div className="mb-2 font-semibold">Events for Day {selectedDate}</div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                {eventsByDate[selectedDate].map((ev, idx) => (
                  <li key={idx}>
                    <span className="font-medium capitalize">{ev.type}:</span> {ev.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mb-2 font-semibold">Add Note for Day {selectedDate}</div>
          <textarea
            className="w-full p-2 rounded bg-[#2a2d43] text-white resize-none"
            rows={3}
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            placeholder="Enter your note here..."
          />
          <button
            onClick={handleSaveNote}
            className="mt-2 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition-colors"
          >
            Save Note
          </button>
        </div>
      )}
    </div>
  );
}