<?php

/**
 * @param callable $is_pred_fulfilled_fn A function representing the predicate
 *  that an element in $arr is to fulfil.
 * @param int[] $arr The array, elements in which are to be checked
 *  for fulfilling the predicate represented by is_pred_fulfilled_fn.
 * @param int $cur Always 0; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it represents the index
 *  of the element in $arr currently being checked for fulfilling the predicate
 *  represented by $is_pred_fulfilled_fn.
 * @return int|null If any elements in $arr fulfill the predicate represented
 *  by $is_pred_fulfilled_fn, the index of the first of them; otherwise, NULL.
 */
function find_first_idx($is_pred_fulfilled_fn, $arr, $cur) {
    if ($cur === count($arr)) {
        return NULL;
    }

    if ($is_pred_fulfilled_fn($arr[$cur]) === true) {
        return $cur;
    }

    return find_first_idx($is_pred_fulfilled_fn, $arr, $cur + 1);
}
