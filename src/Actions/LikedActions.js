export const ADD_TO_LIKED = 'ADD_TO_LIKED'
export const DELETE_LIKE = 'DELETE_LIKE'

export function addLike(payload) {
    return {
        type: ADD_TO_LIKED,
        payload
    }
}

export function deleteLike(payload) {
    return {
        type: DELETE_LIKE,
        payload
    }
}
