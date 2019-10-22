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
            return  {items: [...state.items, {text: action.payload.text, completed: false, id: action.payload.id}], inputVal: ''};
        case "HIDE_ITEMS":
            return {items: action.payload, inputVal: state.inputVal};
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