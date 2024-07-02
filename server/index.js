const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

//Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//connection to database
connectDB();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/auth',authRoutes);


app.listen(port,()=>{
    console.log("Server is running", port);
})