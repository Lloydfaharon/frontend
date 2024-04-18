
import React, { useEffect } from 'react';
import axiosInstance from './redux/utilitaire/axiosConfig';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/loginPage";
import ProfilePage from "./pages/ProfilePage/profilePage";
import ErrorPage from "./pages/ErrorPage/errorPage";


import { createBrowserRouter, RouterProvider } from "react-router-dom"; 


// Définit un composant fonctionnel pour intégrer Navbar et Footer autour du contenu enfant
const LayoutWithHeaderFooter = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// Crée un routeur en utilisant la fonction createBrowserRouter de React Router
const router = createBrowserRouter([
  {
    path: "/", 
    element: <LayoutWithHeaderFooter><HomePage /></LayoutWithHeaderFooter>, 
  },
  {
    path: "/login", 
    element: <LayoutWithHeaderFooter><LoginPage  /></LayoutWithHeaderFooter>, 
  },
  {
    path: "/profil", 
    element: <LayoutWithHeaderFooter><ProfilePage /></LayoutWithHeaderFooter>, 
  },
  {
    path: "*", 
    element: <LayoutWithHeaderFooter><ErrorPage /></LayoutWithHeaderFooter>, 
  },
]);

export default function App() {
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      // Configurez le token dans les en-têtes Axios pour les appels API ultérieurs
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}