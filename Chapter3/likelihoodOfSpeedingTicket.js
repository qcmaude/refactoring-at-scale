function likelihoodOfSpeedingTicket(currentSpeed, limit){
  risk = 0;

  if (currentSpeed < 45) {
    risk = 1;
  }

  if (currentSpeed > (limit + 10)) {
    risk = 2;
  }

  return risk;
}

console.log(likelihoodOfSpeedingTicket(30, 10));
console.log(likelihoodOfSpeedingTicket(30, 50));
console.log(likelihoodOfSpeedingTicket(90, 50));
console.log(likelihoodOfSpeedingTicket(90, 110));