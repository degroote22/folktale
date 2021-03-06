//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// See LICENCE for licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

const defineProperty = Object.defineProperty;

function define(object, name, value) {
  defineProperty(object, name, {
    value: value,
    writable: true,
    enumerable: false,
    configurable: true
  });
}

module.exports = define;
