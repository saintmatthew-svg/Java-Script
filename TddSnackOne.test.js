const {AirConditioner, TurnOn, TurnOff, Increase, Decrease} = require("./TddSnackOne.js");

describe("default", () => {
    beforeEach(() => {
        minTemperature = 16;
        maxTemperature = 30;
    });

    test("Ac is on", () => {
        expect(TurnOn()).toBe(true);
    });

    test("Ac is off", () => {
        expect(TurnOff()).toBe(false);
    });

    test("Ac can increase above 16", () => {   
        expect(Increase(minTemperature)).toBe(17);
    });

    test("Ac can decrease below 30", () => {
        expect(Decrease(maxTemperature)).toBe(29)
    });

    test("Ac does not go below 16", () => {
        expect(Decrease(minTemperature)).toBe(16);
    });

    test("Ac does not go above 30", () => {
        expect(Increase(maxTemperature)).toBe(30);
    });

});