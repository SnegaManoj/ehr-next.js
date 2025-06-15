"use client";
import { useRouter } from "next/navigation";

// pages/patient-list.js
export default function patientList() {
   const router = useRouter();
  
    const goBack = () => {
      router.push("/"); // Navigate to home page
    };
  const patients = [
    {
    name: "John Doe",
    age: 45,
    gender: "Male",
    allergies: "Penicillin, Dust",
    notes: "Monitor blood sugar and blood pressure monthly.",
  },
  {
    name: "Jane Smith",
    age: 37,
    gender: "Female",
    allergies: "None",
    notes: "Schedule follow-up for knee pain.",
  },
  {
    name: "Michael Johnson",
    age: 52,
    gender: "Male",
    allergies: "Peanuts",
    notes: "Regular check-ups for cholesterol and liver enzymes.",
  },
  {
    name: "Emily Davis",
    age: 29,
    gender: "Female",
    allergies: "Latex",
    notes: "Monitor for migraines; prescribed preventive medication.",
  },
  {
    name: "Robert Brown",
    age: 61,
    gender: "Male",
    allergies: "Shellfish",
    notes: "Diagnosed with early-stage arthritis. Recommend physiotherapy.",
  },
  {
    name: "Laura Wilson",
    age: 48,
    gender: "Female",
    allergies: "Aspirin",
    notes: "Blood pressure under control. Next review in 3 months.",
  },
  ];

  return (
    <div className="container">
      <h1>Patient List</h1>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            <strong>{patient.name}</strong> — {patient.age} years, {patient.gender}<br />
            Allergies: {patient.allergies}<br />
            Notes: {patient.notes}
            <hr />
          </li>
        ))}
      </ul>
        <button onClick={goBack} style={{ marginTop: "20px" }}>
        Go Back to Home
      </button>
    </div>
  );
}
