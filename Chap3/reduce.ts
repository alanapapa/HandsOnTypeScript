const allTrucks = [
    2, 5, 7, 10
]

const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
    return totalCapacity += currentCapacity; 
}, initialCapacity)

console.log(allTonnage);