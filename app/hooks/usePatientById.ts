import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Patient } from "./usePatientData";
import { db } from "../utils/firebase";

export default function usePatientById(id: string) {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const docRef = doc(db, "Patients", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPatient(docSnap.data() as Patient);
        } else {
          setPatient(null);
        }
      } catch (error) {
        console.error("Error fetching patient:", error);
        setPatient(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id]);

  return { patient, loading };
}
