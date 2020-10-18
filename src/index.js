module.exports = function toReadable (number) { 
    let readableNumbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four'
    };
    return readableNumbers[number];
  
};
