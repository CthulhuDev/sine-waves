/************************************************
 * @file  Left to right easing functions
 * @author Isaac Suttell
 ************************************************/
/*jshint esversion: 6 */
/**
 * This holds all of the easing objects and can be added to by the user
 *
 * @type    {Object}
 */

import { HALFPI, PI2 } from './constants'

export default class Ease {
  /**
   * Do not apply any easing
   *
   * @param  {Number} percent   where in the line are we?
   * @param  {Number} amplitude the current strength
   *
   * @return {Number}           the new strength
   */
  static linear (percent, amplitude) {
    return amplitude;
  }



  /**
   * Easing function to control how string each wave is from
   * left to right
   *
   * @param  {Number} percent   where in the line are we?
   * @param  {Number} amplitude the current strength
   *
   * @return {Number}           the new strength
   */
  static sinein (percent, amplitude) {
    return amplitude * (Math.sin(percent * Math.PI - HALFPI) + 1) * 0.5;
  }

  /**
   * Easing function to control how string each wave is from
   * left to right
   *
   * @param  {Number} percent   where in the line are we?
   * @param  {Number} amplitude the current strength
   *
   * @return {Number}           the new strength
   */
  static sineout (percent, amplitude) {
    return amplitude * (Math.sin(percent * Math.PI + HALFPI) + 1) * 0.5;
  }

  /**
   * Easing function to control how string each wave is from
   * left to right
   *
   * @param  {Number} percent   where in the line are we?
   * @param  {Number} amplitude the current strength
   *
   * @return {Number}           the new strength
   */
  static sineinout(percent, amplitude) {
    return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5;
  }

}