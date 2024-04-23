export const LS_DELIMITER = "##";

export const addDelimiter = (item: string) => item + LS_DELIMITER;

export const sanitizeDelimiter = (item: string) => item.replace(LS_DELIMITER, "");
