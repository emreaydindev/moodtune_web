"use client";

import { Button, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import AuthNavigatorLink from "../components/AuthNavigatorLink";
import { SigningPasswordInput } from "../components/SigningInput";


export default function Content() {
    const theme = useTheme();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
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
                    Reset Password
                </Typography>

                 <Typography
                    variant="body1"
                    sx={{
                        maxWidth: '321px'
                    }}
                >
                    Enter your new password below to reset your account password.
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

                    <SigningPasswordInput
                        theme={theme}
                        name="password"
                        label="New Password"
                        value=""
                        setValue={() => {}}
                    />

                    <SigningPasswordInput
                        theme={theme}
                        name="confirmPassword"
                        label="Confirm New Password"
                        value=""
                        setValue={() => {}}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        sx={{ fontWeight: 'bold', py: 1.3, fontSize: '1rem' }}
                    >
                        Reset Password
                    </Button>
                </Stack>

                <Stack spacing={1.5} sx={{ width: '100%', mt: 2.5 }}>
                    <AuthNavigatorLink
                        theme={theme}
                        link="/login"
                        prefixText=""
                        linkText="Back to Login"
                    />
                </Stack>
            </Stack>
        </Container>
    );
}