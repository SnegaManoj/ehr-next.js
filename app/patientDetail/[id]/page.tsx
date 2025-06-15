"use client";
import usePatientById from "@/hooks/usePatientById";
import { useParams, useRouter } from "next/navigation";

export default function PatientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const { patient, loading } = usePatientById(id);

  if (loading) return <p>Loading patient details...</p>;
  if (!patient) return <p>Patient not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Details</h1>
      <p><strong>Name:</strong> {patient.name}</p>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Allergies:</strong> {patient.allergies}</p>
      <p><strong>Doctor's Notes:</strong> {patient.notes}</p>
      <p><strong>Medical History:</strong> {patient.medicalHistory.join(", ")}</p>

      <button
        onClick={() => router.push("/")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Back to Home
      </button>
    </div>
  );
}
