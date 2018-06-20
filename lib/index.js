var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import 'rxjs';

export var spora = function spora(actions) {
  return function (Component) {
    return function (_React$PureComponent) {
      _inherits(Spora, _React$PureComponent);

      function Spora() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Spora);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Spora.__proto__ || Object.getPrototypeOf(Spora)).call.apply(_ref, [this].concat(args))), _this), _this.startAction = function (key) {
          return actions[key].subscribe(function (x) {
            return _this.setState({ x: x });
          });
        }, _this.cancelAction = function (key) {
          return actions[key].unsubscribe();
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(Spora, [{
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.state, {
            startAction: this.startAction,
            cancelAction: this.cancelAction
          }));
        }
      }]);

      return Spora;
    }(React.PureComponent);
  };
};