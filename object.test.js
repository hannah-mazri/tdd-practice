const { expect } = require('@jest/globals');
const { createNewParent } = require('./object');

const originalForm = {
  key: 'Mud Volume Summary',
  value: {
    additionLossSummary: [
      {
        propone: 'ab',
        proptwo: 'cd',
      },
    ],
    balance: 'a',
    cumAdditions: 'b',
    cumLoss: 'c',
  },
};

const newForm = {
  'Mud Volume Summary': {
    additionLossSummary: [
      {
        propone: 'ab',
        proptwo: 'cd',
      },
    ],
    '': {
      balance: 'a',
      cumAdditions: 'b',
      cumLoss: 'c',
    },
  },
};

test('should create array of parent object', () => {
  expect(createNewParent(originalForm)).toStrictEqual(newForm);
});
