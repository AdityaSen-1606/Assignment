import React from "react";
import { Button, Typography, Box, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };

  return (
    <Box className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Container maxWidth="md">
        <Paper elevation={3} className="p-6 bg-opacity-75 bg-gray-800">
          <Typography variant="h2" className="mb-6 font-bold text-center">
            Submission: Aditya
          </Typography>
          <br/>
          <Typography variant="h5" className="mb-6 text-center">
            Submitted by me, not copied from anywhere. Brief
            about the application:
          </Typography>
          <br/>
          <Typography variant="body1" className="mb-2">
            - I have made a MERN application implementing all tasks.
          </Typography>
          <Typography variant="body1" className="mb-2">
            - Login & Register pages are included.
          </Typography>
          <Typography variant="body1" className="mb-2">
            - The server is built with Node.js using the Express library.
          </Typography>
          <Typography variant="body1" className="mb-2">
            - CORS is used to allow the server to be accessed from different IP
            addresses.
          </Typography>
          <Typography variant="body1" className="mb-2">
            - The database used is MongoDB.
          </Typography>
          <Typography variant="body1" className="mb-2">
            - JSON Web Token (JWT) is used to display the user's name.
          </Typography>
          <Typography variant="body1" className="mb-6">
            - The workspace displays the name and email of all users.
          </Typography>
          <br/>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleGetStarted}
              className="text-white"
            >
              Get Started
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Home;
