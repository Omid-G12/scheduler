import { useState } from "react";

export default function useVisualMode(initial) {
  //const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Transitions between modes and keeps the previous mode in a history array
  function transition(mode, replace = false) {
    
    setHistory(prevState => replace? [...prevState.slice(0,-1), mode] : [...prevState, mode]);

  };

  function back() {
    const newHistory = [...history]
    if (newHistory.length > 1) {
      newHistory.pop();
      setHistory(newHistory)
    }
  };

  return { mode: history[history.length - 1], transition, back };
}

