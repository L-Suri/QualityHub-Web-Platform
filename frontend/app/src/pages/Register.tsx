import { Box, Button, TextField, Typography, Paper } from "@mui/material";

export default function Register() {
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
          width: 450,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
          Create Account
        </Typography>

        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
        />

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

        <TextField
          label="Confirm Password"
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
          Register
        </Button>

        <Typography mt={2} textAlign="center" fontSize={14}>
          Already have an account? <a href="/login">Login</a>
        </Typography>
      </Paper>
    </Box>
  );
}