import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import TestCasesList from "../pages/TestCasesList";
import CreateTestCase from "../pages/CreateTestCase";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/testcases" element={<TestCasesList />} />
      <Route path="/testcases/new" element={<CreateTestCase />} />
    </Routes>
  );
}