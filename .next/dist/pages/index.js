'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _LiveEdit = require('../components/LiveEdit');

var _LiveEdit2 = _interopRequireDefault(_LiveEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _noParser2.default.div.withConfig({
  componentId: 's13wiw76-0'
})([[' {margin: 0 auto;max-width: 100%;width: ', '64rem', ';padding: ', '1.25rem', ';padding-bottom: ', '6.25rem', ';text-align: center;}']]);
var componentClassExample = '\nclass Counter extends React.Component {\n  constructor() {\n    super()\n    this.state = { count: 0 }\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => {\n      this.setState(state => ({ count: state.count + 1 }))\n    }, 1000)\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval)\n  }\n\n  render() {\n    return (\n      <center>\n        <h3>\n          {this.state.count}\n        </h3>\n      </center>\n    )\n  }\n}\n'.trim();

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Container, null, _react2.default.createElement(_Header2.default, null), _react2.default.createElement(_LiveEdit2.default, { code: componentClassExample }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;