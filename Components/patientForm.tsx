"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import usePatientData from "@/hooks/usePatientData";
import useAddPatient from "@/hooks/useAddPatient";

export default function PatientForm() {
  const { patient, setPatient } = usePatientData();
  const { addPatient } = useAddPatient();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const docRef = await addPatient(patient);
      router.push(`/patientDetail/${docRef.id}`);
    } catch (error) {
      console.error("Error submitting patient:", error);
      alert("Failed to submit patient");
    }
  };

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold">Electronic Health Record (EHR)</h1>
      <div className="photo my-4">
        <Image src="/placeholder.png" alt="Patient Photo" width={120} height={120} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
            setPatient({ ...patient, medicalHistory: e.target.value.split(",").map((s) => s.trim()) })
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

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
