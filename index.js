// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];




function findMatching(driverArray, driverName){
    const matchingDrivers = driverArray.filter(function (name) {return name.toUpperCase() === driverName.toUpperCase();}, driverName);
    
    //driverArray.filter(driverName, driverName);

    return matchingDrivers;
    
}

function fuzzyMatch(driverArray, namePart){

    const matchingDrivers = driverArray.filter(function (name) {return name.startsWith(namePart);}, namePart);
    return matchingDrivers;
    
}

function matchName(driverArray, checkName){

    const matchingDrivers = driverArray.filter(function (name){return name.name === checkName;}, checkName)
    return matchingDrivers;
}