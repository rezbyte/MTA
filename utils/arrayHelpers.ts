export function removeFromArray<T>(array: T[], item: T): T[] {
    const newArray = array.slice();
    const index = newArray.indexOf(item);
    // Only attempt to remove the item if present
    if (index > -1) {
        newArray.splice(index, 1);
    }
    return newArray;
}

export function editInArray<T>(array: T[], oldValue: T, newValue: T): T[] {
    const newArray = array.slice();
    const index = newArray.indexOf(oldValue);
    if (index > -1) {
        newArray[index] = newValue;
    }
    return newArray;
}
