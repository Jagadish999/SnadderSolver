"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialPlacement = exports.moves = exports.ladders = exports.snakes = exports.totalNumberOfMoves = void 0;
var totalNumberOfMoves = 7;
exports.totalNumberOfMoves = totalNumberOfMoves;
var initialPlacement = 0;
exports.initialPlacement = initialPlacement;
var snakes = [
    {
        from: 59,
        to: 16
    },
    {
        from: 71,
        to: 28
    },
    {
        from: 64,
        to: 48
    },
    {
        from: 77,
        to: 57
    },
    {
        from: 84,
        to: 62
    },
    {
        from: 88,
        to: 53
    },
];
exports.snakes = snakes;
var ladders = [
    {
        from: 3,
        to: 11,
    },
    {
        from: 22,
        to: 32,
    },
    {
        from: 43,
        to: 82,
    },
    {
        from: 5,
        to: 35,
    },
    {
        from: 55,
        to: 94,
    },
    {
        from: 66,
        to: 90,
    }
];
exports.ladders = ladders;
var moves = [3, 1, 1, 4, 1, 1];
exports.moves = moves;
