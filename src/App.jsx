import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Home from "./components/Home";
import { useState } from "react";
import Cursor from "./components/Cursor";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [cursorType, setCursorType] = useState("smallCursor");
  return (
    <>
      <Cursor cursorType={cursorType} />
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCursorType={setCursorType}
      />
      <AnimatePresence initial={false}>
        {isLoaded ? (
          <Loader setIsLoaded={setIsLoaded} key="loader" />
        ) : isOpen ? (
          <Menu
            setCursorType={setCursorType}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            key="menu"
          />
        ) : (
          <>
            <Home
              setCursorType={setCursorType}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              key="home"
            />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
