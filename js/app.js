var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("coin", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Coin = /** @class */ (function () {
        function Coin(value) {
            this.value = value;
        }
        return Coin;
    }());
    exports.Coin = Coin;
    var Dime = /** @class */ (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            return _super.call(this, .1) || this;
        }
        Dime.prototype.getImageUrl = function () {
            return "img/Dime.png";
        };
        return Dime;
    }(Coin));
    exports.Dime = Dime;
    var Quarter = /** @class */ (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            return _super.call(this, .25) || this;
        }
        Quarter.prototype.getImageUrl = function () {
            return "img/Quarter.png";
        };
        return Quarter;
    }(Coin));
    exports.Quarter = Quarter;
    var Half = /** @class */ (function (_super) {
        __extends(Half, _super);
        function Half() {
            return _super.call(this, .5) || this;
        }
        Half.prototype.getImageUrl = function () {
            return "img/Half.png";
        };
        return Half;
    }(Coin));
    exports.Half = Half;
    var Dollar = /** @class */ (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            return _super.call(this, 1) || this;
        }
        Dollar.prototype.getImageUrl = function () {
            return "img/Dollar.jpg";
        };
        return Dollar;
    }(Coin));
    exports.Dollar = Dollar;
});
define("productCategory", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProductCategory = /** @class */ (function () {
        function ProductCategory() {
            this.imgPath = "img/";
        }
        return ProductCategory;
    }());
    exports.ProductCategory = ProductCategory;
    var SodaCategory = /** @class */ (function (_super) {
        __extends(SodaCategory, _super);
        function SodaCategory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Soda";
            return _this;
        }
        SodaCategory.prototype.getImageUrl = function () {
            return this.imgPath + "SodaCan.png";
        };
        return SodaCategory;
    }(ProductCategory));
    exports.SodaCategory = SodaCategory;
    var ChipsCategory = /** @class */ (function (_super) {
        __extends(ChipsCategory, _super);
        function ChipsCategory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Potato Chips";
            return _this;
        }
        ChipsCategory.prototype.getImageUrl = function () {
            return this.imgPath + "Chips.png";
        };
        return ChipsCategory;
    }(ProductCategory));
    exports.PotatoChipsCategory = ChipsCategory;
    var CandyCategory = /** @class */ (function (_super) {
        __extends(CandyCategory, _super);
        function CandyCategory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Candy";
            return _this;
        }
        CandyCategory.prototype.getImageUrl = function () {
            return this.imgPath + "Candy.png";
        };
        return CandyCategory;
    }(ProductCategory));
    exports.CandyCategory = CandyCategory;
    var CandyBarCategory = /** @class */ (function (_super) {
        __extends(CandyBarCategory, _super);
        function CandyBarCategory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Candy Bar";
            return _this;
        }
        CandyBarCategory.prototype.getImageUrl = function () {
            return this.imgPath + "CandyBar.png";
        };
        return CandyBarCategory;
    }(ProductCategory));
    exports.CandyBarCategory = CandyBarCategory;
    var NutsCategory = /** @class */ (function (_super) {
        __extends(NutsCategory, _super);
        function NutsCategory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Nuts";
            return _this;
        }
        NutsCategory.prototype.getImageUrl = function () {
            return this.imgPath + "Nuts.png";
        };
        return NutsCategory;
    }(ProductCategory));
    exports.NutsCategory = NutsCategory;
});
define("product", ["require", "exports", "productCategory"], function (require, exports, categories) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Initial = /** @class */ (function () {
        function Initial() {
            this.name = "Please select a product";
            this.price = 0;
        }
        return Initial;
    }());
    exports.Initial = Initial;
    var CocaCola = /** @class */ (function () {
        function CocaCola() {
            this.name = "Coca-Cola";
            this.price = 2.30;
            this.category = new categories.SodaCategory();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Fanta = /** @class */ (function () {
        function Fanta() {
            this.name = "Fanta";
            this.price = 2;
            this.category = new categories.SodaCategory();
        }
        return Fanta;
    }());
    exports.Fanta = Fanta;
    var Sprite = /** @class */ (function () {
        function Sprite() {
            this.name = "Sprite";
            this.price = 1.80;
            this.category = new categories.SodaCategory();
        }
        return Sprite;
    }());
    exports.Sprite = Sprite;
    var Peanuts = /** @class */ (function () {
        function Peanuts() {
            this.name = "Peanuts";
            this.price = 1.50;
            this.category = new categories.NutsCategory();
        }
        return Peanuts;
    }());
    exports.Peanuts = Peanuts;
    var Cashews = /** @class */ (function () {
        function Cashews() {
            this.name = "Cashews";
            this.price = 2.80;
            this.category = new categories.NutsCategory();
        }
        return Cashews;
    }());
    exports.Cashews = Cashews;
    var Plain = /** @class */ (function () {
        function Plain() {
            this.name = "Plain";
            this.price = 2;
            this.category = new categories.PotatoChipsCategory();
        }
        return Plain;
    }());
    exports.Plain = Plain;
    var Cheddar = /** @class */ (function () {
        function Cheddar() {
            this.name = "Cheddar";
            this.price = 2;
            this.category = new categories.PotatoChipsCategory();
        }
        return Cheddar;
    }());
    exports.Cheddar = Cheddar;
    var Mints = /** @class */ (function () {
        function Mints() {
            this.name = "Mints";
            this.price = 1.30;
            this.category = new categories.CandyCategory();
        }
        return Mints;
    }());
    exports.Mints = Mints;
    var Gummies = /** @class */ (function () {
        function Gummies() {
            this.name = "Gummies";
            this.price = 1.90;
            this.category = new categories.CandyCategory();
        }
        return Gummies;
    }());
    exports.Gummies = Gummies;
    var Hersey = /** @class */ (function () {
        function Hersey() {
            this.name = "Hersey's";
            this.price = 1.30;
            this.category = new categories.CandyBarCategory();
        }
        return Hersey;
    }());
    exports.Hersey = Hersey;
    var MilkyWay = /** @class */ (function () {
        function MilkyWay() {
            this.name = "Milky Way";
            this.price = 1.80;
            this.category = new categories.CandyBarCategory();
        }
        return MilkyWay;
    }());
    exports.MilkyWay = MilkyWay;
});
define("productFactory", ["require", "exports", "product"], function (require, exports, products) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getProduct() {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0: return new products.CocaCola();
            case 1: return new products.Fanta();
            case 2: return new products.Sprite();
            case 3: return new products.Peanuts();
            case 4: return new products.Cashews();
            case 5: return new products.Plain();
            case 6: return new products.Cheddar();
            case 7: return new products.Mints();
            case 8: return new products.Gummies();
            case 9: return new products.Hersey();
            case 10: return new products.MilkyWay();
        }
    }
    exports.default = getProduct;
});
// class Quarter {
//     value: number = .25;
//     // get Value() {
//     //     return this.value;
//     // }
//     // set Value(newValue: number) {
//     //     this.value = newValue;
//     // }
//     getImageUrl (): string {
//         return "img\Quarter.png";
//     }
// }
// class Quarter extends Coin {
//     constructor() {
//         super(.25);
//     }
//     getImageUrl () {
//         return "img/Quarter.png";
//     }
// }
define("vendingMachine", ["require", "exports", "coin", "product", "productFactory"], function (require, exports, Coins, product_1, productFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VendingMachineSize;
    (function (VendingMachineSize) {
        VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
        VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
        VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
    })(VendingMachineSize = exports.VendingMachineSize || (exports.VendingMachineSize = {}));
    var Cell = /** @class */ (function () {
        function Cell(product) {
            this.product = product;
            this.stock = ko.observable(3);
            this.sold = ko.observable(false);
        }
        return Cell;
    }());
    var VendingMachine = /** @class */ (function () {
        function VendingMachine(userProductFactory) {
            if (userProductFactory === void 0) { userProductFactory = true; }
            var _this = this;
            this.userProductFactory = userProductFactory;
            this.paid = ko.observable(0);
            this.selectedCell = ko.observable(new Cell(new product_1.Initial()));
            this.cells = ko.observableArray([]);
            this.acceptedCoins = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
            this.canPay = ko.pureComputed(function () { return _this.paid() -
                _this.selectedCell().product.price >= 0; });
            this.select = function (cell) {
                cell.sold(false);
                _this.selectedCell(cell);
            };
            this.acceptCoin = function (coin) {
                var oldTotal = _this.paid();
                _this.paid(oldTotal + coin.value);
            };
            this.pay = function () {
                if (_this.selectedCell().stock() < 1) {
                    alert("I'm sorry, we're out of them!");
                    return;
                }
                var currentPaid = _this.paid();
                _this.paid(Math.round(((currentPaid -
                    _this.selectedCell().product.price) * 100)) / 100);
                var currentStock = _this.selectedCell().stock();
                _this.selectedCell().stock(currentStock - 1);
                _this.selectedCell().sold(true);
            };
        }
        Object.defineProperty(VendingMachine.prototype, "size", {
            set: function (givenSize) {
                this.cells([]);
                for (var index = 0; index < givenSize; index++) {
                    this.cells.push(new Cell(productFactory_1.default()));
                }
            },
            enumerable: true,
            configurable: true
        });
        return VendingMachine;
    }());
    exports.VendingMachine = VendingMachine;
});
//# sourceMappingURL=app.js.map