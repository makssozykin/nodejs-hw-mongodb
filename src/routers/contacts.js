import { Router } from 'express';
import { getAllContacts, getContactById } from '../controllers/contacts.js';

export const contactRouter = Router();

contactRouter.get('/', getAllContacts);

contactRouter.get('/:contactId', getContactById);
