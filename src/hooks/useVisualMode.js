import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Transitions between modes and keeps the previous mode in a history array
  function transition(mode, replace = false) {
    setMode(mode);
    if (replace) {
      setHistory([initial, mode]);
    } else {
      history.push(mode);
    }
    
  };

  function back() {
    const newHistory = [...history]
    if (newHistory.length > 1) {
      newHistory.pop();
      setHistory(newHistory)
    }
    
    setMode(newHistory[newHistory.length - 1])
  };

  return { mode, transition, back };
}

