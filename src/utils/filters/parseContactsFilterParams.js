// import { contactTypeList } from "../../constants/contacts.js";
import { parseContactType, parseIsFavourite } from "./parsedQuery.js";

export const parseTypeFilterParams = ({ type }) => {
	const isType = parseContactType(type);
	// console.log(isType);
	return isType;
};

export const parseIsFavouriteParams = (value) => {
	const isFavourite = parseIsFavourite(value);
	// console.log(isFavourite);
	return isFavourite;
};

export const parseContactsFilterParams = (query = {}) => {
	const { contactType, isFavourite } = query;

	const parsedType = parseContactType(contactType);
	const parsedIsFavourite = parseIsFavourite(isFavourite);

	const filter = {};

	if (parsedType) filter.contactType = parsedType;
	if (parsedIsFavourite !== undefined) {
		filter.isFavourite = parsedIsFavourite;
	}

	return filter;
};

