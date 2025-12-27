import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import Discover from "./pages/Discover";

const App = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
