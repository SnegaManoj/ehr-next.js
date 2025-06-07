i<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Simple EHR System</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(#f0f8ff, #e0ffff);
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h1 {
      text-align: center;
      color: #2a5d84;
    }
    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }
    input, textarea, select, button {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    .history-box, ul {
      background: #f9f9f9;
      padding: 10px;
      border-radius: 5px;
      margin-top: 5px;
    }
    .photo {
      text-align: center;
      margin-bottom: 20px;
    }
    button {
      margin-top: 15px;
      background-color: #2a5d84;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #1f4564;
    }
    .medication-list li {
      margin-left: 20px;
    }
  </style>
</head>
<body>

<div class="container">
  <h1>Electronic Health Record (EHR)</h1>

  <div class="photo">
    <input type="file" accept="image/*">
  </div>

  <form id="ehrForm" onsubmit="event.preventDefault(); alert('Record Saved!')">
    <label>Patient Name:</label>
    <input type="text" id="name" value="John Doe" required />

    <label>Date of Birth:</label>
    <input type="date" id="dob" required onchange="calculateAge()" />

    <label>Age:</label>
    <input type="number" id="age" readonly />

    <label>Gender:</label>
    <select id="gender">
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>

    <label>Medical History:</label>
    <div class="history-box">
      <ul>
        <li>2020 - Diagnosed with Type 2 Diabetes</li>
        <li>2021 - Gallbladder surgery</li>
        <li>2022 - Hypertension treatment</li>
        <li>2023 - COVID-19 recovery</li>
      </ul>
    </div>

    <label>Allergies:</label>
    <textarea id="allergies">Penicillin, Dust</textarea>

    <label>Doctor's Notes:</label>
    <textarea id="notes">Monitor blood sugar monthly. Encourage walking.</textarea>

    <label>Add Medication:</label>
    <input type="text" id="medInput" placeholder="e.g. Metformin" />
    <button type="button" onclick="addMedication()">Add Medication</button>

    <ul class="medication-list" id="medList"></ul>

    <button type="submit">Save Record</button>
    <button type="button" onclick="resetForm()" style="margin-top:10px; background:#777;">Reset</button>
  </form>
</div>

<script>
  function calculateAge() {
    const dob = document.getElementById("dob").value;
    const ageField = document.getElementById("age");
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      ageField.value = age;
    }
  }

  function addMedication() {
    const input = document.getElementById("medInput");
    const list = document.getElementById("medList");
    if (input.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = input.value;
      list.appendChild(li);
      input.value = "";
    }
  }

  function resetForm() {
    document.getElementById("ehrForm").reset();
    document.getElementById("medList").innerHTML = "";
    document.getElementById("age").value = "";
  }
</script>

</body>
</html>
