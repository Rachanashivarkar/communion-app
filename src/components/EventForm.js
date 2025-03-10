import { useState } from "react";

function EventForm({ addEvent }) {
  const [formData, setFormData] = useState({ title: "", date: "", category: "", location: "", description: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.date && formData.category) {
      addEvent(formData);
      setFormData({ title: "", date: "", category: "", location: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input type="text" name="title" placeholder="Event Title" onChange={handleChange} value={formData.title} required />
      <input type="date" name="date" onChange={handleChange} value={formData.date} required />
      <select name="category" onChange={handleChange} value={formData.category} required>
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <input type="text" name="location" placeholder="Location" onChange={handleChange} value={formData.location} />
      <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description}></textarea>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;
