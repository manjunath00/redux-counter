export function increment() {
    return {
        type: 'INCREMENT',
        payload: 1
    }
}

export function decrement() {
    return {
        type: 'DECREMENT',
        payload: -1
    }
}