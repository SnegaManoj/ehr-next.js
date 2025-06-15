"use client";
import { useRouter } from "next/navigation";
import usePatientData from "@/hooks/usePatientData";
import Image from "next/image";

export default function PatientDetails() {
  const router = useRouter();
  const { patient } = usePatientData();

  const goBack = () => {
    router.push("/"); // Navigate to home page
  };

  return (
    <div className="container">
      <h1>Patient Details</h1>

      <div className="photo">
        <Image src="/placeholder.png" alt="Patient Photo" width={120} height={120} />
      </div>

      <p><strong>Name:</strong> {patient.name}</p>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>

      <p><strong>Medical History:</strong></p>
      <ul>
        {patient.medicalHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p><strong>Allergies:</strong> {patient.allergies}</p>
      <p><strong>Doctor's Notes:</strong> {patient.notes}</p>

      {/* Back button */}
      <button onClick={goBack} style={{ marginTop: "20px" }}>
        Go Back to Home
      </button>
    </div>
  );
}
