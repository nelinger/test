/**
 *
 * @author Eran Nelinger
 *
 *
 * @class String
 * @extends String
 * Extends the String prototype
 */

/**
 * @method capitalize
 * Computes a clone of the original String, with first capital letter
 * @return {String} a clone of the original String, with first capital letter
 */
String.prototype.capitalize = function capitaliseFirstLetter() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};