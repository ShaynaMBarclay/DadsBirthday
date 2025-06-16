import { useState } from 'react';
import './App.css'
import EnvelopeScreen from "./EnvelopeScreen";
import BirthdayScreen from "./BirthdayScreen";


function App() {
  const [isOpened, setIsOpened] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white">
        
      {!isOpened ? (
        <EnvelopeScreen onOpen={() => setIsOpened(true)} />
      ) : (
        <BirthdayScreen />
      )}
    </div>
  );
}

export default App;
