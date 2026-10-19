import { Navigate, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import DashboardPage from "./pages/dashboard/DashboardPage";
import PlaceholderPage from "./pages/dashboard/PlaceholderPage";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Unauthorized from "./pages/auth/Unauthorized";
import './index.css';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      
      {/* Protected student area */}
      <Route element={<ProtectedRoute allowedRoles={["Student"]} />}>
        <Route path="/student" element={<DashboardLayout />}>
          <Route
            index
            element={<Navigate to="dashboard" replace />}
          />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Route>
      
    </Routes>
  );
}

export default App;