
// import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";
import { createFakeContact } from '../utils/createFakeContact.js';
// import { PATH_DB } from '../constants/contacts.js'
import getAllContacts from './getAllContacts.js';
import updateContacts from './updateContacts.js';
// import fs from 'node:fs';

const generateContacts = async (number) => {

	const contactList = await getAllContacts();
	const newContactList = Array(number).fill(0).map(createFakeContact);
	contactList.push(...newContactList);
	await updateContacts(contactList);
};

generateContacts(5);


// fs.readFile(PATH_DB, (error, data) => {
// 	console.log("error", error);
// 	console.log("data", data);
// })