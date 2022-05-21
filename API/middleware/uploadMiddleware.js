// uploadMiddleware.js

const multer = require('multer');

const crypto = require("crypto");
const storageOptions = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, __dirname + './../uploads/')
  },
  filename: function(req, file, cb) {
      crypto.pseudoRandomBytes(16, function(err, raw) {
          cb(null, raw.toString('hex') + Date.now() + '.' + file.originalname);
      });
  },
  limits: {
    fileSize: 4 * 1024 * 1024,
  }
});

const upload = multer({ storage: storageOptions });

module.exports = upload