import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import All from './components/categories-item/All'
import Bask from './components/categories-item/Bask'
import Idyll from './components/categories-item/Idyll'
import Odyssey from './components/categories-item/Odyssey'
import Tarp from './components/categories-item/Tarp'
import Way from './components/categories-item/Way'
import Weekender from './components/categories-item/Weekender'
import Categories from './pages/Categories'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Signin from './pages/Sign_in'
import { Outlet } from 'react-router-dom'
import Signup from './pages/Sign_up'
import { useAuthContext } from './hook/useAuthContext'
import { ToastContainer } from 'react-toastify'
import PrivacyPolicy from './components/policy-pages/PrivacyPolicy'
import CancellationandRefund from './components/policy-pages/CancellationandRefund'
import ContactUs from './components/policy-pages/ContactUs'
import ShippingandDelivery from './components/policy-pages/ShippingandDelivery'
import TnC from './components/policy-pages/TnC'

function App() {
  const { user } = useAuthContext()

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

        {/* <Route path="/" element={!user && <Signin />} /> */}

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
            element={user ? <Home /> : <Navigate to="/sign_in" />}
          />
          {user && (
            <Route path="categories" element={<Categories />}>
              <Route path="all" element={<All />} />
              <Route path="bask" element={<Bask />} />
              <Route path="idyll" element={<Idyll />} />
              <Route path="odyssey" element={<Odyssey />} />
              <Route path="tarp" element={<Tarp />} />
              <Route path="weekender" element={<Weekender />} />
              <Route path="way" element={<Way />} />
            </Route>
          )}
          {user && (
            <>
              <Route path="categories/product/:id" element={<ProductPage />} />
              <Route path="privacy_policy" element={<PrivacyPolicy />} />
              <Route
                path="cancellation_and_refund"
                element={<CancellationandRefund />}
              />
              <Route path="contact_us" element={<ContactUs />} />
              <Route
                path="shipping_and_delivery"
                element={<ShippingandDelivery />}
              />
              <Route path="tnc" element={<TnC />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  )
}

export default App
