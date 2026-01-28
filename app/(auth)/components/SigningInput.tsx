"use client";

import { IconButton, InputAdornment, TextField, Theme } from "@mui/material";
import React from "react";
import EyeIcon from '@mui/icons-material/RemoveRedEye';
import EyeOffIcon from '@mui/icons-material/VisibilityOff';

export function SigningInput({
    theme,
    name,
    type,
    label,
}: {
    theme: Theme,
    name: string,
    type: string,
    label: string,
}) {
    return (
        <TextField
            fullWidth
            name={name}
            type={type}
            label={label}
            variant="outlined"
            required
            slotProps={{
                inputLabel: {
                    sx: {
                        '& .MuiFormLabel-asterisk': {
                            display: 'none',
                        },
                    },
                },
                input: {
                    sx: {
                        '& input:-webkit-autofill': {
                            WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`,
                            WebkitTextFillColor: theme.palette.text.primary,
                            transition: 'background-color 5000s ease-in-out 0s',
                        },
                    },
                }
            }}
        />
    );
}

export function SigningPasswordInput({
    theme,
    name = "password",
    label = "Password",
}: {
    theme: Theme,
    name?: string,
    label?: string,
}) {

    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <TextField
            fullWidth
            name={name}
            type={showPassword ? "text" : "password"}
            label={label}
            required
            slotProps={{
              inputLabel: {
                sx: {
                  '& .MuiFormLabel-asterisk': { display: 'none' },
                },
              },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ mr: -0.5 }}>
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  '& input:-webkit-autofill': {
                    WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`,
                    WebkitTextFillColor: theme.palette.text.primary,
                    transition: 'background-color 5000s ease-in-out 0s',
                  },
                },
              },
            }}
          />
    );
}