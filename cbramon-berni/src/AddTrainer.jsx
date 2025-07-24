import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function AddTrainer({ onTrainerAdded }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !bio) {
      alert("Bitte Name und Bio ausfüllen!");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "trainers"), {
        name,
        bio,
        photo
      });
      setName("");
      setBio("");
      setPhoto("");
      onTrainerAdded();
      alert("Trainer hinzugefügt!");
    } catch (error) {
      console.error("Fehler beim Hinzufügen: ", error);
      alert("Fehler beim Hinzufügen!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Neuen Trainer hinzufügen</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Foto URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <br />
      <button type="submit">Trainer hinzufügen</button>
    </form>
  );
}
