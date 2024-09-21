import getAllContacts from './getAllContacts.js';
import updateContacts from './updateContacts.js';

const removeLastContact = async () => {
	const contactList = await getAllContacts();
	contactList.pop();
	await updateContacts(contactList);
};

removeLastContact();