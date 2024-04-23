const LS_KEY = "app:tokenhistory";

export const getLSTokenData = (): string[] => {
    const data = localStorage.getItem(LS_KEY);
    return data ? JSON.parse(data) : [];
};

export const appendLSTokenData = (item: string) => {
    let data = getLSTokenData();
    if (!data.includes(item)) {
        // push to start of array
        data.unshift(item);
        localStorage.setItem(LS_KEY, JSON.stringify(data));
    }
};
