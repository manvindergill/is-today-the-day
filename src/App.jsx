import { useState } from "react";
import Header from "./components/Header";
import CheckButton from "./components/CheckButton";
import Result from "./components/Result";
import { isTodayTheDay } from "./utils/dayChecker";

function App() {
  const [result, setResult] = useState("");

  const handleCheck = () => {
    const answer = isTodayTheDay() ? "YES." : "NO.";
    setResult(answer);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <Header />
        <CheckButton onCheck={handleCheck} />
        <Result result={result} />
      </div>
    </div>
  );
}

export default App;