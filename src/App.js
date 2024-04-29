import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductsDetailsPage,
  ProfilePage,
  ShopCreatePage,
  ShopRegPage,
  SellerActivationPage,
  ShopLoginPage,
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
import {ShopHomePage} from "./shopRoutes.js";

const App = () => {
  // const { loading, isAuthenticated } = useSelector ((state) => state.user);
  // const { isloading, isSeller, seller } = useSelector ((state) => state.seller);
 

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);

  return (
     <>
    {/* // {loading || isloading ? null : ( */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route
            path="/seller/activation/:activation_token"
            element={<SellerActivationPage />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:name" element={<ProductsDetailsPage />} />
          <Route path="/best-selling" element={<BestSellingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/shop-create" element={<ShopCreatePage />} />
          <Route path="/shop-reg" element={<ShopRegPage />} />
          <Route path="/shop-login" element={<ShopLoginPage />} />
          <Route path="/shop/:id" element={<ShopHomePage />} />
        </Routes>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
      {/* // )} */}
    </>
    
    
  );
};

export default App;
