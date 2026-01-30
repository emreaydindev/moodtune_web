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
    value,
    setValue
}: {
    theme: Theme,
    name: string,
    type: string,
    label: string,
    value: string,
    setValue: (val: string) => void
}) {
    return (
        <TextField
            fullWidth
            name={name}
            type={type}
            label={label}
            value={value}
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setValue(event.target.value);
            }}
        />
    );
}

export function SigningPasswordInput({
    theme,
    name = "password",
    label = "Password",
    value,
    setValue
}: {
    theme: Theme,
    name?: string,
    label?: string,
    value: string,
    setValue: (val: string) => void
}) {

    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <TextField
            fullWidth
            name={name}
            type={showPassword ? "text" : "password"}
            label={label}
            value={value}
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setValue(event.target.value);
            }}
          />
    );
}