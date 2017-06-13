'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blue = '#828fb7';

var SubTitle = _noParser2.default.h2.withConfig({
  componentId: 'qxdszn-0'
})([[' {font-size: ', '1.333em', ';font-weight: bold;color: ', blue, ';margin: 0;margin-left: ', '1.875rem', ';letter-spacing: ', '0.01875rem', ';line-height: 1.5;}@media (max-width: 600px) {'], [' {margin-left: 0;margin-top: ', '1.875rem', ';}}']]);

var Title = _noParser2.default.h1.withConfig({
  componentId: 'qxdszn-1'
})([[' {font-weight: normal;font-size: ', '3.157334518321em', ';line-height: 1.1;margin: 0;margin-left: ', '1.5625rem', ';}@media (max-width: 600px) {'], [' {margin-left: 0;margin-top: ', '1.5625rem', ';margin-top: ', '1.5625rem', ';}}']]);

var TitleRow = _noParser2.default.div.withConfig({
  componentId: 'qxdszn-2'
})([[' {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-align-items: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;-webkit-flex-direction: row;-ms-flex-direction: row;flex-direction: row;text-align: left;margin: ', '1.875rem', ' 0;}@media (max-width: 600px) {'], [' {-webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;text-align: center;}}']]);
var Container = _noParser2.default.div.withConfig({
  componentId: 'qxdszn-3'
})([[' {width: 100%;margin-bottom: ', '3.75rem', ';}']]);

var Header = function Header() {
  return _react2.default.createElement(Container, null, _react2.default.createElement(TitleRow, null, _react2.default.createElement('div', null, _react2.default.createElement(Title, null, 'React Live'), _react2.default.createElement(SubTitle, null, 'A production-focused playground for live editing React code  \uD83D\uDCE1'))));
};

exports.default = Header;