import React from 'react';
import Navbar from "./components/navbar";
import {Container} from "@mui/material";
import Slider from "./components/slider";
import Quote from "./components/quote";
import Latest from "./components/latest";
import Products from "./components/products";
import Training from "./components/training";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Slider />
        <Quote />
        <Latest />
        <Products />
        <Training />
      </Container>
    </div>
  );
}

export default App;
