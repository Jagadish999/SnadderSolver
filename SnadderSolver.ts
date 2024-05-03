import { totalNumberOfMoves, snakes, ladders, moves, initialPlacement } from './constants';
import { SnakeLadder } from './types';

function snadderSolver(totalNumberOfMoves: number, snakes: SnakeLadder[], ladders: SnakeLadder[], moves: number[], stepsTaken: string, initialPlacement: number, nextMoveToPlay: number | null): boolean | string {

    if (totalNumberOfMoves === 0) return false;

    let remainingMoves: number[] = [...moves];

    if (nextMoveToPlay !== null) {

        totalNumberOfMoves--;
        remainingMoves[nextMoveToPlay - 1]--;
        stepsTaken += nextMoveToPlay + " ";
        initialPlacement += nextMoveToPlay;

        const snakeByte = snakes.find((value: SnakeLadder) => value.from === initialPlacement);
        if (snakeByte) initialPlacement = snakeByte.to;

        const ladderClimb = ladders.find((value: SnakeLadder) => value.from === initialPlacement);
        if (ladderClimb) initialPlacement = ladderClimb.to;
    }

    if (initialPlacement === 100) {
        return stepsTaken;
    }
    for (let i = 0; i < remainingMoves.length; i++) {

        if (remainingMoves[i] !== 0) {
            const message = snadderSolver(totalNumberOfMoves, snakes, ladders, remainingMoves, stepsTaken, initialPlacement, i + 1);
            if (message) return message;
        }
    }

    return false;
}

const snadderSolverStr: boolean | string = snadderSolver(totalNumberOfMoves, snakes, ladders, moves, "", initialPlacement, null);

if (snadderSolverStr) {
    console.log("Required Solution is: " + snadderSolverStr);
}
else {
    console.log("The Value cannot be reached");
}