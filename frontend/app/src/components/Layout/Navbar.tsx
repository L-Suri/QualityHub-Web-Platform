import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1, // ensures navbar is above sidebar
        backgroundColor: "#1976d2",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          QualityHub
        </Typography>

        <Box>
          <Typography variant="body1">User</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}


