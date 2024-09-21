// import *  as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
// import { PATH_DB} from '../constans/contacts.js';
import getAllContacts from './getAllContacts.js';

import updateContacts from './updateContacts.js';

const addOneContact = async () => {
	const contactList = await getAllContacts();
	const newContactList = createFakeContact();
	contactList.push(newContactList);
	// await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
	await updateContacts(contactList);
};

addOneContact();