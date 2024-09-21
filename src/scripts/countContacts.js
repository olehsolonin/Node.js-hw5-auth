import getAllContacts from './getAllContacts.js';

const countContacts = async () => {
	const contacts = await getAllContacts();
	return contacts.length;
};

console.log(await countContacts());