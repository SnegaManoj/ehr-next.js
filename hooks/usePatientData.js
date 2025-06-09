"use client";
import { useState, useEffect } from "react";

export default function usePatientData() {
  const [patient, setPatient] = useState({
    name: "John Doe",
    age: 45,
    gender: "Male",
    medicalHistory: [
      "2020 - Diagnosed with Type 2 Diabetes",
      "2021 - Undergone gallbladder surgery",
      "2022 - Treated for hypertension",
      "2023 - COVID-19 recovery, no complications",
    ],
    allergies: "Penicillin, Dust",
    notes: "Monitor blood sugar and blood pressure monthly. Encourage daily walks.",
  });

  useEffect(() => {
    console.log("Patient data loaded");
    // Optional: fetch data from API
  }, []);

  return { patient, setPatient };
}
