import { motion } from "framer-motion";
import { Mic, Volume2 } from "lucide-react";
import "./App.css";

export default function App() {
  const speaking = true;

  return (
    <div className="app">
      <div className="glass">

        <h2>NUS LIVE AI</h2>

        <motion.div
          className="bear"
          animate={{
            y: speaking ? [0, -8, 0] : 0
          }}
          transition={{
            repeat: Infinity,
            duration: 1
          }}
        >
          🐻
        </motion.div>

        <motion.div
          className="mouth"
          animate={{
            scaleY: speaking ? [1, 2, 1] : 1
          }}
          transition={{
            repeat: Infinity,
            duration: 0.3
          }}
        />

        <div className="wave">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="buttons">
          <button>
            <Mic size={24} />
          </button>

          <button>
            <Volume2 size={24} />
          </button>
        </div>

      </div>
    </div>
  );
}