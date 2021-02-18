<?php

require_once __dir__ . "/../../../../test-runners/php/test.php";
require_once __dir__ . "/repeat-arr.php";

$rpt_arr = fn($arr, $cnt) => repeat_arr($arr, $cnt, 0, []);

test(
    "repeat_arr",
    [
        fn() => $rpt_arr([], 0) === [],
        fn() => $rpt_arr([], 3) === [[], [], []]
    ]
);
