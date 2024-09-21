import * as contactServices from '../services/contacts.js';
import createHttpError from 'http-errors';


export const getAllContactsController = async (req, res, next) => {
	try {
		const data = await contactServices.getAllContacts();
		res.json({
			status: 200,
			message: 'Successfully found contacts!',
			data,
		});
	} catch (error) {
		next(error);
	}

};

export const getContactByIdController = async (req, res, next) => {

	const { id } = req.params;
	const data = await contactServices.getContactById(id);
	if (!data) {
		throw createHttpError(404, `Contact with id=${id} not found`);
	};

	res.json({
		status: 200,
		message: `Successfully found contact with id ${id}!`,
		data,
	});

};

export const addContactController = async (req, res) => {
	const data = await contactServices.createContact(req.body);
	console.log(data);

	res.status(201).json({
		status: 201,
		message: 'Contact add successfully',
		data
	});
};

export const upsertContactController = async (req, res) => {
	const { id } = req.params;
	const { isNew, data } = await contactServices.updateContact({ _id: id }, req.body, { upsert: true });

	const status = isNew ? 201 : 200;

	res.status(status).json({
		status,
		message: 'Contact upsert successfully',
		data,
	})
};

export const patchContactController = async (req, res) => {
	const { id } = req.params;
	const result = await contactServices.updateContact({ _id: id }, req.body);
	console.log(result);

	if (!result) {
		throw createHttpError(404, `Contact with id=${id} not found salam brat`);
	}

	res.status(200).json({
		status: 200,
		message: "Contact patched successfully",
		data: result.data,
	});
};

export const deleteContactController = async (req, res) => {
	const { id } = req.params;
	const data = await contactServices.deleteContact({ _id: id });

	if (!data) {
		throw createHttpError(404, `Contact with id=${id} not found`);
	}

	res.status(204).send();
};
