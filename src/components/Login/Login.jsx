import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({handleUserLogin}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async()=> {
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', {
                email,
                password
            })
            handleUserLogin(response.data.payload)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Container component="main" maxWidth="sm" sx={{display: 'flex', marginTop: '250px', position: "relative"}}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Sign-in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={e=> setEmail(e.target.value)}
                value={email}
              />
            </Grid>
            <Grid>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={e=> setPassword(e.target.value)}
                value={password}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            onClick={handleLogin}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
