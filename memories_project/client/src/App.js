import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./config/AppRoutes";

const App = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <AppRoutes />
    </Container>
  );
};

export default App;
