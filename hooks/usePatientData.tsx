import { useState } from "react";

export interface Patient {
  name: string;
  age: number;
  gender: string;
  allergies: string;
  notes: string;
  medicalHistory: string[];
}

export default function usePatientData() {
  const [patient, setPatient] = useState<Patient>({
    name: "",
    age: 0,
    gender: "",
    allergies: "",
    notes: "",
    medicalHistory: [],
  });

  return { patient, setPatient };
}
