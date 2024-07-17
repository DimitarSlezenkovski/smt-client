import React, { ChangeEvent, useState } from "react";
import { Grid, TextField, Button, Typography, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LoginRequest } from "../../types/LoginRequest";
import { login } from "../../core/requests/login";
import { getMyAccount } from "../../core/requests/getMyAccount";

const SignIn: React.FC = () => {
    const [loginUser, setLoginUser] = useState<LoginRequest>({
        email: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState<string>("");

    const navigate = useNavigate()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setLoginUser({
            ...loginUser,
            [name]: value
        });
    };

    const handleSignIn = async () => {
        try {
            if (loginUser.email !== '' || loginUser.password !== '') {
                await login(loginUser).then(async res => {
                    if (res?.data?.authToken) {
                        await getMyAccount()
                        navigate('/')
                    }
                });
            } else {
                setErrorMessage("You must enter your email and password");
            }
        } catch (err) { 
            console.error(err);
        }
    }

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Sign In
                </Typography>
                <TextField
                    fullWidth
                    onChange={handleChange}
                    name="email"
                    label="Email"
                    type="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    onChange={handleChange}
                    name="password"
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    error={errorMessage !== ""}
                    helperText={errorMessage !== "" && errorMessage}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSignIn}
                    style={{ marginTop: '16px' }}
                >
                    Sign In
                </Button>
                <Divider style={{ margin: '24px 0' }}>OR</Divider>
                <Button
                    component={Link}
                    to="/signup"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: '16px', border: 'none' }}
                >
                    Sign Up
                </Button>
            </Grid>
        </Grid>
    );
};

export default SignIn;
