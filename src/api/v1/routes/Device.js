// -----------------------Third-party libraries and modules-----------------------
const express = require("express");

// -----------------------Custom libraries and modules-----------------------
const {
    CreateNewDevice,
    GetAllDevices,
    UpdateDevice,
    DeleteDevice,
    GetDeviceById
} = require("../controller");

// -----------Initialize the router-----------
const router = express.Router();

// -----------Routes-----------
// Create a new device
router.post("/create-new-device", CreateNewDevice);

// Get All devices
router.get("/all" , GetAllDevices);

// Get device by id
router.get("/one/:deviceId" , GetDeviceById);

// Update device
router.put("/update/:deviceId" , UpdateDevice);

// Delete device
router.delete("/delete/:deviceId" , DeleteDevice);



module.exports = router;