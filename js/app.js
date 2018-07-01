var Coin = /** @class */ (function () {
    function Coin() {
    }
    return Coin;
}());
/// <reference path="./coin.ts" />
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
    }
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
ko.applyBindings(machine);
var Quarter = /** @class */ (function () {
    function Quarter() {
        this.value = .25;
    }
    // get Value() {
    //     return this.value;
    // }
    // set Value(newValue: number) {
    //     this.value = newValue;
    // }
    Quarter.prototype.getImageUrl = function () {
        return "img\Quarter.png";
    };
    return Quarter;
}());
//# sourceMappingURL=app.js.map