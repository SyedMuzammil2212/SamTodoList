const express = require("express");
const {
  loginUser,
  registerUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const upload = require("../middleware/multerMiddleware");

const router = express.Router();

router.post("/register", upload.single("picture"), registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;
