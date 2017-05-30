'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Golem = function () {
  function Golem() {
    _classCallCheck(this, Golem);

    this.height = 10; // meters
    this.weight = 350; // kilograms
    this.state = 'inert';
    this.material = 'clay';
    this.color = 'gray';
  }

  _createClass(Golem, [{
    key: 'etch',
    value: function etch(text, location) {
      if (location === 'forehead') {
        this.state = text === 'אמת' ? 'animate' : 'inert';
      }
    }
  }]);

  return Golem;
}();
//# sourceMappingURL=Golem.js.map