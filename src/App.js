import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Shoes from "./components/pages/Shoes";
import Clothes from "./components/pages/Clothes";
import Bags from "./components/pages/Bags";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import TermsofUse from "./components/pages/TermsofUse";
import Faqs from "./components/pages/Faqs";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import ProductDetails from "./components/ProductDetails";
import ViewCart from "./components/ViewCart";
import Checkout from "./components/Checkout";
import SignUp from "./components/account/SignUp";
import Login from "./components/account/Login";
import UserAccount from "./components/pages/UserAccount";
import ForgotPassword from "./components/account/ForgotPassword";
import ResetPassword from "./components/account/ResetPassword";
import CheckoutDetails from "./components/CheckoutDetails";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/clothes" element={<Layout><Clothes /></Layout>} />
          <Route path="/shoes" element={<Layout><Shoes /></Layout>} />
          <Route path="/bags" element={<Layout><Bags /></Layout>} />
          <Route path="/about_us" element={<Layout><AboutUs /></Layout>} />
          <Route path="/contact_us" element={<Layout><ContactUs /></Layout>} />
          <Route path="/terms_of_use" element={<Layout><TermsofUse /></Layout>} />
          <Route path="/faqs" element={<Layout><Faqs /></Layout>} />
          <Route path="/privacy_policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/product_details" element={<Layout><allProducts /></Layout>} />
          <Route path="/product_details/:id" element={<Layout><ProductDetails /></Layout>} />
          <Route path="/shoe_details/:id" element={<Layout><shoeDetails /></Layout>} />
          <Route path="/view_cart" element={<Layout><ViewCart /></Layout>} />
          <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgot_password" element={<ForgotPassword/>}/>
          <Route path="/reset_password" element={<ResetPassword/>}/>
          <Route path="/user_account/:userId" element={<Layout><UserAccount /></Layout>} />
          <Route path="/checkout_details" element={<Layout><CheckoutDetails /></Layout>} />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
