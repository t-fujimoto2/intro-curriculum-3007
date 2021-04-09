'use strict';
/**
 * 17の倍数であるかどうか判定する
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
