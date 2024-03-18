import { booksData } from "../Constants/BooksData";

export const getTrimmedText = ({ limit, text }) => {
  const tempText = text?.replace(/[“”]+/g, "");
  let length = tempText?.length;
  let min = Math.min(length, limit);
  return tempText?.slice(0, min) + (limit < length ? "..." : "");
};

export const getValueFromBooksData = ({ name, attribute }) => {
  const book = booksData?.filter(
    (v) => v.name?.toLowerCase() === name?.toLowerCase()
  );
  return book[0]?.[attribute];
};

export const filterData = ({ originalData, keyName="", dataToFind }) => {
  const filteredResult = originalData?.filter((item) => {
    if (keyName) {
      return item?.[keyName]?.toLowerCase().includes(dataToFind?.toLowerCase());
    }
    return item?.toLowerCase().includes(dataToFind?.toLowerCase());
  });
  return filteredResult;
};
