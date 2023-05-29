const express = require("express");
const router = express.Router();
const {
  uploadPhotos,
  uploadPhotosByDevice,
  createPlaces,
} = require("../controllers/user");
const multer = require("multer");

const photosMiddleware = multer({
  dest: "../backend/controllers/uploads/",
});

router.post("/upload-by-link", uploadPhotos);
router.post(
  "/upload-by-device",
  photosMiddleware.array("photos", 100),
  uploadPhotosByDevice
);
router.post("/create", createPlaces);

module.exports = router;

// router.post("/delete-by-link", deletePhotos);
