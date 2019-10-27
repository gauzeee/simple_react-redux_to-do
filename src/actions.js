import GetService from './helpers/getService';

export const addItem = (obj) => {
    return dispatch => {
        dispatch({
            type: "ADD_ITEM_REQUEST",
            payload: obj
        });
        GetService.postItem(obj).then(()=> {
            dispatch({
                type: "ADD_ITEM_SUCCESS",
                payload: obj
            })
        }).catch(err=>{
            dispatch({
                type: "ADD_ITEM_ERROR",
                payload: err
            })
        })
    }
};
export const removeItem = (id) => {
    return dispatch => {
        dispatch({
            type: "DELETE_ITEM_REQUEST",
            payload: id
        });

        GetService.removeItem(id).then(data=>{
            dispatch({
                type: "DELETE_ITEM_SUCCESS",
                payload: id
            })
        })
    }
};
export const updateInput = (text) => ({type: "INPUT_UPDATED", payload: text});
export const getItems = () => {
    return dispatch => {
        dispatch({
            type: "GET_ITEMS_REQUEST"
        });

        GetService.getAllItems('items').then(data => {
            dispatch({
                type: "GET_ITEMS_SUCCESS",
                payload: data
            })
        }).catch(err=>{
            dispatch({
                type: "GET_ITEMS_ERROR",
                payload: err
            })
        })

    }
};
export const patchItem = (item) => {
    return dispatch => {
        dispatch({
            type: "PATCH_ITEM_REQUEST",
            payload: item
        });

        GetService.patchItem(item).then(data=>{
            dispatch({
                type: "PATCH_ITEM_SUCCESS",
                payload: item
            })
        })
    }
}