<?php

require_once __dir__ . "/../../../../test-runners/php/test.php";
require_once __dir__ . "/insertion-sort.php";
require_once __dir__ . "/../../is-sorted-asc/php/is-sorted-asc.php";

$is_sorted_asc_helper = fn($arr) => is_sorted_asc($arr, 1);

test(
    "insertion_sort",
    [
        fn() => insertion_sort([]) === [],
        fn() => insertion_sort([0]) === [0],
        fn() => insertion_sort([0, 1, 2]) === [0, 1, 2],
        fn() => insertion_sort([2, 1, 0]) === [0, 1, 2],
        fn() => insertion_sort([2, 0, 1]) === [0, 1, 2],
        fn() => $is_sorted_asc_helper(insertion_sort(range(100, 0, -1)))
    ]
);
