'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apporv/Kickstart/components/ContributeFrom.js';


var ContributeFrom = function (_Component) {
    (0, _inherits3.default)(ContributeFrom, _Component);

    function ContributeFrom() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeFrom);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeFrom.__proto__ || (0, _getPrototypeOf2.default)(ContributeFrom)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 9:

                                //For refreshing the page after contribution
                                //It will again run getInitialProps()
                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeFrom, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                label: 'ether',
                labelPosition: 'right',
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Contribute!'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }));
        }
    }]);

    return ContributeFrom;
}(_react.Component);

exports.default = ContributeFrom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZyb20uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiTWVzc2FnZSIsIkJ1dHRvbiIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZyb20iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVEsQUFBTSxBQUFTLEFBQVE7O0FBQy9CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7OztnT0FDRixBO21CQUFNLEFBQ0ksQUFDTjswQkFGRSxBQUVXLEFBQ2I7cUJBSEUsQUFHTSxBO0FBSE4sQUFDRixpQkFLSixBO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDWDtzQ0FBQSxBQUFNLEFBRUE7O0FBSEssMkNBR0ksd0JBQVMsTUFBQSxBQUFLLE1BSGxCLEFBR0ksQUFBb0IsQUFDbkM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFNLGNBSmxCLEFBSVgsQUFBYyxBQUE0Qjs7Z0RBSi9CO2dEQUFBO3VDQU9lLGNBQUEsQUFBSyxJQVBwQixBQU9lLEFBQVM7O2lDQUF6QjtBQVBDLG9EQUFBO2dEQUFBO2dEQVNELEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QjswQ0FDM0IsU0FEZ0MsQUFDaEMsQUFBUyxBQUNkOzJDQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FYaEMsQUFTRCxBQUFtQyxBQUU5QixBQUFrQztBQUZKLEFBQ3JDLGlDQURFOztpQ0FLTjs7QUFDQTtBQUNBOytDQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQWhCaEMsQUFnQlAsQUFBNkM7Z0RBaEJ0QztBQUFBOztpQ0FBQTtnREFBQTtnRUFrQlA7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWEsWUFsQnJCLEFBa0JQLEFBQWMsQUFBa0I7O2lDQUVwQztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVUsT0FBTyxPQXBCcEIsQUFvQlgsQUFBYyxBQUF1Qjs7aUNBcEIxQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQXVCUDt5QkFDSjs7bUNBQ0ksQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5Q0FBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjt1QkFGSixBQUVVLEFBQ047K0JBSEosQUFHa0IsQUFDZDswQkFBVSx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU0sTUFBQSxBQUFNLE9BQW5DLEFBQVEsQUFBYyxBQUFvQjtBQUp4RDs7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBT0o7QUFQSTtBQUNJLGlDQU1SLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQVZKLEFBVUksQUFDQSxnQ0FBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQVpSLEFBQ0ksQUFXSSxBQUdQO0FBSE87Ozs7OztBQTNDaUIsQSxBQWtEN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZyb20uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXBwb3J2L0tpY2tzdGFydCJ9