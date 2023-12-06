const reverseString = function(text) {
    let newText ="";
    for (let i = 0; i < text.length; i++) {
        newText+=text[text.length-(i+1)];        
    }
    return newText;
};

// Do not edit below this line
module.exports = reverseString;
