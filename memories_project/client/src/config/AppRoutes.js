import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "../components/Auth/Auth";
import Home from "../components/Home/Home";
import PostDetails from "../components/PostDetails/PostDetails";
const AppRoutes = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/posts" />} />
      <Route exact path="/posts" element={<Home />} />
      <Route exact path="/posts/search" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route
        path="/auth"
        element={!user ? <Auth /> : <Navigate to="/posts" />}
      />
    </Routes>
  );
};

export default AppRoutes;
