
function insertShiftArray(arr, number) {
    let index = Math.ceil(arr.length / 2)
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1]

    }
    arr[index] = number
    console.log(arr)
}
insertShiftArray([1, 2, 3, 4], 9)