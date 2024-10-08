const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const fs = require("fs");
const path = require("path");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

const createContact = async (req, res) => {
  console.log("The Request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All details must be filled");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    picture: req.file.filename || null,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
};

const getSingleContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User dont have permission to update other user");
  }
  if ((req.file && req.file.filename) || req.body.picture == null) {
    const oldFilePath = `uploads/${contact.picture}`;

    fs.unlink(oldFilePath, (err) => {
      if (err) {
        console.error("Error deleting the old file:", err);
      } else {
        console.log("Old file deleted successfully", oldFilePath);
      }
    });
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      picture: req.file
        ? req.file.filename
        : req.body.picture
        ? req.body.picture
        : null,
      user_id: req.user.id,
    },
    { new: true }
  );
  res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User dont have permission to update other user");
  }
  await Contact.deleteOne({ _id: req.params.id });

  res.status(200).json({ message: "Contact deleted successfully", contact });
});

module.exports = {
  getContacts,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
