import { useState } from "react";
import Header from "./components/Header";
import CheckButton from "./components/CheckButton";
import Result from "./components/Result";
import ShareButtons from "./components/ShareButtons";
import { getTodayResult } from "./utils/dayChecker";

function App() {
  const [result, setResult] = useState("");

  const handleCheck = () => {
    const answer = getTodayResult();
    setResult(answer);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <Header />

        <CheckButton onCheck={handleCheck} />

        <Result result={result} />

        {result && <ShareButtons result={result} />}
      </div>
    </div>
  );
}

export default App;