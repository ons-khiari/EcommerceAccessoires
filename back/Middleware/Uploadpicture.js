const multer = require('multer');
const path = require('path');
//la distination du fichier (répertoire) et généer un nom de fichier unique
const storage = multer.diskStorage({
    //la distination de stockage d'image
    destination: (req, file, cb) => {
        cb(null, "Storage");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, 
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpg|jpeg|png|svg|pdf|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimetype && extname) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    }
});

module.exports = upload;
