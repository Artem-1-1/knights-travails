import { knightTravails } from "./index.js";

knightTravails([0, 0], [1, 2]);
// The shortest path was 1 moves!
// The moves were:
// 0, 0
// 1, 2

knightTravails([4, 4], [0, 7]);
// The shortest path was 3 moves!
// The moves were:
// 4, 4
// 2, 3
// 1, 5
// 0, 7

knightTravails([0, 0], [7, 7]);
// The shortest path was 6 moves!
// The moves were:
// 0, 0
// 2, 1
// 4, 2
// 6, 1
// 7, 3
// 6, 5
// 7, 7
