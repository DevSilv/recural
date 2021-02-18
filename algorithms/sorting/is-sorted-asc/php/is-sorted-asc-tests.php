<?php

require_once __dir__ . "/../../../../test-runners/php/test.php";
require_once __dir__ . "/is-sorted-asc.php";

test(
    "is_sorted_asc",
    [
        fn() => is_sorted_asc([], 1) === true,
        fn() => is_sorted_asc([0], 1) === true,
        fn() => is_sorted_asc([0, 0, 0], 1) === true,
        fn() => is_sorted_asc([0, 1, 2], 1) === true,
        fn() => is_sorted_asc([2, 1, 0], 1) === false,
        fn() => is_sorted_asc([2, 0, 1], 1) === false
    ]
);
