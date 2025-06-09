"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import usePatientData from "@/hooks/usePatientData";

export default function PatientForm() {
  const { patient, setPatient } = usePatientData();
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push("/patientDetails"); // Navigate to patient details page
  };

  return (
    <div className="container p-4">
      <h1>Electronic Health Record (EHR)</h1>

      <div className="photo my-4">
        <Image src="/placeholder.png" alt="Patient Photo" width={120} height={120} />
      </div>

      <form onSubmit={handleSubmit}>
        <label>Patient Name:</label>
        <input type="text" value={patient.name} readOnly />

        <label>Age:</label>
        <input type="number" value={patient.age} readOnly />

        <label>Gender:</label>
        <input type="text" value={patient.gender} readOnly />

        <label>Medical History:</label>
        <div className="history-box">
          <ul>
            {patient.medicalHistory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <label>Allergies:</label>
        <textarea value={patient.allergies} readOnly />

        <label>Doctor's Notes:</label>
        <textarea
          value={patient.notes}
          onChange={(e) => setPatient({ ...patient, notes: e.target.value })}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
