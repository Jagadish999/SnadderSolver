import { SnakeLadder } from './types';

const totalNumberOfMoves = 7;

const initialPlacement = 0;

const snakes: SnakeLadder[] = [
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
const ladders: SnakeLadder[] = [
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

const moves: number[] = [3, 1, 1, 4, 1, 1];

export {totalNumberOfMoves, snakes, ladders, moves, initialPlacement}