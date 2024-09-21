import ContactModel from '../db/models/Contact.js'

export const getAllContacts = async () => {

	const contacts = await ContactModel.find();
	return contacts;
};

export const getContactById = async (id) => {

	const contacts = await ContactModel.findById(id);
	return contacts;
};