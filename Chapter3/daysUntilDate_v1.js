function daysUntilDate(futureDate) {
  return Math.floor((futureDate.getTime() - (new Date()).getTime())/(1000*60*60*24));
}

var comparisonDate = new Date('December 28, 2066');
console.log(daysUntilDate(comparisonDate));