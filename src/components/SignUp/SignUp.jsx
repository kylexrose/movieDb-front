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
import { isAlpha } from "validator";
import axios from "axios";

export default function SignUp() {
  
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [lastNameError, setLastNameError] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [usernameError, setUsernameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            //validate
            if(!isAlpha(firstName)){
                setFirstNameError(true)
            }else{
                setFirstNameError(false)
            }
            if(!isAlpha(lastName)){
                setLastNameError(true)
            }else{
                setLastNameError(false)
            }
            const response = await axios.post('http://localhost:3000/api/users/create-user', {
              firstName,
              lastName,
              email,
              username,
              password
            })
            console.log(response.data)
            //call to backend
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Container component="main" maxWidth="sm" sx={{display: 'flex', marginTop: '250px', position: "relative"}}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Create Account
        </Typography>
        <Box component="form" noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid sm={6}>
              <TextField
                required
                fullWidth
                error={firstNameError}
                helperText={firstNameError ? "First name must be alphabetical" : ''}
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Grid>
            <Grid sm={6}>
              <TextField
                required
                fullWidth
                error={lastNameError}
                helperText={lastNameError ? "Last name must be alphabetical" : ""}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={e=> setLastName(e.target.value)}
                value={lastName}
              />
            </Grid>
            <Grid>
              <TextField
                required
                fullWidth
                error={emailError}
                helperText={emailError ? "Email must be valid" : ''}
                id="email"
                label="Email Address"
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
                error={usernameError}
                helperText={usernameError ? "Username must be alphanumeric" :''}
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={e=> setUsername(e.target.value)}
                value={username}
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
            <Grid>
              <TextField
                required
                fullWidth
                error ={passwordError}
                helperText={passwordError ? "Passwords must match" : ''}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                onChange={e=>setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            onClick={handleSubmit}
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
