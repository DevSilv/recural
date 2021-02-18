<?php

require_once __dir__ . "/../../../searching/find-first-idx/php/find-first-idx.php";

/**
 * @param int $elem An element to insert into $arr.
 * @param int[] $arr The array to insert $elem into, elements of which are
 *  in ascending order.
 */
function insert($elem, $arr) {
    $idx = find_first_idx(fn($e) => $e >= $elem, $arr, 0);

    if ($idx === NULL) {
        return array_merge($arr, [$elem]);
    }

    return array_merge(
        array_slice($arr, 0, $idx), [$elem], array_slice($arr, $idx)
    );
}

/**
 * @param int[] $arr The array to sort.
 * @param int $cur Always 0; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it represents the index
 *  of the element currently being inserted into $res.
 * @param int[] $res Always []; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it represents an array containg
 *  the elements from $arr that are currently sorted.
 * @return int[] An array containing the same elements as $arr and containing
 *  $elem, elements of which are in ascending order.
 */
function insertion_sort_alternative_helper($arr, $cur, $res) {
    if ($cur === count($arr)) {
        return $res;
    }

    return insertion_sort_alternative_helper(
        $arr, $cur + 1, insert($arr[$cur], $res)
    );
}

/**
 * @param int[] $arr The array to sort.
 * @return int[] An array containing the same elements as $arr and containing
 *  $elem, elements of which are in ascending order.
 */
function insertion_sort_alternative($arr) {
    if (count($arr) < 2) {
        return $arr;
    }

    return insertion_sort_alternative_helper($arr, 0, []);
}
