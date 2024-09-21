import ContactModel from '../db/models/Contact.js';
import calculatePaginationData from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getContacts = async ({ perPage, page, sortBy = 'name', sortOrder = SORT_ORDER[0], filter = {} }) => {
	const skip = (page - 1) * perPage;
	const contacts = await ContactModel.find(filter).skip(skip).limit(perPage).sort({ [sortBy]: sortOrder });
	const count = await ContactModel.find(filter).countDocuments();
	// console.log(filter);

	const paginationData = calculatePaginationData({ count, perPage, page });

	return {
		page,
		perPage,
		contacts,
		totalItems: count,
		...paginationData,
	};
};

export const getContactById = (id) => ContactModel.findById(id);

export const createContact = payload => ContactModel.create(payload);

export const updateContact = async (filter, data, options = {}) => {
	const rawResult = await ContactModel.findOneAndUpdate(filter, data, {
		new: true,
		runValidators: true,
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