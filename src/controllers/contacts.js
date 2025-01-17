import { getContacts } from '../services/contacts.js';

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await getContacts();
    res.status(200).json({
      status: '200',
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};
