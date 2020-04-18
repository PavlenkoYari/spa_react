import { ACTION_SET_USER_LIST } from '../typeForStore'
async function prom() {
    return new Promise( resolve => setTimeout(() => {{
        resolve();
    }}, 1000))
}
export const setUserList = ( newUserList ) => async dispatch => {
    await prom();
    dispatch({
        type: ACTION_SET_USER_LIST,
        payload: newUserList
    })
};


