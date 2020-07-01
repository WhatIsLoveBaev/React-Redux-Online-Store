import { SEARCH_INPUT } from '../../Actions/HeaderActions'

const initial = {
    searchInput: ''
}

export default function headerReducer(state = initial, action) {
    switch (action.type) {

        case SEARCH_INPUT: return {
            searchInput: action.payload
        }

        default:
            return state
    }
}