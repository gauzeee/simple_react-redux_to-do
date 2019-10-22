export const addItem = (obj) => ({type: "ADD_ITEM", payload: obj});
export const hideItems = () => ({type: "HIDE_ITEMS"});
export const updateInput = (text) => ({type: "INPUT_UPDATED", payload: text});
export const changeCompleted = (id) => ({type: "CHANGE_COMPLETED", payload: id});
export const getItems = (items) => ({type: "GET_ITEMS", payload: items});