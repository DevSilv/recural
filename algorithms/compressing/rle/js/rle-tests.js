const { test } = require("../../../../test-runners/js/test");
const { rleCompress, rleDecompress } = require("./rle");
const generateRandomPermutationModule
    = require(
        "../../../other-problems/generate-random-permutation/js/generate-random-permutation"
    );

test(
    res => {
        console.log(`rle: ${res}`);
    },
    [
        () => {
            const chars = ["0", "1"];
            const repeatCount = 0;
            const data =
                generateRandomPermutationModule.generateRandomPermutation(
                    chars.map(char => char.repeat(repeatCount)),
                    []
                ).toString();
            const compressed = rleCompress(data, 1, data[0], 1, []);
            const decompressed = rleDecompress(compressed, 0, "");

            return data === decompressed;
        },
        () => {
            const chars = ["0", "1"];
            const repeatCount = 10;
            const data =
                generateRandomPermutationModule.generateRandomPermutation(
                    chars.map(char => char.repeat(repeatCount)),
                    []
                ).toString();
            const compressed = rleCompress(data, 1, data[0], 1, []);
            const decompressed = rleDecompress(compressed, 0, "");

            return data === decompressed;
        },
        () => {
            const chars = ["0", "1"];
            const repeatCount = 1000;
            const data =
                generateRandomPermutationModule.generateRandomPermutation(
                    chars.map(char => char.repeat(repeatCount)),
                    []
                ).toString();
            const compressed = rleCompress(data, 1, data[0], 1, []);
            const decompressed = rleDecompress(compressed, 0, "");

            return data === decompressed;
        }
    ]
);