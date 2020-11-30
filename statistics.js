console.log("-----------------------------------------------------------------------------")
let highestNumber = 0

function max(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highestNumber) {
            highestNumber = arr[i]
        }
    }
    return "Högsta stygghet: " + highestNumber
}

let smallestnumber = 10000

function min(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestnumber) {
            smallestnumber = i
        }
    }
    return 'Lägsta stygghet: ' + smallestnumber
}

let total = 0
function mean(arr) {
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    console.log("-")
    console.log("total stygghet: " + total)
    console.log("personer: " + arr.length)
    return 'Medel stygghet: ' + (total / arr.length)
}

console.log(max([2, 0, 5, 8, 4, 5, 9]))
console.log(min([2, 0, 5, 8, 4, 5, 9]))
console.log(mean([2, 0, 5, 8, 4, 5, 9]))
console.log("-----------------------------------------------------------------------------")
