<?php

require_once __dir__ . "/../../algorithms/other-problems/every/php/every.php";

function test($fn_name, $tests_arr) {
    if (!every($tests_arr, fn($f) => $f() === true, 0)) {
        exit(1);
    }
}
