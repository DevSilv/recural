<?php

require_once __dir__ . "/../../../../utils/swap-elems/php/swap-elems.php";

/**
 * @param int[] $arr The array to sort.
 * @param int $cur Always 0; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it represents either the index
 *  of the last element within the sorted sequence of elements in $arr,
 *  or the index of the first element within the unsorted sequence
 *  of elements in $arr.
 * @param int $y Always $cur; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it represents the index
 *  of the element in $arr being currently inserted into the sorted sequence
 *  of elements in $arr.
 * @return int[] An array containing the same elements as $arr, sorted
 *  in ascending order.
 */
function insertion_sort_helper($arr, $cur, $y) {
    if ($cur === count($arr)) {
        return $arr;
    }

    if ($y >= 1 && $arr[$y - 1] > $arr[$y]) {
        return insertion_sort_helper(
            swap_elems($arr, $y - 1, $y), $cur, $y - 1
        );
    }

    return insertion_sort_helper($arr, $cur + 1, $cur + 1);
}

/**
 * @param int[] $arr The array to sort.
 * @return int[] An array containing the same elements as $arr, sorted
 *  in ascending order.
 */
function insertion_sort($arr) {
    return insertion_sort_helper($arr, 0, 0);
}
