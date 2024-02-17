import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Home from "./components/Home";
import { useState } from "react";
import Cursor from "./components/Cursor";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [cursorType, setCursorType] = useState("smallCursor");
  return (
    <div>
      <Cursor cursorType={cursorType} />
      <AnimatePresence>
        {/* {isLoaded ? <Loader setIsLoaded={setIsLoaded} /> : <Home />} */}
        <Home setCursorType={setCursorType} />
      </AnimatePresence>
    </div>
  );
}

export default App;
