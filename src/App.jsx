import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catagories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
