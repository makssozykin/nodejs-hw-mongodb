import { ContactsCollection } from '../db/models/contact.js';

export const getContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};
