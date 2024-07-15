import React, { ChangeEvent, useState } from "react";
import { Grid, TextField, Button, Typography, Divider } from "@mui/material";
import { RegisterRequest } from "../../types/RegisterRequest";
import { register } from "../../core/requests/register";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
    const [userInfo, setUserInfo] = useState<RegisterRequest>({
        name: "",
        email: "",
        password: ""
    });
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name === "confirmPassword") {
            if (userInfo.password !== value) {
                setErrorMessage("Passwords do not match")
            }
            setConfirmPassword(value);
        } else {
            setUserInfo({
                ...userInfo,
                [name]: value
            });
        }
    };

    const handleSignUpClick = async () => {
        try {
            if (userInfo.password === confirmPassword) {
                await register(userInfo);
            } else {
                setErrorMessage("User already Exists");
            }
        } catch (err) { 
            console.error(err);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Sign Up
                </Typography>
                <TextField
                    fullWidth
                    required
                    name="name"
                    label="Full name"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    required
                    name="email"
                    label="Email"
                    type="email"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    required
                    name="password"
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    required
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    error={userInfo.password !== confirmPassword}
                    helperText={userInfo.password !== confirmPassword && errorMessage}
                    onChange={handleChange}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '16px' }}
                    disabled={!userInfo.name || !userInfo.email || !userInfo.password || userInfo.password !== confirmPassword}
                    onClick={handleSignUpClick}
                >
                    Sign Up
                </Button>
                <Divider style={{ margin: '24px 0' }}>OR</Divider>
                <Button
                    component={Link}
                    to="/signin"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: '16px', border: 'none' }}
                >
                    Sign In
                </Button>
            </Grid>
        </Grid>
    );
};

export default SignUp;
