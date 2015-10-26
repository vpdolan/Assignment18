(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _zoo = require('./zoo');

var _zoo2 = _interopRequireDefault(_zoo);

(function () {
  'use strict';

  describe('About our Zoo', function () {

    beforeEach(function () {
      window.z = new _zoo2['default']();
    });

    describe('creating a new Zoo', function () {

      it('should create a new instance', function () {

        expect(z instanceof _zoo2['default']).to.equal(true);
      });
    });

    describe('the animals in our zoo', function () {
      it('should contain an array of animals', function () {

        expect(z.animals).to.be.an('array');
      });
    });

    describe('ability to add animals to our zoo', function () {
      it('should let me add a tiger to my zoo', function () {

        expect(z.animals.length).to.equal(0);
        z.animals.push('tiger');
        expect(z.animals.length).to.equal(1);
      });
    });
  });

  describe('About our Animals', function () {});
})();

//Create a zoo
//Zoo will have animals
//Animals
//Animals will have different attributes (type, name, color)

},{"./zoo":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Zoo = function Zoo() {

  this.animals = [];
};

exports["default"] = Zoo;
module.exports = exports["default"];

},{}]},{},[1])


//# sourceMappingURL=tests.js.map
