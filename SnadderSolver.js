let totalNumberOfMoves = 11;

const moves = [0, 2, 0, 5, 5, 1];
const snakes = [
    {
        id: 1,
        from: 27,
        to: 6
    },

    {
        id: 2,
        from: 48,
        to: 29
    },

    {
        id: 3,
        from: 71,
        to: 32
    },
    {
        id: 4,
        from: 76,
        to: 67
    },
    {
        id: 5,
        from: 84,
        to: 78
    },
    {
        id: 6,
        from: 81,
        to: 42
    },
    {
        id: 6,
        from: 96,
        to: 90
    },
];
const ladder = [
    {
        id: 1,
        from: 3,
        to: 44,
    },
    {
        id: 2,
        from: 12,
        to: 46,
    },
    {
        id: 3,
        from: 14,
        to: 57,
    },
    {
        id: 4,
        from: 22,
        to: 61,
    },
    {
        id: 5,
        from: 34,
        to: 70,
    },
    {
        id: 6,
        from: 74,
        to: 99,
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

    updateCurrrentMove(){
        this.currentSq += this.currentMove;
        this.totalNumberOfMoves--;
        this.moves[this.moveIdx]--;
        this.allMoves += this.currentMove + " ";
        console.log(this.allMoves);
    }

    updateLadderSnake(){
        const snakeBite = this.snakes.find((element) => element.from === this.currentSq);

        if(snakeBite) this.currentSq = snakeBite.to;

        const ladderClimb = this.ladder.find((element) => element.from === this.currentSq);

        if(ladderClimb) this.currentSq = ladderClimb.to;
    }

    checkDestination(){

        return this.currentSq === 100;
    }

    nextContinuable(){
        return this.totalNumberOfMoves !== 0;
    }

    getMessage(){
        console.log(`You currently played move ${this.moves[this.moveIdx] + 1}`);
        console.log(`You are currently in ${this.currentSq}`);
        console.log(`Moves left ${this.totalNumberOfMoves}`);
        console.log(this.allMoves);
    }
}

function main(currentSq, totalNumberOfMoves, moves, snakes, ladder, allMvs) {

    for(let i = 0; i < moves.length; i++){

        if(moves[i] != 0){
            const snadderSolverObj = new SnadderSolver(currentSq, totalNumberOfMoves, moves, snakes, ladder, i+1, allMvs, i);

            snadderSolverObj.updateCurrrentMove();
            snadderSolverObj.updateLadderSnake();

            const checkDestination = snadderSolverObj.checkDestination();
            const nextToContinue = snadderSolverObj.nextContinuable();
            
            if(checkDestination){
                snadderSolverObj.getMessage();
                return snadderSolverObj.allMoves;
            }
            else if(nextToContinue){
                const msg = main(snadderSolverObj.currentSq, snadderSolverObj.totalNumberOfMoves, snadderSolverObj.moves, snakes, ladder, snadderSolverObj.allMoves);

                if(msg) return msg;
            }
        }
    }

    return false;    
}

const req = main(currentSq, totalNumberOfMoves, moves, snakes, ladder, "");
console.log("Final Req: " + req);