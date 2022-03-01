import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./ui/Header";
import theme from "./ui/Theme";

import { ThemeProvider } from '@material-ui/core/styles'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Header/>
        <h2>Test components</h2>
          <Routes>
            <Route path="/" element={<h3>home</h3>} />
            <Route path="services" element={<h3>services</h3>} />
            <Route path="revolution" element={<h3>revolution</h3>} />
            <Route path="about" element={<h3>about</h3>} />
            <Route path="contact" element={<h3>contact</h3>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
