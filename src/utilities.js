/************************************************
 * @file  General utility functions
 * @author  Isaac Suttell
 ************************************************/
/*jshint esversion: 6 */

import { PI180 } from './constants'
import _ from 'lodash'

/**
 * Utilities wrapper
 *
 * @type    {Object}
 */
export default class Utilities {

  /**
   * Checks to see if a var is a speficied type
   *
   * @param  {Mixed}  obj  var to check
   *
   * @param {String} type type to check
   *
   * @return {Boolean}
   */
  static isType (obj, type) {
    let result = {}.toString.call(obj).toLowerCase();
    return result === '[object ' + type.toLowerCase() + ']';
  }

  /**
   * Checks to see if a var is a function
   *
   * @alias  isType
   * @param  {Mixed}  fn  var to check
   *
   * @return {Boolean}
   */
  static isFunction (fn) {
    return Utilities.isType(fn, 'function');
  }

  /**
   * Checks to see if a var is a string
   *
   * @alias  isType
   * @param  {Mixed}  str  var to check
   *
   * @return {Boolean}
   */
  static isString (str) {
    return Utilities.isType(str, 'string');
  }

  /**
   * Checks to see if a var is a number
   *
   * @alias  isType
   * @param  {Mixed}  num  var to check
   *
   * @return {Boolean}
   */
  static isNumber (num) {
    return Utilities.isType(num, 'number');
  }

  /**
   * Basic Extend Function
   *
   * @param     {Object}    dest   object to fill
   * @param     {Object}    src    object to copy
   *
   * @return    {Object}
   */
  static defaults (dest, src) {
    return _.merge(_.cloneDeep(dest), src)
  }

  /**
   * Convert degress to radians for rotation function
   *
   * @param     {Number}    degrees
   *
   * @return    {Number}
   */
  static degreesToRadians (degrees) {
    if (!Utilities.isType(degrees, 'number')) {
      throw new TypeError('Degrees is not a number');
    }
    return degrees * PI180;
  }

  /**
   * You can either directly specify a easing function, use a built in function
   * or default to the basic SineInOut
   *
   * @param     {Object}   obj     Object to search in
   * @param     {Mixed}    name    String || Function
   * @param     {String}   def     Default funciton
   *
   * @return    {Function}
   */
  static getFn (obj, name, def) {
    if (Utilities.isFunction(name)) {
      return name;
    } else if (Utilities.isString(name) && Utilities.isFunction(obj[name.toLowerCase()])) {
      return obj[name.toLowerCase()];
    } else {
      return obj[def];
    }
  }
}
