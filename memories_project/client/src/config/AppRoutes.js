import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Auth from "../components/Auth/Auth";
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default AppRoutes;
