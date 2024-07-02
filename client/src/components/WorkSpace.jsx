import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { getAll } from "../api";

const WorkSpace = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAll();
      const data = response["data"];
      setUsers(data);
    } catch (err) {
      console.error("Error in fetching users", err);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      {users.map((user, index) => (
        <Card key={index} sx={{ marginBottom: 2, width: "80%" }}>
          <CardContent>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default WorkSpace;
