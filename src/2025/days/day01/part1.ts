import {readInput} from "@utils/readFile";

interface Operation {
    direction: string,
    distance: number
}

function extracted(input: string): Operation[] {
    return input.split("\n").map(line => {
        const direction = line[0];
        const distance = Number(line.slice(1));
        return {
            direction, distance
        };
    });
}

class Node {
    value: number;
    next!: Node;
    prev!: Node;

    constructor(value: number) {
        this.value = value;
    }
}
class CircularLinkedList {
    pointer: Node;

    constructor(size: number, start: number) {
        const nodes = Array.from({length: size}, (_, i) => new Node(i));

        for (let i = 0; i < size; i++) {
            nodes[i].next = nodes[(i + 1) % size];
            nodes[i].prev = nodes[(i - 1 + size) % size];
        }

        this.pointer = nodes[start];
    }

    moveForward(steps: number) {
        while (steps--) this.pointer = this.pointer.next;
    }

    moveBackward(steps: number) {
        while (steps--) this.pointer = this.pointer.prev;
    }

    get current() {
        return this.pointer.value;
    }
}

export const solvePart1 = (input: string): number => {

    const data = extracted(input);
    let list = new CircularLinkedList(100, 50);
    let code = 0
    data.forEach(operation => {
        if (operation.direction == "L") {
            list.moveBackward(operation.distance);
        } else {
            list.moveForward(operation.distance)
        }
        if (list.current == 0) {

            code += 1
        }
    })
    return code;

};

if (import.meta.url === `file://${process.argv[1]}`) {

    console.log("Part 1:", solvePart1(readInput("day01")));
}
