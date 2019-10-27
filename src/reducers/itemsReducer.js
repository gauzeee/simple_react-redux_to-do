const itemsReducer = (state={
    items: [],
    inputVal: ''
}, action) => {
    switch (action.type) {
        case "GET_ITEMS_REQUEST":
            return {items: action.payload, inputVal: ''};
        case "GET_ITEMS_SUCCESS":
            return {items: action.payload, inputVal: ''};
        case "GET_ITEMS_ERROR":
            return new Error(action.payload);
        case "PATCH_ITEM_REQUEST":
            return {items: [...state.items], inputVal: ''};
        case "PATCH_ITEM_SUCCESS":
            let newItems = state.items.map(item => {
                if(item && item.id === action.payload.id) {
                    return {
                        text: item.text,
                        id: item.id,
                        completed: action.payload.completed
                    }
                } else {
                    if(item) return item;
                }
            }).sort((a, b) => {
                if(b.completed > a.completed) {
                    return -1;
                }
            });
            return {items: newItems, inputVal: ''};
        case "ADD_ITEM_REQUEST":
            return  state;
        case "ADD_ITEM_SUCCESS":
            return  {items: [...state.items, {text: action.payload.text, completed: false, id: action.payload.id}], inputVal: ''};
        case "DELETE_ITEM_SUCCESS":
            let afterDeleteArray = state.items.map(item=>{
                if(item && item.id !== action.payload) {
                    return item
                }
            });
            return {items: afterDeleteArray, inputVal: state.inputVal};
        case "INPUT_UPDATED":
            return {items: [...state.items], inputVal: action.payload};
        default:
            return state;
    }
};

export default itemsReducer;