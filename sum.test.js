const { expect } = require('@jest/globals');
const { sum, combineStringsToObject, pushToArray } = require('./sum');

const parents = [
  {
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
  },
  {
    key: 'Operations Summary',
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
  },
];

const parentArray = [
  {
    'Mud Volume Summary': {
      additionLossSummary: [
        {
          propone: 'ab',
          proptwo: 'cd',
        },
      ],
      singleData: {
        balance: 'a',
        cumAdditions: 'b',
        cumLoss: 'c',
      },
    },
  },
  {
    'Operations Summary': {
      additionLossSummary: [
        {
          propone: 'ab',
          proptwo: 'cd',
        },
      ],
      singleData: {
        balance: 'a',
        cumAdditions: 'b',
        cumLoss: 'c',
      },
    },
  },
];

// send in this form
const parentData = {
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

const combinedData = {
  'Mud Volume Summary': {
    '': {
      balance: 'a',
      cumAdditions: 'b',
      cumLoss: 'c',
    },
    additionLossSummary: [
      {
        propone: 'ab',
        proptwo: 'cd',
      },
    ],
  },
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('combine strings', () => {
  expect(combineStringsToObject(parentData)).toStrictEqual(combinedData);
});

// test('return array of parent object', () => {
//   expect(pushToArray(parents)).toStrictEqual(parentArray);
// });
