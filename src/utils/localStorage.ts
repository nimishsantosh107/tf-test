export const addDelimiter = (item: string) => item + "##";

export const sanitizeDelimiter = (item: string) => item.replace("##", "");
