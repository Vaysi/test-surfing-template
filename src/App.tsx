import React from 'react';
import Navbar from "./components/navbar";
import {Container} from "@mui/material";
import Slider from "./components/slider";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Slider />
      </Container>
    </div>
  );
}

export default App;
