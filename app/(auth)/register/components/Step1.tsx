import { Button, Divider, Stack, Theme, Typography } from "@mui/material";
import { SigningInput, SigningPasswordInput } from "../../components/SigningInput";
import AuthNavigatorLink from "../../components/AuthNavigatorLink";
import GoogleIcon from '@mui/icons-material/Google';
import { useCallback } from "react";

export default function Step1({ 
    theme, changeStep, userState, setUserState
} : { 
    theme: Theme, changeStep: (step: number) => void, userState: any, setUserState: (val: any) => void
}) {

    const handleNameChange = useCallback((val: string) => {
        setUserState({...userState, "name": val})
    }, [userState, setUserState]);

    const handleEmailChange = useCallback((val: string) => {
        setUserState({...userState, "email": val})
    }, [userState, setUserState]);

    const handlePasswordChange = useCallback((val: string) => {
        setUserState({...userState, "password": val})
        console.log("changed password")
    }, [userState, setUserState]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
    }

    return (
        <Stack spacing={2.5}>
            <Typography
                variant="h3"
                sx={{
                    fontFamily: 'var(--font-dancing-script), cursive',
                    alignSelf: 'flex-start',
                    fontWeight: 'bold',
                }}
            >
                Sign Up
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
                    name="name"
                    type="text"
                    label="Name"
                    value={userState.name}
                    setValue={handleNameChange}
                />

                <SigningInput
                    theme={theme}
                    name="email"
                    type="email"
                    label="Email"
                    value={userState.email}
                    setValue={handleEmailChange}
                />

                <SigningPasswordInput
                    theme={theme}
                    value={userState.password}
                    setValue={handlePasswordChange}
                />

                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{ fontWeight: 'bold', py: 1.3, fontSize: '1rem' }}
                >
                    Register
                </Button>
            </Stack>

            <Divider sx={{ py: -1 }}>or</Divider>

            <Button
                variant="outlined"
                fullWidth
                startIcon={<GoogleIcon />}
                onClick={() => {
                    changeStep(1);
                }}
                sx={{ fontWeight: 'bold', py: 1.3, fontSize: '1rem' }}
            >
                Sign Up with Google
            </Button>

            <Stack spacing={1.5} sx={{ width: '100%', mt: 2.5 }}>
                <AuthNavigatorLink
                    theme={theme}
                    link="/login"
                    prefixText="Already have an account?"
                    linkText="Login"
                />
            </Stack>
        </Stack>
    );
}