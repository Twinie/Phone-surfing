import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmallHeader from "./components/SmallHeader";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <SmallHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="testimonials" element={<Testimonials />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
