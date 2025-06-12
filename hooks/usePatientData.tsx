"use client";
import { useState, useEffect } from "react";

interface Patients {
  name: string;
  age: number;
  gender: string;
  allergies: string;
  notes: string;
  medicalHistory: string[];
}
export default function usePatientData() {
  const [patient, setPatient] = useState<Patients>({
  name: "",
  age: 0,
  gender: "",
  medicalHistory: [],
  allergies: "",
  notes: "",
});


  useEffect(() => {
    console.log("Patient data loaded");
    // Optional: fetch data from API
  }, []);

  return { patient, setPatient };
}
