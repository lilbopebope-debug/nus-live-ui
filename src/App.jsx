import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Volume2 } from "lucide-react";
import bear from "./assets/bear.svg";
import "./App.css";

export default function App() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(true);

  const toggleMic = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="app">

      <div className="dynamic-island">
        NUS LIVE AI
      </div>

      <div className="glass">

        <motion.img
          src={bear}
          alt="Bear"
          className="bear"
          animate={{
            y: isSpeaking ? [0, -10, 0] : 0
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2
          }}
        />

        <div className="eyes">
          <motion.div
            className="eye"
            animate={{
              scaleY: [1, 1, 0.1, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
          />
          <motion.div
            className="eye"
            animate={{
              scaleY: [1, 1, 0.1, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
          />
        </div>

        <motion.div
          className="mouth"
          animate={{
            scaleY: isSpeaking ? [1, 2, 1] : 1
          }}
          transition={{
            repeat: Infinity,
            duration: 0.25
          }}
        />

        <div className="wave">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <h2>Hello, I'm NUS AI</h2>

        <p className="subtitle">
          Premium Gemini Voice Assistant
        </p>

        <div className="buttons">

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMic}
            className={isListening ? "mic active" : "mic"}
          >
            <Mic size={28} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="speaker"
          >
            <Volume2 size={28} />
          </motion.button>

        </div>

      </div>

    </div>
  );
}