'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // we are on the server *OR* the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/7209664de350430ea81263edf064d210');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBRyxPQUFPLEFBQVAsV0FBZ0IsQUFBaEIsZUFBOEIsT0FBTyxPQUFPLEFBQWQsU0FBc0IsQUFBdkQsYUFBbUUsQUFDL0Q7QUFDQTtXQUFLLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFMLEFBQ0g7QUFIRCxPQUlJLEFBQ0E7QUFDQTtRQUFNLFdBQVMsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNYLEFBRFcsQUFBZixBQUdBO1dBQUssQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBTCxBQUNIO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcHBvcnYvS2lja3N0YXJ0In0=