import { useNavigate } from "react-router-dom";

function Doctors() {

  const navigate = useNavigate();

  const doctors = [
    { id: 1, name: "Dr. Sharma", specialist: "Cardiologist" },
    { id: 2, name: "Dr. Priya", specialist: "Dentist" },
    { id: 3, name: "Dr. Khan", specialist: "Neurologist" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Doctors</h1>

      {doctors.map((doc) => (
        <div
          key={doc.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "8px"
          }}
        >
          <h3>{doc.name}</h3>
          <p>{doc.specialist}</p>

          <button
            onClick={() => navigate("/appointment")}
            style={{
              padding: "8px 12px",
              backgroundColor: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
}

export default Doctors;