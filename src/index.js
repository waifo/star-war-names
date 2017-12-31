var starWarsNames = require('../data/names.json');
var uniqueRandomArray=require('unique-random-array');


module.exports={
    all:starWarsNames,
    random:uniqueRandomArray(starWarsNames)
}