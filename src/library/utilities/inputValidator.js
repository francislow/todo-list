const MAX_STRING_LENGTH = 70

export function validateInputString(inputString) {
  let isEmpty = (inputString == "");
  let isTooLong = (inputString.length > MAX_STRING_LENGTH);

  if (isEmpty) return {isValid: false, invalidMessage: 'Input cannot be empty'};
  if (isTooLong) return {isValid: false, invalidMessage: 'Input is too long'};
  
  return {isValid: true, invalidMessage: ''};
}