import { Box, Button, TextField, Typography, Paper } from "@mui/material";

export default function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: 400,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, py: 1.2 }}
        >
          Login
        </Button>

        <Typography mt={2} textAlign="center" fontSize={14}>
          Don’t have an account? <a href="/register">Register</a>
        </Typography>
      </Paper>
    </Box>
  );
}
// Story 2.5 UI finalized