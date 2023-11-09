/*
10:43 During your absence you trained for 12 hours.
10:43 Your Distance Fighting skill changed from level 106 (with 61.84% progress towards level 107) to level 106 (with 82.87% progress towards level 107)
10:43 Your Shielding skill changed from level 88 (with 9.25% progress towards level 89) to level 88 (with 79.42% progress towards level 89)
*/

const before = 82.87;
const after = 61.84;
const time = 720;
const pace = ((before - after) / time).toFixed(3);

console.log(`Skills improved offline: ${before - after}`);
console.log(`Percentage per minute offline: ${pace}`);
console.log();

const beforeOnline = 17.1;
const afterOnline = 16.99;
const paceOnline = parseFloat((beforeOnline - afterOnline).toFixed(3));

console.log(`Skills improved online: ${beforeOnline - afterOnline}`);
console.log(`Percentage per minute online: ${paceOnline}`);
console.log(
  `Improvemenet online at a pace of ${paceOnline} for 12 hours: ${
    paceOnline * 720
  }`
);
console.log();

const beforeOnline2 = 16.34;
const afterOnline2 = 16.23;
const paceOnline2 = parseFloat((beforeOnline2 - afterOnline2).toFixed(2));

console.log(`Skills improved online 2: ${beforeOnline2 - afterOnline2}`);
console.log(`Percentage per minute online 2: ${paceOnline2}`);
console.log();

const beforeOnline3 = 15.0;
const afterOnline3 = 13.83;
const time3 = 15;
const paceOnline3 = parseFloat(
  (beforeOnline3 - afterOnline3 / time3).toFixed(2)
);

console.log(`Skills improved online 3: ${beforeOnline3 - afterOnline3}`);
console.log(`Percentage per minute online 3: ${paceOnline3}`);
console.log();
