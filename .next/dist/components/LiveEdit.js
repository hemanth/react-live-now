'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _colors = require('../utils/colors');

var _reactLive = require('react-live');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledProvider = (0, _noParser2.default)(_reactLive.LiveProvider).withConfig({
  componentId: 's1fizj0n-0'
})([[' {border-radius: ', '0.1875rem', ';box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);overflow: hidden;margin-bottom: ', '6.25rem', ';position: absolute;top: 12rem;left: 0;width: 100%;border: 2px solid #f5b83d;}'], [' pre {height: 50rem;}']]);

var LiveWrapper = _noParser2.default.div.withConfig({
  componentId: 's1fizj0n-1'
})([[' {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-flex-direction: row;-ms-flex-direction: row;flex-direction: row;-webkit-box-pack: stretch;-webkit-justify-content: stretch;-ms-flex-pack: stretch;justify-content: stretch;-webkit-align-items: stretch;-webkit-box-align: stretch;-ms-flex-align: stretch;align-items: stretch;}@media (max-width: 600px) {'], [' {-webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;}}']]);

var column = (0, _noParser.css)([[' {-webkit-flex-basis: 100%;-ms-flex-basis: 100%;flex-basis: 100%;width: 100%;max-width: 100%;}@media (max-width: 600px) {'], [' {-webkit-flex-basis: auto;-ms-flex-basis: auto;flex-basis: auto;width: 100%;max-width: 100%;}}']]);

var StyledEditor = (0, _noParser2.default)(_reactLive.LiveEditor).withConfig({
  componentId: 's1fizj0n-2'
})([[' {background: ', _colors.lightGrey, ';font-family: \'Source Code Pro\',\f monospace;font-size: ', '0.875rem', ';height: ', '21.875rem', ';overflow: scroll;', column, '}']]);

var StyledPreview = (0, _noParser2.default)(_reactLive.LivePreview).withConfig({
  componentId: 's1fizj0n-3'
})([[' {position: relative;padding: 0.5rem;background: white;color: black;height: auto;overflow: hidden;', column, '}']]);

var StyledError = (0, _noParser2.default)(_reactLive.LiveError).withConfig({
  componentId: 's1fizj0n-4'
})([[' {display: block;padding: ', '0.5rem', ';background: ', _colors.red, ';color: ', _colors.foreground, ';}']]);

var LiveEdit = function LiveEdit(_ref) {
  var noInline = _ref.noInline,
      code = _ref.code;
  return _react2.default.createElement(StyledProvider, {
    code: code,
    noInline: noInline,
    mountStylesheet: false
  }, _react2.default.createElement(LiveWrapper, null, _react2.default.createElement(StyledEditor, null), _react2.default.createElement(StyledPreview, null)), _react2.default.createElement(StyledError, null));
};

exports.default = LiveEdit;