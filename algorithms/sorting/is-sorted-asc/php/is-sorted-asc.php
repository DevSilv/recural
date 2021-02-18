<?php

/**
 * @param int[] $arr The array to check for being sorted in ascending order.
 * @param int $cur Always 1; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it represents the index
 *  of the element following the last element in the sorted sequence of elements
 *  in $arr.
 * @return bool True if all of the elements in $arr are sorted in ascending
 *  order; otherwise, false.
 */
function is_sorted_asc($arr, $cur) {
    if ($cur >= count($arr)) {
        return true;
    }

    if ($arr[$cur] < $arr[$cur - 1]) {
        return false;
    }

    return is_sorted_asc($arr, $cur + 1);
}
