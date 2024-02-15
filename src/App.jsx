import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Home from "./components/Home";
import { useState } from "react";
import Cursor from "./components/Cursor";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  return (
    <>
      <Cursor />
      <AnimatePresence>
        {/* {isLoaded ? <Loader setIsLoaded={setIsLoaded} /> : <Home />} */}
        <Home />
      </AnimatePresence>
    </>
  );
}

export default App;
