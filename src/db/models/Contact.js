import { Schema, model } from "mongoose";
import { contactTypeList } from '../../constants/contacts.js';
import { handleSaveError, setUpdateOptions } from './hooks.js';

const contactSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,

	},
	email: {
		type: String,
		required: false,

	},
	isFavourite: {
		type: Boolean,
		default: false,
	},
	contactType: {
		type: String,
		enum: contactTypeList,
		required: true,
		default: 'personal',
	}
	// createdAt: {
	// 	type: String,
	// 	required: true,
	// },
	// updatedAt: {
	// 	type: String,
	// 	required: true,
	// }

}, { versionKey: false, timestamps: true });

contactSchema.post('save', handleSaveError);

contactSchema.pre('findOneAndUpdate', setUpdateOptions);

contactSchema.post('findOneAndUpdate', handleSaveError);

const ContactModel = model('contact', contactSchema);

export const sortFields = ['name', 'phoneNumber', 'email', 'isFavourite', 'contactType', 'createdAt', 'updatedAt'];

export default ContactModel;