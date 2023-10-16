import Navbar from "./components/Navbar";
import All from "./components/categories-item/All";
import Bask from "./components/categories-item/Bask";
import Idyll from "./components/categories-item/Idyll";
import Odyssey from "./components/categories-item/Odyssey";
import Tarp from "./components/categories-item/Tarp";
import Way from "./components/categories-item/Way";
import Weekender from "./components/categories-item/Weekender";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="bask" element={<Bask />} />
          <Route path="idyll" element={<Idyll />} />
          <Route path="odyssey" element={<Odyssey />} />
          <Route path="tarp" element={<Tarp />} />
          <Route path="weekender" element={<Weekender />} />
          <Route path="way" element={<Way />} />
        </Route>
        <Route path="productpage" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
