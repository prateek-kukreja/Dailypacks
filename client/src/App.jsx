import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import All from "./components/categories-item/All";
import Bask from "./components/categories-item/Bask";
import Idyll from "./components/categories-item/Idyll";
import Odyssey from "./components/categories-item/Odyssey";
import Tarp from "./components/categories-item/Tarp";
import Way from "./components/categories-item/Way";
import Weekender from "./components/categories-item/Weekender";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Signin from "./pages/Sign_in";
import { Outlet } from "react-router-dom";
import Signup from "./pages/Sign_up";
import { useAuthContext } from "./hook/useAuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  const { user } = useAuthContext();

  if (user === unde) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/sign_up"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/sign_in"
          element={!user ? <Signin /> : <Navigate to="/" />}
        />

        {user ? (
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
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
            <Route path="categories/product/:id" element={<ProductPage />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/sign_in" />} />
        )}
      </Routes>
    </>
  );
}

export default App;
