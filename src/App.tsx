import React from 'react';
import Navbar from "./components/navbar";
import {Container} from "@mui/material";
import Slider from "./components/slider";
import Quote from "./components/quote";
import Latest from "./components/latest";
import Products from "./components/products";
import Training from "./components/training";
import PointBreak from "./components/point-break";
import Newsletter from "./components/newsletter";
import Camp from "./components/camp";
import Footer from "./components/footer";

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
        <PointBreak />
        <Newsletter />
      </Container>
      <Container maxWidth={"xl"} style={{paddingRight:0,paddingLeft:0}}>
        <Camp />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
