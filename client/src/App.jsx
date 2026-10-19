import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Unauthorized from "./pages/auth/Unauthorized";
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute allowedRoles={["Student"]} />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}

export default App;