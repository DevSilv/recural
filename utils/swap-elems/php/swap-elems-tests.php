<?php

require_once __dir__ . "/swap-elems.php";

test(
    "swap_elems",
    [
        fn() => swap_elems([1], 0, 0) === [1],
        fn() => swap_elems([0, 0, 1], 0, 1) === [0, 0, 1],
        fn() => swap_elems([0, 1, 2], 0, 2) === [2, 1, 0],
        fn() => swap_elems([0, 1, 2], 2, 0) === [2, 1, 0]
    ]
);
