"use client";
import { Button, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import AuthNavigatorLink from "../components/AuthNavigatorLink";
import { SigningInput } from "../components/SigningInput";


export default function Content() {
    
    const theme = useTheme();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            email: formData.get('email'),
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
                    Forget Password
                </Typography>

                 <Typography
                    variant="body1"
                    sx={{
                        maxWidth: '321px'
                    }}
                >
                    Enter your email address below and we'll send you a link to reset your password.
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

                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        sx={{ fontWeight: 'bold', py: 1.3, fontSize: '1rem' }}
                    >
                        Send Reset Link
                    </Button>
                </Stack>

                <Stack spacing={1.5} sx={{ width: '100%', mt: 2.5 }}>
                    <AuthNavigatorLink
                        theme={theme}
                        link="/login"
                        prefixText="Remembered your password?"
                        linkText="Login"
                    />
                </Stack>
            </Stack>
        </Container>
    );
}