<?php

require_once __dir__ . "/../../../../test-runners/php/test.php";
require_once __dir__ . "/every.php";

$input = range(100, 0, -1);

test(
    "every",
    [
        fn() => every([], fn($e) => true, 0) === true,
        fn() => every([], fn($e) => false, 0) === true,
        fn() => every([0], fn($e) => $e === 0, 0) === true,
        fn() => every([0], fn($e) => $e !== 0, 0) === false,
        fn() => every([0, 0, 0], fn($e) => $e === 0, 0) === true,
        fn() => every([0, 0, 0], fn($e) => $e !== 0, 0) === false,
        fn() => every([0, 1, 2], fn($e) => $e >= 0, 0) === true,
        fn() => every([0, 1, 2], fn($e) => $e > 0, 0) === false
    ]
);
