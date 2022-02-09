import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/blog" element={<Blog></Blog>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
