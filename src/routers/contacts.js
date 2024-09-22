import { Router } from "express";
import * as ContactControllers from '../controllers/contacts.js';
import isValidId from '../middlewares/isValidId.js';
import authenticate from "../middlewares/authenticate.js";
import ctrlWrapper from "../utils/ctrlWrapper.js";
import validateBody from "../utils/validateBody.js";
import { contactAddSchema, contactPatchSchema } from '../validation/contacts.js'

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', ctrlWrapper(ContactControllers.getAllContactsController));

contactsRouter.get('/:id', isValidId, ctrlWrapper(ContactControllers.getContactByIdController));

contactsRouter.post('/', validateBody(contactAddSchema), ctrlWrapper(ContactControllers.addContactController));

contactsRouter.put('/:id', isValidId, validateBody(contactAddSchema), ctrlWrapper(ContactControllers.upsertContactController));

contactsRouter.patch("/:id", isValidId, validateBody(contactPatchSchema), ctrlWrapper(ContactControllers.patchContactController));

contactsRouter.delete("/:id", isValidId, ctrlWrapper(ContactControllers.deleteContactController));


export default contactsRouter;