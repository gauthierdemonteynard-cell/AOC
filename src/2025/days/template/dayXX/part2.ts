import {readInput} from "@utils/readFile";

export const solve = (input: string): number => {
    const numbers = input.split("\n").map(Number);
    return Math.max(...numbers);
};

if (import.meta.url === `file://${process.argv[1]}`) {
    console.log("Solution:", solve(readInput("dayXX")));
}