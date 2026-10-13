import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import DashboardPage from "./pages/DashboardPage";
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
    </Routes>
  );
}

export default App;