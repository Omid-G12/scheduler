import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    setMode(mode);
    if (replace) {
      setHistory([initial, mode]);
    } else {
      history.push(mode);
    }
    
  };

  function back() {
    if (history.length > 1) {
      history.pop();
    }
    
    setMode(history[history.length - 1])
  };

  return { mode, transition, back };
}

