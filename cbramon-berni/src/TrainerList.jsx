import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import AddTrainer from "./AddTrainer";

export default function TrainerList() {
  const [trainers, setTrainers] = useState([]);

  async function fetchTrainers() {
    const trainersCol = collection(db, "trainers");
    const trainersSnapshot = await getDocs(trainersCol);
    const trainersList = trainersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setTrainers(trainersList);
  }

  useEffect(() => {
    fetchTrainers();
  }, []);

  return (
    <div>
      <AddTrainer onTrainerAdded={fetchTrainers} />
      <h2>Alle CBRAmon-Trainer</h2>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.id} style={{ marginBottom: "15px" }}>
            <img
              src={trainer.photo}
              alt={`${trainer.name} Profil`}
              width={50}
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <strong>{trainer.name}</strong>: {trainer.bio}
          </li>
        ))}
      </ul>
    </div>
  );
}
