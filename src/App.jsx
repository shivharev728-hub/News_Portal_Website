import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import NewsDetails from "./Pages/NewsDetails";
import Bookmarks from "./Pages/Bookmarks";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookmarks" element={<Bookmarks/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;


