"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/utils/firebase";

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  allergies: string;
  notes: string;
  medicalHistory: string[];
}

export default function useAllPatients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      const querySnapshot = await getDocs(collection(db, "Patients"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Patient[];

      setPatients(data);
      setLoading(false);
    };

    fetchPatients();
  }, []);

  return { patients, loading };
}
