/**
 * Test case for newZombie.
 * Runs with mocha.
 */
"use strict";

var newZombie = require('../lib/new_zombie.js'),
    assert = require('assert');

describe('new-zombie', () => {

    it('New zombie', function (done) {
        var browser = new newZombie();
        assert.ok(browser);
        done();
    });
});

