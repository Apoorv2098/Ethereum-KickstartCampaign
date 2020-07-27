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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeFrom = require('../../components/ContributeFrom');

var _ContributeFrom2 = _interopRequireDefault(_ContributeFrom);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apporv/Kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create more',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution(wei)',
                description: 'You can contribute atleast this much wei to be a part of approvers',
                style: { overflowWrap: 'break-word' }
            }, {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Request must be approved by Approvers',
                style: { overflowWrap: 'break-word' }
            }, {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'CampaignShow'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_ContributeFrom2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, 'View Requests')))))));
        }
    }], [{
        key: 'getInitialProps',

        //this method now automatically called by props due to routing
        //.add(/:address)
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRpb25Gcm9tIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBSzs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7c0NBaUJXO3lCQU9OLEtBUE0sQUFPRDtnQkFQQyxBQUVMLGlCQUZLLEFBRUw7Z0JBRkssQUFHTCxpQkFISyxBQUdMO2dCQUhLLEFBSUwsNkJBSkssQUFJTDtnQkFKSyxBQUtMLHVCQUxLLEFBS0w7Z0JBTEssQUFNTCx3QkFOSyxBQU1MLEFBR0o7O2dCQUFNO3dCQUNGLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHaUIsQUFDYjt1QkFBTSxFQUFDLGNBTEQsQUFDVixBQUlVLEFBQWM7QUFKeEIsQUFDSSxhQUZNO3dCQU9WLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHaUIsQUFDYjt1QkFBTSxFQUFDLGNBWEQsQUFPVixBQUlVLEFBQWM7QUFKeEIsQUFDSTt3QkFLSixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2lCLEFBQ2I7dUJBQU0sRUFBQyxjQWpCRCxBQWFWLEFBSVUsQUFBYztBQUp4QixBQUNJO3dCQUtKLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHaUIsQUFDYjt1QkFBTSxFQUFDLGNBdkJELEFBbUJWLEFBSVUsQUFBYztBQUp4QixBQUNJO3dCQU1PLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ5QixBQUNXLEFBQTJCLEFBQ2xDO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdpQixBQUNiO3VCQUFNLEVBQUMsY0E3QmYsQUFBYyxBQXlCVixBQUlVLEFBQWMsQUFNNUI7QUFWSSxBQUNJOztpREFTRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdILEFBQ0o7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFFSTtBQUZKO0FBQUEsYUFBQSxrQkFFSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EsaUNBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNDO0FBREQ7b0JBREosQUFDSSxBQUNDLEFBQUssQUFHTixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsQUFBQywwQ0FBaUIsU0FBUyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7OEJBQXRDO2dDQVBSLEFBQ0ksQUFLSSxBQUNBLEFBSUo7QUFKSTtrQ0FJSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQW5CNUIsQUFDSSxBQUdJLEFBV0ksQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQVcvQjs7O2FBOUZEOztBQUNBOzs7aUgsQUFDNkI7Ozs7O2lDQUNuQjtBLDJDQUFTLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEFBQXFCLEE7O3VDQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBLEFBQThCOztpQ0FBNUM7QTs7NkNBR00sTUFBQSxBQUFNLE1BRFgsQUFDaUIsQUFDcEI7eURBQXFCLFFBRmxCLEFBRWtCLEFBQVEsQUFDN0I7NkNBQVEsUUFITCxBQUdLLEFBQVEsQUFDaEI7bURBQWMsUUFKWCxBQUlXLEFBQVEsQUFDdEI7b0RBQWUsUUFMWixBQUtZLEFBQVEsQUFDdkI7NkNBQVEsUUFOTCxBQU1LLEFBQVEsQTtBQU5iLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSZSxBLEFBa0czQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FwcG9ydi9LaWNrc3RhcnQifQ==