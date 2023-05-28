const download = require("image-downloader");
const { StatusCodes } = require("http-status-codes");
const fs = require("fs");
const pathFinder = require("path");

const uploadPhotos = async (req, res) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  await download.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });
  res.status(StatusCodes.CREATED).json(newName);
};
const uploadPhotosByDevice = async (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    const filename = pathFinder.basename(newPath);
    uploadedFiles.push(filename);
  }
  res.status(StatusCodes.CREATED).json(uploadedFiles);
};

module.exports = { uploadPhotos, uploadPhotosByDevice };

// const deletePhotos = (req, res) => {
//   const { link } = req.body;

//   const imagePath = path.join(__dirname, "/upload/", link);

//   if (fs.existsSync(imagePath)) {
//     fs.unlinkSync(imagePath);
//     res.status(200).json({ message: "Image deleted successfully" });
//   } else {
//     res.status(404).json({ message: "Image not found" });
//   }
// };
