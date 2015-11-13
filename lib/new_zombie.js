/**
 * Create a new zombie instance.
 * @function newZombie
 */

"use strict";

const Zombie = require('zombie');

/** @lends newZombie */
function newZombie() {
    return new Zombie();
}

module.exports = newZombie;
