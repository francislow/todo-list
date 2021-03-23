import {validateInputString} from '../library/utilities/inputValidator'

describe("validateInputString function", () => {
  it("should returns an invalid if length of input is zero", () => {
    let inputString = ''
    expect(validateInputString(inputString).isValid).toEqual(false)
  });

  it("returns an invalid if length of input is > 70", () => {
    let inputString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    expect(validateInputString(inputString).isValid).toEqual(false)
  });

  it("returns an valid if length of input is between 0 and 70(inclusive)", () => {
    let inputString = "Lorem Ipsum is simply dummy text"
    expect(validateInputString(inputString).isValid).toEqual(true)
  });
});