<?php

/**
 * @param int[] $arr The array to swap elements in.
 * @param int $idx The index of the first element in $arr to swap.
 * @param in $other_idx The index of the second element in $arr to swap.
 * @return int[] An array containing the same elements as $arr in the same
 *  order, except that the element at $idx is swapped with the element
 *  at $other_idx.
 */
function swap_elems($arr, $idx, $other_idx) {
    if ($idx === $other_idx) {
        return $arr;
    }

    $actual_idx = $idx;
    $actual_other_idx = $other_idx;

    if ($idx > $other_idx) {
        $tmp = $actual_idx;
        $actual_idx = $actual_other_idx;
        $actual_other_idx = $tmp;
    }

    $first = array_slice($arr, 0, $actual_idx);
    $second = array_slice(
        $arr, $actual_idx + 1, $actual_other_idx - $actual_idx - 1
    );
    $third = array_slice($arr, $actual_other_idx + 1);

    return array_merge(
        $first, [$arr[$actual_other_idx]], $second, [$arr[$actual_idx]], $third
    );
}
