export function editRequest(delivery){
    return {
        type: '@delivery/EDIT_REQUEST',
        payload: { delivery }
    }
}

export function editSuccess(delivery){
    return {
        type: '@delivery/EDIT_SUCCESS',
        payload: { delivery }
    }
}

export function createRequest(delivery){
    return {
        type: '@delivery/CREATE_REQUEST',
        payload: { delivery }
    }
}