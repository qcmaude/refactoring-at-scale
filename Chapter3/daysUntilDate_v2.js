function daysUntilDate(futureDate) {
  now = new Date();
  futureMillis = futureDate.getTime();
  nowMillis = now.getTime();
  difference = futureMillis - nowMillis;
  conversionFactor = (1000*60*60*24);
  return Math.floor(difference/conversionFactor);
}

var comparisonDate = new Date('December 28, 2066');
console.log(daysUntilDate(comparisonDate));