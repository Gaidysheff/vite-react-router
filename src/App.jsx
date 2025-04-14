import "./App.css";

import { Route, Routes } from "react-router";

import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
