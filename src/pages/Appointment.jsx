import React, { useState, useEffect } from "react";

function Appointment() {

  const [name, setName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [appointments, setAppointments] = useState([]);

  // Load saved data
  useEffect(() => {
    const savedAppointments = JSON.parse(
      localStorage.getItem("appointments")
    );

    if (savedAppointments) {
      setAppointments(savedAppointments);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !doctor || !date) {
      alert("Fill all fields");
      return;
    }

    const newData = { name, doctor, date };

    const updatedAppointments = [...appointments, newData];

    setAppointments(updatedAppointments);

    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );

    setName("");
    setDoctor("");
    setDate("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Appointment</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <select
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        >
          <option value="">Select Doctor</option>
          <option>Dr. Sharma</option>
          <option>Dr. Priya</option>
          <option>Dr. Khan</option>
        </select>

        <br /><br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <br /><br />

        <button type="submit">Book Appointment</button>

      </form>

      <h2>Booked Appointments</h2>

      {appointments.map((app, index) => (
        <div key={index}>
          <p><b>Name:</b> {app.name}</p>
          <p><b>Doctor:</b> {app.doctor}</p>
          <p><b>Date:</b> {app.date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Appointment;