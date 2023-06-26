import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { easeInOut, motion } from "framer-motion";
import haj from "./images/haj.mp4";

function App() {
  return (
    <div className="App">
      <div className="video-container">
        <video autoPlay loop playsInline muted className="video">
          <source src={haj} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, easeInOut }}
            className="h1-font"
          >
            آضحى مبارك
          </motion.h1>
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9, easeInOut }}
            className="fs-1"
          >
            {" "}
            كل عام وانتم بخير
          </motion.h2>

          <div className="d-flex gap-3 flex-row-reverse flex-wrap align-items-center justify-content-center mt-5 hi">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7, easeInOut }}
            >
              الله أكبر
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7, easeInOut }}
            >
              الله أكبر
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.7, easeInOut }}
            >
              الله أكبر
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.7, easeInOut }}
            >
              الله أكبر
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
