export function editRequest(deliveryman){
    return {
        type: '@deliveryman/EDIT_REQUEST',
        payload: { deliveryman }
    }
}

export function editSuccess(deliveryman){
    return {
        type: '@deliveryman/EDIT_SUCCESS',
        payload: { deliveryman }
    }
}

export function createRequest(deliveryman){
    return {
        type: '@deliveryman/CREATE_REQUEST',
        payload: { deliveryman }
    }
}