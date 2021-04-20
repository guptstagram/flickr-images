const getLocalStorage = () => JSON.parse(localStorage.getItem("flickrSuggest")) === null ? [] : JSON.parse(localStorage.getItem("flickrSuggest"));
const setLocalStorage = (str) => localStorage.setItem("flickrSuggest", JSON.stringify(str));
const clearLocalStorage = () => localStorage.removeItem("flickrSuggest");

const localStorageReducer = (state = getLocalStorage(), action) => {
    switch (action.type) {
        case "LOCAL_STORAGE_ADD": {
            const ls = [...new Set([...state, action.item])];
            if (ls.length>5) ls.shift();
            setLocalStorage(ls);
            return ls;
        }
        case "LOCAL_STORAGE_CLEAR": {
            clearLocalStorage();
            return [];
        }
        default:
            return state;
    }
}

export default localStorageReducer;