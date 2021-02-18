<?php

require_once __dir__ . "/../../../../test-runners/php/test.php";
require_once __dir__ . "/find-first-idx.php";

$find = fn($f, $arr) => find_first_idx($f, $arr, 0);

test(
    "find_first_idx",
    [
        fn() => $find(fn($e) => true, []) === NULL,
        fn() => $find(fn($e) => $e === 0, [0]) === 0,
        fn() => $find(fn($e) => $e === 4, [0, 2, 4, 8]) === 2,
        fn() => $find(fn($e) => $e > 4, [0, 2, 4, 8]) === 3,
        fn() => $find(fn($e) => $e < 4, [0, 2, 4, 8]) === 0
    ]
);
