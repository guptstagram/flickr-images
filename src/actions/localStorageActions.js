export const localStorageAction = (searchTerm) => ({
    type: "LOCAL_STORAGE_ADD",
    item:searchTerm,
})

export const localStorageClearAction = () => ({
    type: "LOCAL_STORAGE_CLEAR",
})