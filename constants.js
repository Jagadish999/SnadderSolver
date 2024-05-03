"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialPlacement = exports.moves = exports.ladders = exports.snakes = exports.totalNumberOfMoves = void 0;
var totalNumberOfMoves = 10;
exports.totalNumberOfMoves = totalNumberOfMoves;
var initialPlacement = 0;
exports.initialPlacement = initialPlacement;
var snakes = [
    {
        from: 87,
        to: 46
    },
    {
        from: 89,
        to: 74
    },
    {
        from: 72,
        to: 69
    },
    {
        from: 51,
        to: 9
    },
    {
        from: 48,
        to: 7
    },
    {
        from: 44,
        to: 25
    },
    {
        from: 32,
        to: 12
    }
];
exports.snakes = snakes;
var ladders = [
    {
        from: 3,
        to: 39,
    },
    {
        from: 21,
        to: 56,
    },
    {
        from: 5,
        to: 27,
    },
    {
        from: 54,
        to: 91,
    },
    {
        from: 65,
        to: 80,
    },
    {
        from: 62,
        to: 85,
    }
];
exports.ladders = ladders;
var moves = [2, 2, 0, 1, 5, 1];
exports.moves = moves;
