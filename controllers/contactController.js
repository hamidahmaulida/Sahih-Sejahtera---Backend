import { nanoid } from "nanoid";
import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const id = nanoid(5);
    await Contact.create({ ...req.body, id: id });
    res.status(201).json({
      msg: "Contact created",
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findOne({ where: { id: id } });
    if (!contact) {
      return res.status(404).json({ error: "Contact not found on DB" });
    }
    const formattedJson = JSON.stringify(contact, null, 2);
    // Send data in the desired JSON format
    const htmlResponse = `
    <html>
    <head>
      <style>
        body {
          background-color: black;
          color: white;
        }
      </style>
    </head>
    <body>
      <pre>${formattedJson}</pre>
    </body>
  </html>`;

    res.status(200).send(htmlResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contact = await Contact.findAll();
    // Convert data to the desired format
    const formattedContacts = contact.map((contact) => {
      return {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        message: contact.message,
      };
    });

    // Convert data to the desired JSON format
    const formattedJson = JSON.stringify(formattedContacts, null, 2);

    // Send data in the desired JSON format
    const htmlResponse = `
    <html>
    <head>
      <style>
        body {
          background-color: black;
          color: white;
        }
      </style>
    </head>
    <body>
      <pre>${formattedJson}</pre>
    </body>
  </html>`;

    res.status(200).send(htmlResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, message } = req.body;
    const contact = await Contact.findOne({ where: { id: id } });

    if (!contact) {
      return res.status(404).json({ error: "Contact not found on DB" });
    }

    // update data
    contact.name = name;
    contact.email = email;
    contact.message = message;

    // save data
    await contact.save();
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findOne({ where: { id: id } });

    if (!contact) {
      return res.status(404).json({ error: "Contact not found on DB" });
    }

    // delete data
    await contact.destroy();
    res.status(200).json({ message: "Contact berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
