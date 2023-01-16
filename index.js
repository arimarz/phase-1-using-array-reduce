const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries= batteryBatches.reduce(function(count, currentBatch){
    return count + currentBatch
})
//     const summed = batteryBatches.reduce(function(accu, element){
//         return element + accu}, 0);
//     if (currentBatch in count) {
//         count[currentBatch]++;
//     } else {
//         count[currentBatch]=1;
//     }
//     return count
// }, {});
// const summed = batteryBatches.reduce(function(accu, element){
//     return element + accu}, 0);
console.log(totalBatteries);
// console.log(summed);