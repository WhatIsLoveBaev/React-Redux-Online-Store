import { ADD_TO_LIKED, DELETE_LIKE } from '../../Actions/LikedActions'

function loadFromLocal() {
    try {
        const getLocal = localStorage.getItem('StoreLiked')
        if (getLocal) {
            return JSON.parse(getLocal)
        }
    } catch(e) {
        console.log(e)
    }
}
const localState = loadFromLocal()

export default function liked(state = localState, action) {
    switch (action.type) {
        
        case ADD_TO_LIKED :
            const repeat = state.findIndex(elem => elem.id === action.payload.id)
            if (repeat + 1) return state
            else return [...state, action.payload]
            
        case DELETE_LIKE :
            const idx = state.findIndex(elem => elem.id === action.payload)
            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ]

        default : 
            return !localState ? state = [] : state
    }
    
}