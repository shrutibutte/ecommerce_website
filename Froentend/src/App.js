import "./App.css";
import Footer from "./component/Footer";
import MenuComponent from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Pages/Homepage";
import Shop from "./component/Pages/Shop";
import Contact from "./component/Pages/Contact";
import Blog from "./component/Pages/Blog";
import Page from "./component/Pages/Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Page" element={<Page></Page>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
