function trim(message) {
    console.log(message.trim())
}

function changeToLowerCase(message) {
    console.log(message.toLowerCase())
}
function changeToUpperCase(message) {
    console.log(message.toUpperCase())
}


module.exports.lowerCase = changeToLowerCase
module.exports.upperCase = changeToUpperCase
module.exports.trim = trim