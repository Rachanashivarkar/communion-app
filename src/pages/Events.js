import { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";

const dummyEvents = [
  { id: 1, title: "Charity Drive", date: "2025-03-12", category: "Charity", location: "New York", description: "Helping the homeless community." },
  { id: 2, title: "Community Prayer", date: "2025-03-15", category: "Religious", location: "Los Angeles", description: "Interfaith prayer session." },
];

function Events() {
  const [events, setEvents] = useState(dummyEvents);
  const [filter, setFilter] = useState("All");

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
  };

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div className="events">
      <h2>Upcoming Events</h2>

      <label>Filter by Category:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <div className="event-list">
        {filteredEvents.map(event => <EventCard key={event.id} event={event} />)}
      </div>

      <h3>Add New Event</h3>
      <EventForm addEvent={addEvent} />
    </div>
  );
}

export default Events;
