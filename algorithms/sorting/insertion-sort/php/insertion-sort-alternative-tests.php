<?php

require_once __dir__ . "/../../../../test-runners/php/test.php";
require_once __dir__ . "/../../is-sorted-asc/php/is-sorted-asc.php";
require_once __dir__ . "/insertion-sort-alternative.php";

$is_sorted_asc_helper = fn($arr) => is_sorted_asc($arr, 1);

test(
    "insert",
    [
        fn() => insert(0, []) === [0],
        fn() => insert(0, [0]) === [0, 0],
        fn() => insert(0, [1]) === [0, 1],
        fn() => insert(1, [0]) === [0, 1],
        fn() => insert(1, [0, 2]) === [0, 1, 2]
    ]
);

test(
    "insertion_sort_alternative",
    [
        fn() => insertion_sort_alternative([]) === [],
        fn() => insertion_sort_alternative([0]) === [0],
        fn() => insertion_sort_alternative([0, 1, 2]) === [0, 1, 2],
        fn() => insertion_sort_alternative([2, 1, 0]) === [0, 1, 2],
        fn() => insertion_sort_alternative([2, 0, 1]) === [0, 1, 2],
        fn() =>
            $is_sorted_asc_helper(insertion_sort_alternative(range(100, 0, -1)))
    ]
);
