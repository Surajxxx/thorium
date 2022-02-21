function printDate() {
    console.log(new Date().getDate())
}
function printMonth() {
    console.log((new Date().getMonth()) + 1)
}
function getBatchInfo(message) {
    console.log(message)
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
