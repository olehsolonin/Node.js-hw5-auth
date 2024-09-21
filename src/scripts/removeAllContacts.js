import updateContacts from './updateContacts.js';

const removeAllContacts = async () => {
	await updateContacts([]);
};

removeAllContacts();