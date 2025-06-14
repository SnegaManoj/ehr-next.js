
"use client"
import PatientForm from "@/app/Components/patientForm";
import { useRouter } from "next/navigation";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
    const router = useRouter();

   const goToPatientList = () => {
    router.push("/patientList"); // 👈 Make sure your route is correct: pages/patientlist.tsx
  };
  return (
    
    <div>
       <div>
      <h1>Welcome</h1>
      <button onClick={goToPatientList} style={{ marginBottom: "20px" }}>
          Go to Patient List
        </button>
      
    
    </div>
      <PatientForm />
      <Analytics />
    </div>
  );
}