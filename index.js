// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier){
    return function(){
        return fareMultiplier * 5
    }
};

function fareDoubler(doublesFare){
    return doublesFare * 2
};

function fareTripler(triplesFare){
    return triplesFare * 3
};

function selectDifferentDrivers(arrayOfDrivers, driversToReturn){
    return driversToReturn(arrayOfDrivers)
};