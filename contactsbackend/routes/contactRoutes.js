const express = require("express");
const router = express.Router();

const {
  getContacts,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const upload = require("../middleware/multerMiddleware");

router.use(validateToken);

router
  .route("/")
  .get(getContacts)
  .post(upload.single("picture"), createContact);

router
  .route("/:id")
  .get(getSingleContact)
  .put(upload.single("picture"), updateContact)
  .delete(deleteContact);

module.exports = router;
