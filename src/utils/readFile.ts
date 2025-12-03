import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const readInput = (day: string, file = "input.txt") => {
    const path = join(__dirname, "..", "2025", "days", day, file);
    return readFileSync(path, "utf-8").trimEnd();
};

export const readExample = (day: string) =>
    readInput(day, "example.txt");