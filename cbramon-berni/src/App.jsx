import { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import TrainerList from "./TrainerList";
import AddTrainer from "./AddTrainer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  if (!user) {
    return <p>Bitte zuerst einloggen.</p>;
  }

  return (
    <div>
      <h1>Hallo {user.email}, hier sind deine Trainer:</h1>
      <AddTrainer onTrainerAdded={() => {}} />
      <TrainerList />
    </div>
  );
}

export default App;
