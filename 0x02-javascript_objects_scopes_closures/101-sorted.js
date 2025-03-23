const dict = require('./101-data').dict;

const occurrences = {};

for (const userId in dict) {
    const count = dict[userId];
    if (!occurrences[count]) {
        occurrences[count] = [];
    }
    occurrences[count].push(userId);
}

console.log(occurrences);
