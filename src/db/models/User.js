import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateOptions } from './hooks.js';
// import { required } from "joi";
import { emailRegexp } from '../../constants/users.js'

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		match: emailRegexp,
		required: true,
	},
	password: {
		type: String,
		required: true,
	}

}, { versionKey: false, timestamps: true });

userSchema.post('save', handleSaveError);

userSchema.pre('findOneAndUpdate', setUpdateOptions);

userSchema.post('findOneAndUpdate', handleSaveError);

const UserCollection = model('user', userSchema);

export default UserCollection;