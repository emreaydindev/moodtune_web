"use client";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.default',
    }}>
      <Box 
        component="img" 
        src="/logo_gradient.svg" 
        sx={{ width: 60, height: 60, mb: 3, animation: 'pulse 1.5s infinite ease-in-out' }} 
      />
      <CircularProgress size={30} thickness={4} />
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </Box>
  );
}