import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const Verify: React.FC = () => {
    return (
        <Grid 
            container 
            spacing={2} 
            justifyContent="center" 
            alignItems="center" 
            style={{ height: '100vh', textAlign: 'center' }}
        >
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Verify Your Email
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Please check your email and click on the verification link to complete your sign-up process.
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    If you didn't receive the email, check your spam folder or click the button below to resend the verification email.
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ marginTop: '16px' }}
                >
                    Resend Email
                </Button>
            </Grid>
        </Grid>
    );
};

export default Verify;
