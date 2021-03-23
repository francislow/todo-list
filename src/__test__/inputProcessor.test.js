import {processInputString} from '../library/utilities/inputProcessor'

describe("processInputString function", () => {
  it("should trim off spaces at the end", () => {
    let inputString = ' Lorem Ipsum is simply dummy text! '
    expect(processInputString(inputString)).toEqual('Lorem Ipsum is simply dummy text!')
  });
});