import { describe, it, expect } from "vitest";
import { solve } from "./part1";
import { solve } from "./part2";
import { readExample } from "@utils/readFile";

const example = readExample("day01");

describe("Day 01", () => {
    it("Part 1 example", () => {
        expect(solve(example)).toBe(6);
    });

    it("Part 2 example", () => {
        expect(solve(example)).toBe(6);
    });
});