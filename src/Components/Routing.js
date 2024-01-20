import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import NavBar from "./NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CatFact from "../pages/CatFact";

export const AppContext = createContext();

const Routing = () => {
  const client = new QueryClient();
  const [username, setUsername] = useState("Benediction");
  return (
    <div>
      <AppContext.Provider value={{ username, setUsername }}>
        <QueryClientProvider client={client}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
              <Route path="/CatFact" element={<CatFact />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
};

export default Routing;
