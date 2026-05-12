import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar stays fixed at top */}
      <Navbar />

      {/* Sidebar stays on the left */}
      <Sidebar />

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // pushes content below navbar
          ml: `${drawerWidth}px`, // pushes content right of sidebar
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
        }}
      >
        <Outlet /> {/* 👈 This renders the active child route */}
      </Box>
    </Box>
  );
}
