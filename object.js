function createNewParent(originalForm) {
  let objectEntries = Object.entries(originalForm.value);
  let combinedStrings = {};
  let combinedObject = {};
  let newParentData = {};
  let newForm = [];

  objectEntries.map((entry) => {
    if (Array.isArray(entry[1])) {
      combinedObject['additionLossSummary'] = entry[1];
    } else {
      combinedStrings[entry[0]] = entry[1];
    }
    combinedObject[''] = combinedStrings;
    newParentData[originalForm.key] = combinedObject;
  });

  return newParentData;
}

module.exports = { createNewParent };
