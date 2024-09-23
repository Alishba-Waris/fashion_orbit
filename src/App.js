import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home";
import Shoes from "./components/pages/Shoes";
import Clothes from "./components/pages/Clothes";
import Bags from "./components/pages/Bags";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Layout from './components/layout/Layout';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/clothes' element={<Clothes/>} />
            <Route path='/shoes' element={<Shoes/>} />
            <Route path='/bags' element={<Bags/>} />
            <Route path='/about_us' element={<AboutUs/>}/>
            <Route path='/contact_us' element={<ContactUs/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App

