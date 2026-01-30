"use client";

import { Button, Container, Divider, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import AuthNavigatorLink from "../components/AuthNavigatorLink";
import { SigningInput, SigningPasswordInput } from "../components/SigningInput";

export default function LoginPage() {

  const theme = useTheme();

  useEffect(() => {
    document.title = "Login - MoodTune";
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
  }

  return (
    <Container maxWidth="xs" disableGutters>
      <Stack spacing={2.5}>
      
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'var(--font-dancing-script), cursive',
            alignSelf: 'flex-start',
            fontWeight: 'bold',
          }}
        >
          Sign In
        </Typography>


        <Stack
          component="form"
          onSubmit={handleSubmit}
          spacing={2}
          sx={{
            width: '100%',
            maxWidth: '321px',
            minWidth: { xs: '214px', sm: '267px', md: '321px' },
            alignItems: 'stretch'
          }}
        >
          <SigningInput
            theme={theme}
            name="email"
            type="email"
            label="Email"
            value=""
            setValue={() => {}}
          />

          <SigningPasswordInput
            theme={theme}
            value=""
            setValue={() => {}}
          />

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ fontWeight: 'bold', py: 1.3, fontSize: '1rem' }}
          >
            Login
          </Button>
        </Stack>

        <Divider sx={{ py: -1 }}>or</Divider>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{ fontWeight: 'bold', py: 1.3, fontSize: '1rem' }}
        >
          Sign In with Google
        </Button>

        <Stack spacing={1.5} sx={{ width: '100%', mt: 2.5 }}>
          <AuthNavigatorLink
            theme={theme}
            link="/forgot-password"
            prefixText="Forgot your password?"
            linkText="Reset Password"
          />
          <AuthNavigatorLink
            theme={theme}
            link="/register"
            prefixText="Don't have an account?"
            linkText="Sign Up"
          />
        </Stack>
      </Stack>
    </Container>
  );

}