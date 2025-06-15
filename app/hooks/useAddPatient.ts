import { collection, addDoc } from "firebase/firestore";
import { Patient } from "./usePatientData";
import { db } from "@/app/utils/firebase";

export default function useAddPatient() {
  const addPatient = async (patient: Patient) => {
    const docRef = await addDoc(collection(db, "Patients"), patient);
    return docRef; // contains docRef.id
  };

  return { addPatient };
}
