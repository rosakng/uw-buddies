import {
  snakeCase,
  isPlainObject,
} from 'lodash/fp';

export const deepMapKeys = (input, iteratee) => {
  if (!input) {
    console.log('sfasd');
    return null;
  }

  if (!isPlainObject(input)) {
    console.log('not a plain object');
    return input;
  }

  const result = {};

  Object.keys(input).forEach((key) => {
    let value = input[key];

    if (isPlainObject(value)) {
      value = deepMapKeys(value, iteratee);
    }
    result[iteratee(key, value)] = value;
  });

  return result;
};

export const snakeCaseObject = (input) => deepMapKeys(input, (key) => snakeCase(key));
