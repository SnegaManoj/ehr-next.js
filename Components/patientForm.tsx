"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import usePatientData from "@/hooks/usePatientData";

export default function PatientForm() {
  const { patient, setPatient } = usePatientData();
  const router = useRouter();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

 const response = await fetch("/api/ai-suggestions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(patient),
});

if (!response.ok) {
  const error = await response.text();
  alert("Server error: " + error);
  return;
}

const data = await response.json();
alert("AI Suggestion:\n" + data.result);


  router.push("/patientDetails");
};


  return (
    <div className="container p-4">
      <h1>Electronic Health Record (EHR)</h1>

      <div className="photo my-4">
        <Image src="/placeholder.png" alt="Patient Photo" width={120} height={120} />
      </div>

      <form onSubmit={handleSubmit}>
       <label>Patient Name:</label>
<input
  type="text"
  value={patient.name}
  onChange={(e) => setPatient({ ...patient, name: e.target.value })}
/>

<label>Age:</label>
<input
  type="number"
  value={patient.age}
  onChange={(e) => setPatient({ ...patient, age: parseInt(e.target.value) })}
/>

<label>Gender:</label>
<input
  type="text"
  value={patient.gender}
  onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
/>

<label>Medical History (comma-separated):</label>
<input
  type="text"
  value={patient.medicalHistory.join(", ")}
  onChange={(e) =>
    setPatient({ ...patient, medicalHistory: e.target.value.split(",").map(s => s.trim()) })
  }
/>

<label>Allergies:</label>
<textarea
  value={patient.allergies}
  onChange={(e) => setPatient({ ...patient, allergies: e.target.value })}
/>

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
