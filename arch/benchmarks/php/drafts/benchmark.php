<?php

function benchmark($fn_name, $f, $inputs_arr) {
    printf("Benchmarking " . $fn_name . "...\n");

    $start = microtime(true);

    for ($cur = 0; $cur < count($inputs_arr); ++$cur) {
        $f(...$inputs_arr[$cur]);
    }

    $end = microtime(true);

    $total_microseconds = $end - $start;
    $avg_microseconds = $total_microseconds / count($inputs_arr);

    printf(
        "Total execution time (microseconds): " . $total_microseconds . "\n"
        . "Average execution time (microseconds): " . $avg_microseconds . "\n"
    );
}
