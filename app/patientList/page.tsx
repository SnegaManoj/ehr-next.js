"use client";
import useAllPatients from "@/app/Components/hooks/useAllPatients";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PatientListPage() {
  const { patients, loading } = useAllPatients();
  const router = useRouter();

  if (loading) return <p>Loading patients...</p>;

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-4">Patient List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id} className="mb-4">
            <strong>{patient.name}</strong> — {patient.age} yrs, {patient.gender} <br />
            Allergies: {patient.allergies} <br />
            <Link href={`/patientDetail/${patient.id}`} className="text-blue-500 underline">
              View Details
            </Link>
            <hr className="my-2" />
          </li>
        ))}
      </ul>

      <button
        onClick={() => router.push("/")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Back to Home
      </button>
    </div>
  );
}
