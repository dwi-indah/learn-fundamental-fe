const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const getFromStorage = (key) => {
    const storedData = localStorage.getItem(key);

    if(storedData === null) {
        return null
    };

    try {
        return JSON.parse(storedData);
    } catch(error) {
        return null;
    }
}

export { saveToStorage, getFromStorage };