import { ContactsCollection } from '../db/models/contact.js';

export const getContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactId = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};
