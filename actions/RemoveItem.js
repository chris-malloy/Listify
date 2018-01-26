export default function (itemtoRemove) {
    return {
        type: 'REMOVE_ITEM',
        payload: itemtoRemove
    }
}