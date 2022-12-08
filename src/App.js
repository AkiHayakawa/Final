import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import EditManga from "./components/EditManga";
import CreateManga from "./components/CreateManga";
import Details from "./components/Details";
import Header from "./components/Header";
import CartContextProvider from "./context/CartContextProvider";
import Cart from "./components/Cart";
import AuthContextProvider from "./context/AuthContextProvider";
import Footer from "./components/Footer";
import MangaContextProvider from "./context/mangaContext";
import SideBar from "./components/SideBar";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <MangaContextProvider>
            <AuthContextProvider>
              <Header />
              <Routes>
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateManga />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/edit/:id" element={<EditManga />} />
                <Route path="/details/:id" element={<Details />} />
              </Routes>
              {/* <Footer /> */}
            </AuthContextProvider>
          </MangaContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
