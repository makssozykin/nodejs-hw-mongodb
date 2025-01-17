import { Router } from 'express';
import { getAllContacts } from '../controllers/contacts.js';

export const router = Router();

router.get('/', getAllContacts);
