<?php

/**
 * @param int[] $arr The array, elements of which are to be checked
 *  for fulfilling the predicate represented by $is_pred_fulfilled_fn.
 * @param callable $is_pred_fulfilled_fn A function representing the predicate
 *  to check the elements of $arr for fulfilling.
 * @param int $cur Always 0; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it is the index of the element
 *  of $arr currently being checked for fulfilling the predicate represented
 *  by $is_pred_fulfilled_fn.
 * @return bool True if all of the elements in $arr fulfil the predicate
 *  represented by $is_pred_fulfilled_fn; otherwise, false.
 */
function every($arr, $is_pred_fulfilled_fn, $cur) {
    if ($cur === count($arr)) {
        return true;
    }

    if (!$is_pred_fulfilled_fn($arr[$cur])) {
        return false;
    }
        
    return every($arr, $is_pred_fulfilled_fn, $cur + 1);
}
