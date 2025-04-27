import "./App.css";

import { Route, Routes } from "react-router";

import About from "./pages/About";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/vite-react-router" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="filter" element={<Filter />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
