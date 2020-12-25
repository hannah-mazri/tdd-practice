function sum(a, b) {
  return a + b;
}

function combineStringsToObject(parentData) {
  let objectEntries = Object.entries(parentData.value);
  let combinedStrings = {};
  let combinedObject = {};
  let newParentData = {};

  objectEntries.map((entry) => {
    if (Array.isArray(entry[1])) {
      combinedObject['additionLossSummary'] = entry[1];
    } else {
      combinedStrings[entry[0]] = entry[1];
    }
    combinedObject[''] = combinedStrings;
    newParentData[parentData.key] = combinedObject;
  });

  return newParentData;
}

function pushToArray(parents) {
  let parentDataArray = parents.map((parent) => combineStringsToObject(parent));

  return parentDataArray;
}

module.exports = { sum, combineStringsToObject, pushToArray };
