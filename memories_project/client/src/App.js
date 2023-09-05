import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./config/AppRoutes";
// import Home from "./components/Home/Home";
const App = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <AppRoutes />
      {/* <Home /> */}
    </Container>
  );
};

export default App;
