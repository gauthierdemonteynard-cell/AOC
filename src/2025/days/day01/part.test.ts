import { describe, it, expect } from "vitest";
import { solvePart1 } from "./part1";
import { solvePart2 } from "./part2";
import { readExample } from "@utils/readFile";

const example = readExample("day01");

describe("Day 01", () => {
    it("Part 1 example", () => {
        expect(solvePart1(example)).toBe(3);
    });

    it("Part 2 example", () => {
        expect(solvePart2(example)).toBe(6);
    });
});