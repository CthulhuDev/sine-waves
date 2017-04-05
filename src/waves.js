/************************************************
 * @file  Sine Wave functions
 * @author Isaac Suttell
 ************************************************/
/*jshint esversion: 6 */

import { PI2 } from './constants'

/**
 * Holds the different types of waves
 *
 * @type    {Object}
 */

export default class Waves {
  /**
   * Default Sine Waves
   *
   * @param    {Number}    x
   */
  static sine  (x) {
    return Math.sin(x);
  }

  /**
   * Alias for Sine
   *
   * @alias
   * @type    {Function}
   */
  static sin (x) {
    return Waves.sine(x)
  }

  /**
   * Sign polyfill
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
   *
   * @param     {Number}    x
   *
   * @return    {Number}
   */
  static sign  (x) {
    x = +x; // convert to a number
    if (x === 0 || isNaN(x)) {
      return x;
    }
    return x > 0 ? 1 : -1;
  }

  /**
   * Square Waves
   *
   * @param    {Number}    x
   */
  static square  (x) {
    return Waves.sign(Math.sin(x * PI2));
  }

  /**
   * Sawtooth Waves
   *
   * @param    {Number}    x
   */
  static sawtooth  (x) {
    return (x - Math.floor(x + 0.5)) * 2;
  }

  /**
   * Triangle Waves
   *
   * @param    {Number}    x
   */
  static triangle  (x) {
    return Math.abs(Waves.sawtooth(x));
  }

}