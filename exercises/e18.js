/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let asteroids = data.asteroids;

  let discoveryYears = asteroids
    .map(function(asteroid) {
      return asteroid.discoveryYear;
    })
    .reduce(function(acc, year) {
      if (acc[year]) {
        acc[year]++;
      } else {
        acc[year] = 1;
      }
      return acc;
    }, {});

  let maxYear = null;
  let maxCount = 0;

  for (let year in discoveryYears) {
    if (discoveryYears[year] > maxCount) {
      maxCount = discoveryYears[year];
      maxYear = year;
    }
  }

  return parseInt(maxYear, 10);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
