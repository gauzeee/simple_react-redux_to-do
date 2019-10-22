import GetService from "../helpers/getService";

const postServ = new GetService();

const itemsReducer = (state={
    items: [],
    inputVal: ''
}, action) => {
    switch (action.type) {
        case "GET_ITEMS":
            return {items: action.payload, inputVal: ''};
        case "INPUT_UPDATED":
            return {items: [...state.items], inputVal: action.payload};
        case "ADD_ITEM":
            const addedState = {items: [...state.items, {text: action.payload.text, completed: false, id: action.payload.id}], inputVal: ''};
            postServ.postItems(addedState.items);
            return addedState;
        case "HIDE_ITEMS":
            const hidedState = {items: state.items.filter( item => {
                    if(item && !item.completed) return item;
                }), inputVal: state.inputVal};
            return hidedState;
        case "CHANGE_COMPLETED":
            const newItemsArray = state.items.map(item => {
                if(item) {
                    return {
                        text: item.text,
                        completed: action.payload === item.id ? !item.completed : item.completed,
                        id: item.id
                    }
                }
            }).sort((a,b) => {
                if(b.completed > a.completed) {
                    return -1;
                }
            });
            return {items: newItemsArray, inputVal: state.inputVal};
        default:
            return state;
    }
};

export default itemsReducer;