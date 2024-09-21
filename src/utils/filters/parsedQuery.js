import { contactTypeList } from "../../constants/contacts.js";

export const parseContactType = type => {
	const isString = typeof type === 'string';
	if (!isString) return;
	const isType = (type) => contactTypeList.includes(type);
	if (isType(type)) return type;
};

export const parseIsFavourite = value => {
	// Если значение уже булево (true/false), возвращаем его
	if (typeof value === 'boolean') {
		return value;
	}

	// Преобразуем строковые значения 'true' и 'false' в булевы
	if (value === 'true') return true;
	if (value === 'false') return false;

	// Если значение не распознано, возвращаем undefined
	return undefined;
};

