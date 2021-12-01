function getTimeDifference(firstDate, secondDate) {
  const firstDateObject = new Date(firstDate);
  const secondDateObject = new Date(secondDate);

  const totalMiliseconds = firstDateObject.getTime() - secondDateObject.getTime();
  const differenceWithParam = totalMiliseconds / (1000 * 3600 * 24);
  const differenceWithEpoch = Date.now() / (1000 * 3600 * 24);

  console.log(Math.round(differenceWithEpoch));
  console.log(Math.round(differenceWithParam));
}

console.log(getTimeDifference("2021-10-22", "2021-10-23"));