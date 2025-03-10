function EventCard({ event }) {
    return (
      <div className="event-card">
        <h3>{event.title}</h3>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        <span className="tag">{event.category}</span>
      </div>
    );
  }
  
  export default EventCard;
  