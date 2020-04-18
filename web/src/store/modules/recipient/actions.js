export function editRequest(recipient){
    return {
        type: '@recipient/EDIT_REQUEST',
        payload: { recipient }
    }
}

export function editSuccess(recipient){
    return {
        type: '@recipient/EDIT_SUCCESS',
        payload: { recipient }
    }
}

export function createRequest(recipient){
    return {
        type: '@recipient/CREATE_REQUEST',
        payload: { recipient }
    }
}