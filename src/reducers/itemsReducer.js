
const itemsReducer = (state={
    items: []
}, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log(state);
            const newState = {items: [...state.items, {text: "test"}]};
            console.log(state.items);
            return newState;
        case "HIDE_ITEMS":
            console.log("Hide completed");
            console.log(state);
            return state;
        default:
            return state;
    }
};

export default itemsReducer;