import *  as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = async () => {
	const data = await fs.readFile(PATH_DB, 'utf-8');
	return JSON.parse(data);

};

export default getAllContacts;
