export const SEARCH_INPUT = 'SEARCH_INPUT'

export function search(payload) {
    return {
        type: SEARCH_INPUT,
        payload
    }
}
