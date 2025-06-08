import Image from "next/image";
export default function Home() {
  return (
    <div className="container">
      <h1>Electronic Health Record (EHR)</h1>

      <div className="photo">
        <img src="/placeholder.png" alt="Patient Photo" width={120} height={120} />
      </div>

      <form>
        <label>Patient Name:</label>
        <input type="text" value="John Doe" readOnly />

        <label>Age:</label>
        <input type="number" value="45" readOnly />

        <label>Gender:</label>
        <input type="text" value="Male" readOnly />

        <label>Medical History:</label>
        <div className="history-box">
          <ul>
            <li>2020 - Diagnosed with Type 2 Diabetes</li>
            <li>2021 - Undergone gallbladder surgery</li>
            <li>2022 - Treated for hypertension</li>
            <li>2023 - COVID-19 recovery, no complications</li>
          </ul>
        </div>

        <label>Allergies:</label>
        <textarea defaultValue="Penicillin, Dust" readOnly />

        <label>Doctor's Notes:</label>
        <textarea defaultValue="Monitor blood sugar and blood pressure monthly. Encourage daily walks." />

        <button type="submit">Save Record</button>
      </form>
    </div>
  );
}