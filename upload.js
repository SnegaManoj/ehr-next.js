const admin = require("firebase-admin");
const fs = require("fs");

const serviceAccount = require("./serviceAccountKey.json");
const data = JSON.parse(fs.readFileSync("patient.json", "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadData() {
  for (const [key, value] of Object.entries(data)) {
    await db.collection("Patients").doc(key).set(value);
    console.log(`✅ Uploaded: ${key}`);
  }
}

uploadData()
  .then(() => console.log("🎉 All data uploaded successfully"))
  .catch(console.error);