// -------------------- Third-party components and modules --------------------
const express = require("express");
const cors = require("cors");
require("dotenv/config");

// -------------------- Custom libraries and modules --------------------
const config = require("./config");
const {ConnectDatabase} = require("./api/v1/libraries");
const { UserRoutes , DeviceRoutes } = require("./api/v1/routes");

// -------------------- Third-party components and modules --------------------
const app = express();
const PORT  = config.PORT || 3308;

// -------------------- Allow CORS --------------------
const allowedOrigins = ['http://localhost:5173', 'https://dev--xpac-dashboard.netlify.app'];
const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

// Handle OPTIONS requests globally
app.options('*', cors(corsOptions));

// -----------Accept json-----------
app.use(express.json());

// -------------------- Base route --------------------
app.get("/" , (req,res) => {
    res.status(200).json({ status: true , message: `Welcome to the Server!` });
});

// -----------User route-----------
app.use("/api/users", UserRoutes);

// ----------Device routes ----------
app.use("/api/devices" , DeviceRoutes);

// -------------------- Error route --------------------
app.use((req , res) => {
    res.status(404).json({ status:false , message: `Not Found!`});
});

// -------------------- Start Server --------------------
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    ConnectDatabase().then(() => console.log("Connected to Database!")).catch((err) => console.log(err));
});
