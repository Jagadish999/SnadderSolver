"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function snadderSolver(totalNumberOfMoves, snakes, ladders, moves, stepsTaken, initialPlacement, nextMoveToPlay) {
    if (totalNumberOfMoves === 0)
        return false;
    var remainingMoves = __spreadArray([], moves, true);
    if (nextMoveToPlay !== null) {
        totalNumberOfMoves--;
        remainingMoves[nextMoveToPlay - 1]--;
        stepsTaken += nextMoveToPlay + " ";
        initialPlacement += nextMoveToPlay;
        var snakeByte = snakes.find(function (value) { return value.from === initialPlacement; });
        if (snakeByte)
            initialPlacement = snakeByte.to;
        var ladderClimb = ladders.find(function (value) { return value.from === initialPlacement; });
        if (ladderClimb)
            initialPlacement = ladderClimb.to;
    }
    if (initialPlacement === 100) {
        return stepsTaken;
    }
    else {
        for (var i = 0; i < remainingMoves.length; i++) {
            if (remainingMoves[i] !== 0) {
                var message = snadderSolver(totalNumberOfMoves, snakes, ladders, remainingMoves, stepsTaken, initialPlacement, i + 1);
                if (message)
                    return message;
            }
        }
    }
    return false;
}
var snadderSolverStr = snadderSolver(constants_1.totalNumberOfMoves, constants_1.snakes, constants_1.ladders, constants_1.moves, "", constants_1.initialPlacement, null);
if (snadderSolverStr) {
    console.log("Required Solution is: " + snadderSolverStr);
}
else {
    console.log("The Value cannot be reached");
}
