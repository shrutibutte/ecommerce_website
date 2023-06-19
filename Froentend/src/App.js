import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Home/Homepage";
import Shop from "./component/Shop/Shop";
import Contact from "./component/General/Contact";
import Blog from "./component/Blog/Blog";
import Page from "./component/Pages/Page";
import Register from "./component/Autho/Register";
import Login from "./component/Autho/Login";

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
          <Route path="/Register" element={<Register></Register>} />
          <Route path="/Login" element={<Login></Login>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
