let totalNumberOfMoves = 7;

const moves = [3, 1, 1, 4, 1, 1];

const snakes = [
    {
        id: 1,
        from: 59,
        to: 16
    },

    {
        id: 2,
        from: 71,
        to: 28
    },

    {
        id: 3,
        from: 64,
        to: 48
    },
    {
        id: 4,
        from: 77,
        to: 57
    },
    {
        id: 5,
        from: 84,
        to: 62
    },
    {
        id: 6,
        from: 88,
        to: 53
    },
];

const ladder = [
    {
        id: 1,
        from: 3,
        to: 11,
    },
    {
        id: 2,
        from: 22,
        to: 32,
    },
    {
        id: 3,
        from: 43,
        to: 82,
    },
    {
        id: 4,
        from: 5,
        to: 35,
    },
    {
        id: 5,
        from: 55,
        to: 94,
    },
    {
        id: 6,
        from: 66,
        to: 90,
    }
];

let currentSq = 0;

class SnadderSolver {
    constructor(currentSq, totalNumberOfMoves, moves, snakes, ladder, currentMove, allMoves, moveIdx) {
        this.currentSq = currentSq;
        this.totalNumberOfMoves = totalNumberOfMoves;
        this.moves = [...moves];
        this.snakes = snakes;
        this.ladder = ladder;
        this.currentMove = currentMove;
        this.allMoves = allMoves;
        this.moveIdx = moveIdx;
    }

    updateCurrrentMove() {
        this.currentSq += this.currentMove;
        this.totalNumberOfMoves--;
        this.moves[this.moveIdx]--;
        this.allMoves += this.currentMove + " ";
    }

    updateLadderSnake() {
        const snakeBite = this.snakes.find((element) => element.from === this.currentSq);

        if (snakeBite) this.currentSq = snakeBite.to;

        const ladderClimb = this.ladder.find((element) => element.from === this.currentSq);

        if (ladderClimb) this.currentSq = ladderClimb.to;
    }

    checkDestination() {
        return this.currentSq === 100;
    }

    nextContinuable() {
        return this.totalNumberOfMoves !== 0;
    }

    getMessage() {
        console.log(`You currently played move ${this.moveIdx + 1}`);
        console.log(`You are currently in ${this.currentSq}`);
        console.log(`Moves left ${this.totalNumberOfMoves}`);
        console.log(this.allMoves);
    }
}

function main(currentSq, totalNumberOfMoves, moves, snakes, ladder, allMvs) {

    for (let i = 0; i < moves.length; i++) {

        if (moves[i] != 0) {
            const snadderSolverObj = new SnadderSolver(currentSq, totalNumberOfMoves, moves, snakes, ladder, i + 1, allMvs, i);

            snadderSolverObj.updateCurrrentMove();
            snadderSolverObj.updateLadderSnake();

            const checkDestination = snadderSolverObj.checkDestination();
            const nextToContinue = snadderSolverObj.nextContinuable();

            if (checkDestination) {
                snadderSolverObj.getMessage();
                return snadderSolverObj.allMoves;
            }
            else if (nextToContinue) {
                const msg = main(snadderSolverObj.currentSq, snadderSolverObj.totalNumberOfMoves, snadderSolverObj.moves, snakes, ladder, snadderSolverObj.allMoves);

                if (msg) return msg;
            }
        }
    }

    return false;
}

const req = main(currentSq, totalNumberOfMoves, moves, snakes, ladder, "");
console.log("Final Solution: " + req);