import createHttpError from 'http-errors';
const parseFavourite = (isFavourite) => {
  const isBoolean = isFavourite === 'true' || isFavourite === 'false';
  if (!isBoolean) return;
  return isFavourite === 'true' ? true : false;
};

const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isContactType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);
  if (isContactType(contactType)) return contactType;
};

export const parseFilterParams = (filter) => {
  const { type, isFavourite } = filter;
  const parsedContactType = parseContactType(type);
  const parsedFavourite = parseFavourite(isFavourite);

  if (!parsedContactType) {
    throw new createHttpError(400, `Invalid contactType filter: ${type}`);
  } else if (!parsedFavourite) {
    throw new createHttpError(
      400,
      `Invalid isFavourite filter: ${isFavourite}`,
    );
  }

  return {
    type: parsedContactType,
    isFavourite: parsedFavourite,
  };
};
