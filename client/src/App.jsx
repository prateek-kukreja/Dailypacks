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

        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="sign_in" />}
          />
          <Route
            path="categories"
            element={user ? <Categories /> : <Navigate to="sign_in" />}
          >
            <Route
              path="all"
              element={user ? <All /> : <Navigate to="sign_in" />}
            />
            <Route
              path="bask"
              element={user ? <Bask /> : <Navigate to="sign_in" />}
            />
            <Route
              path="idyll"
              element={user ? <Idyll /> : <Navigate to="sign_in" />}
            />
            <Route
              path="odyssey"
              element={user ? <Odyssey /> : <Navigate to="sign_in" />}
            />
            <Route
              path="tarp"
              element={user ? <Tarp /> : <Navigate to="sign_in" />}
            />
            <Route
              path="weekender"
              element={user ? <Weekender /> : <Navigate to="sign_in" />}
            />
            <Route
              path="way"
              element={user ? <Way /> : <Navigate to="sign_in" />}
            />
          </Route>
          <Route
            path="categories/product/:id"
            element={user ? <ProductPage /> : <Navigate to="sign_in" />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
