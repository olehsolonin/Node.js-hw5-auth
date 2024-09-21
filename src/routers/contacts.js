import { Router } from "express";
import * as ContactControllers from '../controllers/contacts.js'
import ctrlWrapper from "../utils/ctrlWrapper.js";

const contactsRouter = Router();


contactsRouter.get('/', ctrlWrapper(ContactControllers.getAllContactsController));

contactsRouter.get('/:id', ctrlWrapper(ContactControllers.getContactByIdController));

contactsRouter.post('/', ctrlWrapper(ContactControllers.addContactController));

contactsRouter.put('/:id', ctrlWrapper(ContactControllers.upsertContactController));

contactsRouter.patch("/:id", ctrlWrapper(ContactControllers.patchContactController));

contactsRouter.delete("/:id", ctrlWrapper(ContactControllers.deleteContactController));


export default contactsRouter;