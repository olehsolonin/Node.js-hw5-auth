import ContactModel from '../db/models/Contact.js'

export const getAllContacts = () => ContactModel.find();

export const getContactById = (id) => ContactModel.findById(id);

export const createContact = payload => ContactModel.create(payload);

export const updateContact = async (filter, data, options = {}) => {
	const rawResult = await ContactModel.findOneAndUpdate(filter, data, {
		new: true,
		includeResultMetadata: true,
		...options,
	});

	if (!rawResult || !rawResult.value) return null;

	return {
		data: rawResult.value,
		isNew: Boolean(rawResult?.lastErrorObject?.upserted),
	};
};

export const deleteContact = filter => ContactModel.findOneAndDelete(filter);